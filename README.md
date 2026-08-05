 Rich Text Editor:-
A lightweight, browser-based rich text editor built with vanilla JavaScript. Create, format, and export documents without any heavy frameworks.

Features:-
- Text Formatting: Bold, italic, underline, strikethrough, alignment, headings, lists
- Live HTML View: Toggle between WYSIWYG editing and raw HTML code
- Link Insertion: Add hyperlinks via prompt dialog
- Color Control: Custom text and highlight colors with native color pickers
- Export Options:
  - PDF — via html2pdf.js
  - Plain Text— stripped formatting, `.txt` download
  - New File — quick reset to blank document
- Smart Link Handling: Links auto-open in new tabs; editor stays editable when not hovering links
- 
Tech Stack:-
 Layer  Technology:-
 Core  Vanilla JavaScript (`document.execCommand`) |
 Styling  CSS with SCSS-style nesting (preprocessor or native nesting) 
 Icons Font Awesome 6 
 PDF Export  html2pdf.js (CDN)

 Quick Start:-
1. Clone or download the repo
2. Open `index.html` in any modern browser
3. Start typing in the editor area
No build step required — runs entirely client-side.

 Usage Notes:-
- Font Size: Uses `execCommand` size levels (1–7), mapped to semantic labels
- Format Block: Headings (`h1`–`h6`) and paragraph tags
- HTML Mode: The "show code" button toggles between rendered output and raw HTML editing; changes are **not** live-synced — exiting HTML mode restores the last captured HTML state
