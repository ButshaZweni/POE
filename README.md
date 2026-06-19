# Kizuna Alliance Website

A static nonprofit website for Kizuna Alliance, built with **HTML5, CSS3, and vanilla JavaScript**. The site presents the organization's mission, services, volunteer opportunities, donation options, and contact details with responsive design, interactive elements, accessibility features, and modern UX patterns.

See [SKILLS.md](SKILLS.md) for the full skills reference and assessment criteria mapping.

## 🎯 Project Overview

This website showcases a community-focused organization with a complete interactive experience:

**Part 2** — CSS refinements, improved layout, visual consistency, and collapsible content.

**Part 3** — Interactive features (gallery, map, tabs, accordions), form validation, dynamic content filtering, and accessibility enhancements.

**Part 4** — Keyboard navigation, improved form UX (loading states, aria labels), tap-to-zoom images, success feedback animations, and mobile-optimized forms.

### Key Highlights

✅ **Interactive Elements** — Gallery lightbox, tap-to-zoom, image modals, service tabs, collapsible accordions  
✅ **Dynamic Content** — Real-time search and filtering for community stories  
✅ **Accessibility** — ARIA labels, keyboard navigation, focus indicators, form error states  
✅ **Form UX** — Client-side validation, loading states, success/error feedback overlays  
✅ **Mobile-First** — Responsive layout, touch-friendly inputs (44px min-height), 16px font prevents iOS zoom  
✅ **Keyboard Navigation** — Escape to close modals, Tab focus trapping, arrow key support planned  
✅ **No Animations** — Disabled all CSS transitions and animations for performance  

## 📄 Pages

| Page | Purpose |
|------|---------|
| **index.html** | Home with hero, impact stats, gallery, dynamic story search, quick links |
| **aboutus.html** | Mission, vision, goals, team bios with collapsible details |
| **service.html** | Programs & initiatives with interactive tab panels |
| **donate.html** | Donation form with contribution options |
| **enquiry.html** | General enquiry form |
| **contactus.html** | Contact form, office map, location info |
| **volunteer.html** | Volunteer signup form |
| **login.html** | Login/Sign-up tabbed interface with validation |

## 🛠 Assets

