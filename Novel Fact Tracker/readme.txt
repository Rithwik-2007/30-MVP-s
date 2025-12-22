Novel Fact Tracker (MVP)

A specialized tool for novel writers that automates the objective tracking of characters and plot progression.

Problem Solved

Writing a novel requires keeping track of dozens of variables: character locations, injuries, power shifts, and the sequence of events. Manual "story bibles" are tedious and often lag behind the actual drafting process. This MVP uses AI to perform high-precision factual extraction, acting as an automated index of your manuscript.

What It Is

An objective extraction engine. It reads your text as a series of facts to be cataloged.

What It Is NOT

Not a Writing Assistant: It will not suggest better word choices or fix your grammar.

Not a Literary Critic: It does not analyze themes, symbolism, or subtext.

Not an Interpreter: It will never guess what you "meant" to say.

Core Features

Zero-Entry Tracking: Upload a chapter (plain text) and the system handles the rest.

Character Registry: Extracts names, traits, and status (alive/dead/injured) only if explicitly written.

Factual Timeline: Generates a chronological list of events based solely on written content.

Status Change Detection: Flags power shifts or significant status updates (e.g., "John lost his sword") only when shown in the text.

Plot Summary: A dry, factual account of "what happened," devoid of emotional fluff.

The "Strict Factual" Rule

The AI inside this MVP is constrained by a system prompt that mandates:

No Inference: If the text says "He looked out the window," the tool will NOT report that he is "contemplating his past" unless the text explicitly states he is contemplating his past.

No Symbolism: A storm is just weather unless a character explicitly calls it an omen.

"Not specified in the text": This is the default response for any missing information.

How to Run

Open the application.

Click "Upload Chapters" to select one or more .txt files from your computer.

Click "Extract Facts" on a specific chapter to process it.

Toggle between Characters, Timeline, Progression, and Status Changes to view the results.

Technical Constraints

Works with Plain Text (.txt) only.

In-memory processing: Data is lost on page refresh (this is a session-based MVP).

Single-chapter focus: Currently summarizes per chapter for maximum factual accuracy.

Disclaimer

This tool is built for accuracy over creativity. If your writing is ambiguous, the tool will report that the facts are "not specified." It is a tool for writers to audit their own clarity and continuity.