document.addEventListener('DOMContentLoaded', () => {
  // Load saved settings
  chrome.storage.local.get(['showName', 'season', 'episode'], (result) => {
    if (result.showName) document.getElementById('showName').value = result.showName;
    if (result.season) document.getElementById('season').value = result.season;
    if (result.episode) document.getElementById('episode').value = result.episode;
  });

  // Save settings
  document.getElementById('saveBtn').addEventListener('click', () => {
    const showName = document.getElementById('showName').value.trim();
    const season = parseInt(document.getElementById('season').value, 10);
    const episode = parseInt(document.getElementById('episode').value, 10);

    if (!showName) {
      showStatus('Please enter a show name!', 'red');
      return;
    }

    chrome.storage.local.set({
      showName: showName,
      season: season,
      episode: episode
    }, () => {
      showStatus('Settings Saved!', 'green');
      
      // Optionally reload the current tab to apply changes immediately
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) chrome.tabs.reload(tabs[0].id);
      });
    });
  });

  function showStatus(text, color) {
    const statusEl = document.getElementById('status');
    statusEl.textContent = text;
    statusEl.style.color = color;
    setTimeout(() => {
      statusEl.textContent = '';
    }, 2000);
  }
});