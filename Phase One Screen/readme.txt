Phase One Filter

A lightweight, HR-friendly web application designed for the initial phase of resume screening. This tool helps recruiters quickly filter candidates based on specific job requirements using keyword matching, without complex ranking algorithms or AI bias.

Core Purpose

The app simplifies the "Phase One" screening process: checking if a candidate meets the basic criteria (Yes/No/Partial) to decide whether to move them forward or reject them.

Key Features

1. Customizable Job Criteria

Set a specific Job Title.

Define a list of Required Skills/Keywords (e.g., "React", "Python", "Leadership").

These criteria are saved locally and used to grade incoming resumes.

2. Resume Analysis

Input Methods: Upload .txt files or copy-paste resume text directly.

Automated Scanning: The app scans the text for your defined keywords.

Match Status:

🟢 Meets Requirements: 100% of keywords found.

🟡 Partial Match: 50% - 99% of keywords found.

🔴 Does Not Meet: Less than 50% of keywords found.

3. Review Workflow

Dashboard: A clean card-based view of all candidates.

Binary Decision: Simple Select or Reject actions.

Tabs: Organize candidates into "Review Needed", "Selected", and "Rejected" lists.

Undo: Easily revert a decision if made by mistake.

4. Data Persistence

All data (criteria and candidates) is stored in the browser's Local Storage.

You can refresh the page or close the browser without losing your current session's work.

How to Use

Setup Criteria:

Click the Criteria button in the top right.

Enter the Job Role Title.

Type required skills and press Enter or click Add.

Click "Save & Continue".

Add Candidates:

Click Add Candidate.

Drag & drop a text file or paste the resume content into the text area.

Click Analyze Text.

Screening:

Review the candidate card on the dashboard.

Check the "Requirements Check" badge and the list of "Skills Found".

Click Select (Green check) to move them to the next phase.

Click Reject (Red X) to filter them out.

Technical Details

Framework: React

Styling: Tailwind CSS

Icons: Lucide React

Architecture: Single-file Component (App.jsx)

Storage: localStorage (Client-side only)

Limitations

File Support: Currently supports raw text and .txt files to ensure privacy and lightweight processing. PDFs must be converted to text or copy-pasted.

Matching Logic: Uses exact string matching (case-insensitive). It does not infer synonyms (e.g., "JS" will not automatically match "JavaScript" unless explicitly added as a separate keyword).