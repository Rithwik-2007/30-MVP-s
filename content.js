// Configuration
let targetShow = "";
let currentSeason = 0;
let currentEpisode = 0;

// Initialize
chrome.storage.local.get(['showName', 'season', 'episode'], (result) => {
  if (result.showName) {
    targetShow = result.showName.toLowerCase();
    currentSeason = result.season || 1;
    currentEpisode = result.episode || 0;
    
    console.log(`Spoiler Shield Active: Protecting ${targetShow} beyond S${currentSeason}E${currentEpisode}`);
    scanAndBlock();
    observeChanges();
  }
});

function scanAndBlock() {
  if (!targetShow) return;

  // We scan specific text-heavy elements to avoid breaking layout
  const elements = document.querySelectorAll('p, li, h1, h2, h3, h4, span, div, article');

  elements.forEach(element => {
    // Skip if already processed or inside a script/style
    if (element.dataset.spoilerChecked || 
        ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(element.tagName) ||
        element.children.length > 5) { // Optimization: Don't check massive container divs, only their children
      return; 
    }

    const text = element.textContent.toLowerCase();

    // 1. Check if the text is relevant to the show
    if (text.includes(targetShow)) {
      checkForSpoilers(element, text);
    }
    
    element.dataset.spoilerChecked = "true";
  });
}

function checkForSpoilers(element, text) {
  // Regex looks for patterns like:
  // "Season 5", "S05", "Season 4 Episode 10", "S4E10", "Episode 5"
  
  // Pattern 1: S(Season) E(Episode) format or Season X Episode Y
  // Captures: Group 1 (Season), Group 3 (Episode)
  const seasonEpisodeRegex = /(?:season|s)\s*(\d+).*?(?:episode|e|ep)\s*(\d+)/gi;
  
  // Pattern 2: Just Season mentions (e.g., "In Season 5...")
  const seasonRegex = /(?:season|s)\s*(\d+)/gi;

  let blocked = false;

  // Check Season + Episode combo
  let match;
  while ((match = seasonEpisodeRegex.exec(text)) !== null) {
    const foundSeason = parseInt(match[1], 10);
    const foundEpisode = parseInt(match[2], 10);

    if (foundSeason > currentSeason) {
      blocked = true;
    } else if (foundSeason === currentSeason && foundEpisode > currentEpisode) {
      blocked = true;
    }
  }

  // Check just Season mentions if no specific episode triggered it yet
  // If we find "Season 5" and user is on "Season 3", block it.
  if (!blocked) {
    while ((match = seasonRegex.exec(text)) !== null) {
      const foundSeason = parseInt(match[1], 10);
      if (foundSeason > currentSeason) {
        blocked = true;
      }
    }
  }

  if (blocked) {
    applySpoilerMask(element);
  }
}

function applySpoilerMask(element) {
  // Ensure we don't double-mask
  if (element.style.filter === 'blur(5px)') return;

  const originalText = element.textContent; // Store text if we wanted to get fancy
  
  element.style.filter = 'blur(5px)';
  element.style.cursor = 'pointer';
  element.style.userSelect = 'none';
  element.title = "Possible Spoiler! Click to reveal.";
  element.dataset.originalColor = element.style.color;
  
  // Add a visual indicator overlay logic could go here, but blur is effective

  element.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    if (confirm("This might contain spoilers. Reveal?")) {
      element.style.filter = 'none';
      element.style.cursor = 'auto';
      element.style.userSelect = 'auto';
    }
  }, { once: true });
}

// Watch for new content (infinite scrolling, dynamic pages)
function observeChanges() {
  const observer = new MutationObserver((mutations) => {
    let shouldScan = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldScan = true;
        break;
      }
    }
    if (shouldScan) {
      scanAndBlock();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}