| File | Purpose |
|------|---------|
| **style.css** | Global styles, responsive layout, form styling, accessibility focus states |
| **header-footer.js** | All interactivity: modals, galleries, tabs, validation, maps, search, zoom |
| **Pictures/** | Hero images, program photos, gallery images |

## ✨ Interactive Features

### Gallery Lightbox
- Click any image to open full-screen lightbox modal
- Tap image to zoom (2x scale)
- Click outside image or press Escape to close
- Zoom state persists until manually reset

### Image Tap-to-Zoom
- All content images are clickable and zoomable
- Visual cursor feedback (`zoom-in` / `zoom-out`)
- Keyboard & mouse support

### Dynamic Content Search
- Real-time filter for community stories on home page
- Search across title, summary, category, location
- Empty state message when no results

### Service Tabs
- Click to switch between Education, Food Aid, Community Work
- Active tab styling with green background
- Smooth tab panel switching

### Collapsible Accordions
- Expandable details for about page sections
- Smooth height animation
- Only one section open at a time (optional)

### Interactive Map Widget
- Custom markers for office locations
- Zoom in/out buttons (±0.18 scale step)
- Click markers to view location details
- Min/max zoom limits (0.8 – 1.8)

### Form Validation
- Client-side email validation
- Phone number format checking (7-20 chars, allows +, -, (), spaces)
- Required field checking
- Real-time error feedback
- Success overlay with thank-you message

### Form Loading State
- Submit button shows "Submitting..." text
- Button disabled during submission
- `aria-busy` attribute for screen readers
- 800ms simulated delay for user feedback

## ♿ Accessibility Features

- **ARIA Labels** — All form inputs have `aria-label`, `aria-required`, `aria-invalid`
- **Focus Indicators** — 2px green outline on all focusable elements
- **Keyboard Navigation** — 
  - Escape to close lightbox
  - Tab to navigate form fields
  - Enter to submit forms
  - Arrow keys for future carousel/navigation
- **Screen Reader Support** — Proper semantic HTML, alt text on all images, alert roles
- **Touch Friendly** — 44px minimum touch targets on mobile
- **Color Contrast** — All text meets WCAG AA standards



### Version 4.0 — Accessibility & UX Enhancement (Current)
Date: June 2026

#### Added
- **Keyboard Navigation** — Escape closes lightbox, focus trapping in modals, arrow key placeholders
- **Accessibility Attributes** — `aria-label`, `aria-required`, `aria-invalid`, `aria-busy` on all form inputs
- **Form Loading State** — Submit button shows "Submitting..." with disabled state
- **Focus Indicators** — 2px green outline on buttons, links, form fields for keyboard navigation
- **Mobile Form Optimization**
  - Full-width inputs on screens ≤768px
  - 44px minimum touch target height (WCAG AA)
  - 16px font size (prevents iOS auto-zoom)
  - Better label styling
- **Form Error Marking** — Visual `aria-invalid` feedback, auto-cleared on successful submission
- **Button States** — Hover, focus, active, disabled states with clear visual feedback

#### Improved
- Form accessibility with aria labels on all inputs
- Button styling with better visual states
- Mobile responsiveness for forms
- Focus management for keyboard users
- Tab navigation through interactive elements

### Version 3.0 — Interactive & Feedback Enhancement
**Date: June 2026

#### Added
- **Image Tap-to-Zoom** — Click any content image to zoom (2x scale) in lightbox
- **Image Zoom Controls** — Tap again to unzoom, click outside/Esc to close
- **Success Feedback Animation** — Pop-in overlay with checkmark and "Thank you!" message
- **Form Feedback Styling** — Improved success/error visual feedback
- **Dynamic Escape Key Handler** — Close modals and reset zoom state

#### Improved
- Lightbox modal with better close button and caption
- Form submission feedback with dedicated animations
- Modal reset behavior when closing

### Version 2.1 — Animation Removal & Stability
**Date:** June 2026

#### Removed
- Global CSS animations (pageLoadFadeIn, slideIn*, scaleIn, pulse, float, shimmer, gradientShift)
- All form input animations
- Button hover animations
- Link animations
- Navigation animations
- Footer animations

#### Added
- Global CSS override: `animation: none !important; transition: none !important;` on all elements
- Removed transitions from injected JS styles
- Replaced animated hover states with static styling

### Version 2.0 — Core Features
**Date:May 2026

#### Added
- **Gallery Lightbox** — Click image to open full-screen modal
- **Interactive Map Widget** — Zoom controls, clickable markers with location info
- **Dynamic Content Search** — Real-time filtering for community stories
- **Service Tabs** — Switch between program categories
- **Collapsible Accordions** — Expandable about page sections
- **Form Validation** — Email, phone, required field checking
- **Feedback Overlays** — Success/error message modals
- **Login/Sign-Up Page** — Tabbed interface with client-side validation

#### Improved
- JavaScript centralized in `header-footer.js`
- Form handling across all pages
- User feedback mechanisms
- Modal interactions

### Version 1.0 — Initial Release
**Date: April 2026

#### Added
- 8 HTML pages (home, about, services, donate, enquiry, contact, volunteer, login)
- Responsive CSS layout with card design
- Navigation menu and footer
- SEO metadata (titles, keywords, descriptions)
- Image alt text for accessibility
- Responsive grid layouts

## 🚀 Getting Started

### View Website
1. Open any `.html` file in a web browser
2. Start with `index.html` for the home page

### Test Interactive Features

| Feature | How to Test |
|---------|------------|
| Gallery | Click image on home page → opens lightbox → click image to zoom → Esc to close |
| Image Zoom | Click any content image in modals → tap again to toggle zoom |
| Search | Home page → type in search box → stories filter in real-time |
| Service Tabs | Service page → click Education/Food Aid/Community Work tabs |
| Accordions | About page → click sections to expand/collapse |
| Interactive Map | Contact page → click zoom buttons (±), click markers for details |
| Form Validation | Any form → try submitting empty or invalid email → see error messages |
| Form Success | Submit valid form → see success overlay with thank-you message |
| Keyboard Nav | Press Tab through form → Escape to close modal → Enter to submit |
| Mobile | Resize browser to ≤768px → forms become full-width with larger touch targets |

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Escape** | Close lightbox modal |
| **Tab** | Navigate to next focusable element |
| **Shift+Tab** | Navigate to previous focusable element |
| **Enter** | Submit form (when focused on submit button) |
| **Space** | Activate buttons/tabs (when focused) |

## 🛠 Tech Stack

- **HTML5** — Semantic structure, form elements, accessibility
- **CSS3** — Responsive grid, flexbox, focus states, mobile media queries
- **JavaScript** (vanilla) — Event listeners, DOM manipulation, form validation, modals

**No frameworks, libraries, or build tools required.**


**Tested features:**
- Gallery zoom on desktop and mobile
- Touch interactions on mobile devices
- Keyboard navigation (desktop)
- Form validation across all browsers
- Responsive layout on various screen sizes

## 📝 Notes

- All validation and feedback is **client-side only**
- No server-side email or data persistence
- Images are static (in `Pictures/` folder)
- All interactivity uses vanilla JavaScript (no dependencies)
- Accessibility tested with keyboard navigation and screen reader attributes

## 📄 License

This project is for educational purposes. Modify and distribute as needed for Kizuna Alliance.

---

**Last Updated: June 2026  
**Version:** 4.0  
**Status:** Production Ready (Client-Side)
2. Host on a static site hosting service (GitHub Pages, Netlify, Vercel, etc.).
3. To add backend functionality, deploy a server (Node.js, PHP, etc.) and update form action URLs.

## Notes

- **Current Status:** Fully functional front-end with rich interactive features and client-side validation. Backend integration is optional and not yet implemented.
- **Future Enhancements:** To complete authentication, add a backend server (Node.js/Express, PHP, or similar) to:
  - Store user credentials securely (hashed passwords)
  - Handle login and sign-up form submissions
  - Manage user sessions and cookies
  - Send contact/enquiry emails from the contact and enquiry forms
  - Persist donation records
- The site uses a responsive layout and is optimized for desktop and mobile screens.
- All form submissions currently display demo alerts; integrate a backend API to make them functional.
- SEO metadata is included on all pages for search engine optimization.
