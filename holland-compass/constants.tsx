
import { RiasecType, Question, TypeDetail } from './types';

export const RIASEC_DETAILS: Record<RiasecType, TypeDetail> = {
  [RiasecType.REALISTIC]: {
    title: "Realistic",
    shortDesc: "Practical and Hand-on",
    longDesc: "You likely prefer activities that involve physical action, working with tools, or interacting with the tangible world.",
    enjoyments: [
      "Building or repairing things",
      "Working outdoors or with nature",
      "Using machines or equipment",
      "Practical, clear-cut results"
    ],
    careerClusters: ["Engineering", "Trades", "Agriculture", "Physical Sciences"],
    notLabel: "This does not mean you are only a 'manual laborer' or uninterested in theory; it simply means you find satisfaction in tangible results."
  },
  [RiasecType.INVESTIGATIVE]: {
    title: "Investigative",
    shortDesc: "Analytical and Observant",
    longDesc: "You often find yourself drawn to complex puzzles, research, and understanding the 'why' behind how things work.",
    enjoyments: [
      "Analyzing data or information",
      "Solving mathematical or scientific problems",
      "Independent research",
      "Developing theories or hypotheses"
    ],
    careerClusters: ["Research", "Medicine", "Technology", "Academia"],
    notLabel: "This does not mean you are a 'loner' or 'bookworm'; it means you value intellectual challenge and discovery."
  },
  [RiasecType.ARTISTIC]: {
    title: "Artistic",
    shortDesc: "Creative and Original",
    longDesc: "You likely value self-expression and enjoy working in environments that are less structured and more open to creativity.",
    enjoyments: [
      "Designing visual elements",
      "Writing or storytelling",
      "Self-expression through music or performance",
      "Ideating outside traditional boundaries"
    ],
    careerClusters: ["Design", "Media", "Arts", "Creative Writing"],
    notLabel: "This does not mean you are 'unfocused' or 'impractical'; it means you thrive when you can bring new ideas to life."
  },
  [RiasecType.SOCIAL]: {
    title: "Social",
    shortDesc: "Supportive and Human-Centered",
    longDesc: "You likely feel most fulfilled when you are helping, teaching, or guiding others through their own journeys.",
    enjoyments: [
      "Teaching or training",
      "Counseling or providing support",
      "Working in community-driven groups",
      "Nurturing growth in others"
    ],
    careerClusters: ["Education", "Healthcare", "Social Work", "Non-Profits"],
    notLabel: "This does not mean you are 'too soft' or 'non-competitive'; it means you prioritize human connection and collective well-being."
  },
  [RiasecType.ENTERPRISING]: {
    title: "Enterprising",
    shortDesc: "Persuasive and Ambitious",
    longDesc: "You likely enjoy leading teams, influencing decisions, and working towards clear, measurable goals or business outcomes.",
    enjoyments: [
      "Leading projects or teams",
      "Persuading others to join a cause",
      "Managing business initiatives",
      "Setting and achieving performance goals"
    ],
    careerClusters: ["Management", "Marketing", "Entrepreneurship", "Law"],
    notLabel: "This does not mean you are 'bossy' or 'greedy'; it means you find energy in initiative and leadership."
  },
  [RiasecType.CONVENTIONAL]: {
    title: "Conventional",
    shortDesc: "Organized and Precise",
    longDesc: "You likely enjoy creating order out of chaos, working with data, and ensuring that systems run smoothly and accurately.",
    enjoyments: [
      "Organizing records or information",
      "Following established procedures",
      "Working with numbers or data sets",
      "Ensuring attention to detail"
    ],
    careerClusters: ["Finance", "Administration", "Information Systems", "Logistics"],
    notLabel: "This does not mean you are 'boring' or 'rigid'; it means you value stability, clarity, and reliability."
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "On a quiet weekend, you’d most naturally find yourself...",
    options: [
      { id: '1r', text: "Building or fixing something around the house.", type: RiasecType.REALISTIC },
      { id: '1i', text: "Deep-diving into a documentary or a complex article.", type: RiasecType.INVESTIGATIVE },
      { id: '1a', text: "Working on a sketch, a poem, or a creative project.", type: RiasecType.ARTISTIC },
      { id: '1s', text: "Volunteering or catching up with a friend in need.", type: RiasecType.SOCIAL },
      { id: '1e', text: "Planning a side project or brainstorming a new idea.", type: RiasecType.ENTERPRISING },
      { id: '1c', text: "Organizing your files or planning the week ahead.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 2,
    prompt: "If you were to join a community project, you'd prefer to...",
    options: [
      { id: '2r', text: "Help with the physical construction or landscaping.", type: RiasecType.REALISTIC },
      { id: '2i', text: "Research the data and impact of the project.", type: RiasecType.INVESTIGATIVE },
      { id: '2a', text: "Design the logos, posters, or visual identity.", type: RiasecType.ARTISTIC },
      { id: '2s', text: "Manage the volunteer training and support.", type: RiasecType.SOCIAL },
      { id: '2e', text: "Lead the fundraising or pitch the idea to donors.", type: RiasecType.ENTERPRISING },
      { id: '2c', text: "Keep track of the budget and the schedule.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 3,
    prompt: "When learning something new, you tend to appreciate...",
    options: [
      { id: '3r', text: "Learning by doing and using your hands.", type: RiasecType.REALISTIC },
      { id: '3i', text: "Understanding the underlying science or logic.", type: RiasecType.INVESTIGATIVE },
      { id: '3a', text: "The freedom to interpret the topic creatively.", type: RiasecType.ARTISTIC },
      { id: '3s', text: "Discussing how the topic helps or affects people.", type: RiasecType.SOCIAL },
      { id: '3e', text: "Seeing how it can be used to achieve results.", type: RiasecType.ENTERPRISING },
      { id: '3c', text: "Having a clear, step-by-step instruction manual.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 4,
    prompt: "In a workplace setting, you value an environment that is...",
    options: [
      { id: '4r', text: "Practical and focused on tangible outcomes.", type: RiasecType.REALISTIC },
      { id: '4i', text: "Intellectually stimulating and discovery-based.", type: RiasecType.INVESTIGATIVE },
      { id: '4a', text: "Flexible and aesthetically inspiring.", type: RiasecType.ARTISTIC },
      { id: '4s', text: "Collaborative and supportive of people.", type: RiasecType.SOCIAL },
      { id: '4e', text: "Fast-paced and focused on growth.", type: RiasecType.ENTERPRISING },
      { id: '4c', text: "Structured, orderly, and well-managed.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 5,
    prompt: "You are given a complex puzzle. Your first instinct is to...",
    options: [
      { id: '5r', text: "Start fitting pieces together physically.", type: RiasecType.REALISTIC },
      { id: '5i', text: "Study the image and look for patterns first.", type: RiasecType.INVESTIGATIVE },
      { id: '5a', text: "Appreciate the colors and the artistic design.", type: RiasecType.ARTISTIC },
      { id: '5s', text: "Invite others to join and solve it together.", type: RiasecType.SOCIAL },
      { id: '5e', text: "Turn it into a fun challenge or competition.", type: RiasecType.ENTERPRISING },
      { id: '5c', text: "Sort all the pieces by color and shape first.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 6,
    prompt: "When you want to relax, you usually prefer...",
    options: [
      { id: '6r', text: "Tinkering with a hobby or doing yard work.", type: RiasecType.REALISTIC },
      { id: '6i', text: "Reading a non-fiction book or learning a skill.", type: RiasecType.INVESTIGATIVE },
      { id: '6a', text: "Listening to music or visiting a gallery.", type: RiasecType.ARTISTIC },
      { id: '6s', text: "Having a long conversation with a loved one.", type: RiasecType.SOCIAL },
      { id: '6e', text: "Browsing trends or planning your next big move.", type: RiasecType.ENTERPRISING },
      { id: '6c', text: "Updating your journal or tidying your space.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 7,
    prompt: "If you were to write a blog, the topic would likely be...",
    options: [
      { id: '7r', text: "How to build or maintain specific equipment.", type: RiasecType.REALISTIC },
      { id: '7i', text: "Explaining a scientific concept or a discovery.", type: RiasecType.INVESTIGATIVE },
      { id: '7a', text: "Personal essays, poetry, or visual art.", type: RiasecType.ARTISTIC },
      { id: '7s', text: "Advice on relationships or mental health.", type: RiasecType.SOCIAL },
      { id: '7e', text: "Strategies for leadership and productivity.", type: RiasecType.ENTERPRISING },
      { id: '7c', text: "Tips on financial planning or organization.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 8,
    prompt: "At a gathering, you are most likely the person who...",
    options: [
      { id: '8r', text: "Is helping fix the sound system or the grill.", type: RiasecType.REALISTIC },
      { id: '8i', text: "Is in a deep debate about a niche topic.", type: RiasecType.INVESTIGATIVE },
      { id: '8a', text: "Is discussing a new movie, song, or exhibition.", type: RiasecType.ARTISTIC },
      { id: '8s', text: "Is making sure everyone feels welcome.", type: RiasecType.SOCIAL },
      { id: '8e', text: "Is telling a story and engaging a crowd.", type: RiasecType.ENTERPRISING },
      { id: '8c', text: "Is helping keep the event running on time.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 9,
    prompt: "Which of these tasks feels most 'energizing' to you?",
    options: [
      { id: '9r', text: "Assembling a complex piece of furniture.", type: RiasecType.REALISTIC },
      { id: '9i', text: "Investigating why a system is failing.", type: RiasecType.INVESTIGATIVE },
      { id: '9a', text: "Brainstorming an original concept.", type: RiasecType.ARTISTIC },
      { id: '9s', text: "Mentoring a teammate who is struggling.", type: RiasecType.SOCIAL },
      { id: '9e', text: "Pitching a new idea to a group of people.", type: RiasecType.ENTERPRISING },
      { id: '9c', text: "Refining a process to make it more efficient.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 10,
    prompt: "You feel most accomplished when you have...",
    options: [
      { id: '10r', text: "Created something sturdy and useful.", type: RiasecType.REALISTIC },
      { id: '10i', text: "Solved a difficult technical problem.", type: RiasecType.INVESTIGATIVE },
      { id: '10a', text: "Expressed an idea in a beautiful way.", type: RiasecType.ARTISTIC },
      { id: '10s', text: "Positively impacted someone's life.", type: RiasecType.SOCIAL },
      { id: '10e', text: "Successfully led a project to completion.", type: RiasecType.ENTERPRISING },
      { id: '10c', text: "Organized a chaotic set of data.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 11,
    prompt: "When faced with a challenge, you prefer to...",
    options: [
      { id: '11r', text: "Try practical solutions one by one.", type: RiasecType.REALISTIC },
      { id: '11i', text: "Step back and analyze the root cause.", type: RiasecType.INVESTIGATIVE },
      { id: '11a', text: "Look for an unconventional or creative path.", type: RiasecType.ARTISTIC },
      { id: '11s', text: "Talk it out with others to find a group consensus.", type: RiasecType.SOCIAL },
      { id: '11e', text: "Decide on a direction and motivate the team.", type: RiasecType.ENTERPRISING },
      { id: '11c', text: "Check the existing rules or procedures for a fix.", type: RiasecType.CONVENTIONAL }
    ]
  },
  {
    id: 12,
    prompt: "Which of these roles sounds most appealing?",
    options: [
      { id: '12r', text: "The Specialist (Technical expertise).", type: RiasecType.REALISTIC },
      { id: '12i', text: "The Analyst (Finding clarity).", type: RiasecType.INVESTIGATIVE },
      { id: '12a', text: "The Visionary (New perspectives).", type: RiasecType.ARTISTIC },
      { id: '12s', text: "The Caretaker (Growth and support).", type: RiasecType.SOCIAL },
      { id: '12e', text: "The Motivator (Influence and drive).", type: RiasecType.ENTERPRISING },
      { id: '12c', text: "The Architect (Structure and order).", type: RiasecType.CONVENTIONAL }
    ]
  }
];
