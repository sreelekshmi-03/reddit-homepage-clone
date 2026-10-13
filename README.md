# Reddit Homepage Clone

A responsive Reddit-inspired homepage built with **HTML, CSS, and vanilla JavaScript** .
The project runs entirely in the browser and does not require a backend, framework, or API.

## Features

- **Reddit-inspired interface:** Header, logo, search bar, community sidebar, post feed, and navigation.
- **Responsive layout:** Desktop, tablet, and mobile layouts using CSS media queries.
- **Mobile-friendly navigation:** Collapsible sidebar and bottom navigation for smaller screens.
- **Original logo preserved:** Responsive styling adapts the navbar while keeping the existing logo asset.
- **Post feed:** Sample posts with community information, author details, timestamps, content, and interaction controls.
- **Light and dark themes:** Toggle between themes using the theme control.
- **Post search:** Search visible post content using the search field.
- **Interactive controls:** JavaScript event listeners handle supported interface actions.
- **Overflow fixes:** Responsive navbar sizing, full-width content on mobile, and constrained post images help prevent horizontal scrolling.
- **Vanilla JavaScript:** No JavaScript framework or library is required.

## Project Structure

reddit-homepage-clone/
├── index.html    # Page structure and content
├── style.css     # Styling, themes, and responsive layouts
├── script.js     # JavaScript interactions
└── README.md     # Project documentation


## Run Locally

1. Download or clone the repository.
2. Open the project folder in VS Code or another code editor.
3. Open `index.html` in a modern web browser.
4. Alternatively, use a local development server extension such as Live Server in VS Code.

No dependency installation or build command is required.

## Implementation Overview

### HTML

The HTML provides the page structure, including the navigation bar, search field, sidebar, main content area, post feed, and mobile navigation. The existing logo asset is retained.

### CSS

The stylesheet controls the visual design and responsive behavior.

- CSS custom properties manage theme colors.
- Flexbox and CSS Grid organize the navigation and page layout.
- Media queries adapt the layout to tablet and mobile screen sizes.
- The mobile navbar, post cards, and images are constrained to prevent horizontal overflow.
- The sidebar can slide in and out on smaller screens.
- A fixed bottom navigation bar is displayed on mobile.
- The desktop layout is retained separately from the mobile adjustments.
- Keyboard focus and hover states help make interactive controls easier to identify.

### JavaScript

The project uses plain JavaScript to handle interface interactions. Event listeners are attached after the document has loaded, and element checks help avoid errors when an optional element is missing.

Depending on the elements present in the HTML, the script can handle:

- Opening and closing the sidebar.
- Switching between light and dark themes.
- Filtering posts through search.
- Updating active bottom-navigation items.
- Handling like controls.
- Responding to the logout button.

## Assignment Checklist

- [] HTML, CSS, and vanilla JavaScript
- [] Reddit-inspired homepage interface
- [] Responsive desktop, tablet, and mobile styling
- [] Mobile navbar and sidebar adjustments
- [] Original logo preserved
- [] CSS-based layout and overflow fixes
- [] No framework or backend required
- [] Verify all interactions against the final project
- [] Test in the target browser
- [] Push the project to a public GitHub repository
- [] Submit the repository link

