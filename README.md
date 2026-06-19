# Kizuna Alliance Website

A static nonprofit website for Kizuna Alliance, built with HTML and CSS. The site presents the organization's mission, services, volunteer opportunities, donation options, and contact details using responsive cards, forms, and navigation.

## Project Overview

This project is a simple static website designed for a community-focused organization. It includes multiple HTML pages with a shared layout style and a single stylesheet for visual consistency.

Part 2 improvements:
- Added and refined CSS to improve the global style, layout, spacing, and readability.
- Improved HTML structure with picture cards, centered alignment, and better page composition.
- Made pages more user friendly and visually appealing.
- Shortened long page sections using collapsible content so users do not have to scroll for too long.

Part 3 enhancements:
- Added comprehensive login and sign-up page with tabbed interface and client-side validation.
- Integrated form validation across all pages (enquiry, contact, donation, volunteer, login/signup).
- Implemented interactive features: gallery lightbox, dynamic content filtering, collapsible accordions, custom interactive map widget, and service tab panels.
- Added responsive feedback overlays for form submission success/error messages.
- Moved all authentication logic into `header-footer.js` for centralized JavaScript management.
- Added SEO metadata (title, keywords, description) to all pages.

Key features:
- Responsive navigation menu with Login link across all pages
- Hero section with image overlay on the homepage
- Service cards describing the organization's programs
- About page with expandable sections for goals and team details
- Donation, enquiry, volunteer, and contact pages with user-facing forms
- **Login and Sign Up page with tabbed interface and validation**
- **Gallery with lightbox modal for image viewing**
- **Dynamic content search and filtering**
- **Interactive map widget with zoom controls**
- **Service tabs for program descriptions**
- Consistent footer with social links and page navigation
- Form validation with user-friendly error messages
- Responsive design for desktop and mobile

## Pages

- `index.html` — Home page with hero messaging, impact summary, gallery, dynamic content search, and quick access to About and Services.
- `aboutus.html` — Organizational history, mission, vision, and expandable details for goals and team members.
- `service.html` — Service overview page listing community programs with interactive tab panels for education support, food distribution, garden work, cleanups, outreach, mentorship, and emergency assistance.
- `donate.html` — Donation page with a contribution form and information about alternate gift donations.
- `enquiry.html` — General enquiry form for questions about volunteering, sponsorship, or services.
- `contactus.html` — Contact page with a message form, office locations, and embedded maps.
- `volunteer.html` — Volunteer signup page with eligibility information and a registration form.
- `login.html` — **Member login and sign-up page with tabbed interface, email/password validation, and client-side authentication UI.**

## Assets

- `style.css` — Main stylesheet providing responsive layout, card styling, form styling, and interactive element animations.
- `Pictures/` — Image assets used throughout the site, including hero images and program photos.
- `header-footer.js` — Centralized JavaScript file providing:
  - **Interactive modals** for gallery lightbox viewing
  - **Gallery grid** with clickable image items
  - **Dynamic content search and filtering** for community stories
  - **Form validation** for all forms (enquiry, contact, donation, volunteer, login/signup)
  - **User feedback overlays** for success and error messages
  - **Custom interactive map widget** with zoom controls and clickable markers
  - **Service tab panels** for dynamic content switching
  - **Login/Sign-up authentication UI** with tab switching and password validation
  - Linked from all HTML pages

## Website Behavior

- Navigation links are static HTML anchors; all pages include a "Login" link in header and footer.
- Forms use placeholder action values such as `process_donation.php`, `process_enquiry.php`, and `process_volunteer.php`; backend processing is not included in this repository.
- **Login and Sign-Up pages use client-side validation for email and password fields; form submission shows demo alerts and does not persist data.**
- The About page uses HTML `<details>` elements for collapsible content to keep the page clean while preserving all information.
- Gallery lightbox opens when clicking any image in the gallery grid.
- Dynamic content on the home page filters stories based on search input in real-time.
- Service tabs switch between different program categories on the service page.
- Interactive map responds to zoom controls and marker clicks to display location details.

## Technologies Used

- HTML5
- CSS3
- JavaScript (client-side validation and interactivity)

## Getting Started

### How to View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ButshaZweni/POE.git
   cd POE
   ```
2. Open `index.html` in your browser to view the home page.
3. Use the navigation menu to browse all pages and features.
4. Try the login page by clicking "Login" in the header or footer.

### Testing Interactive Features

- **Gallery:** Click any image on the home page gallery to open the lightbox modal.
- **Dynamic Search:** Use the search box on the home page to filter community stories.
- **Service Tabs:** Click the Education, Food Aid, or Community Work tabs on the service page.
- **Interactive Map:** Click the zoom buttons and markers on the contact page.
- **Login/Sign-Up:** Visit the login page and try the Log in or Sign up forms (client-side validation only).
- **Forms:** Try submitting any form to see validation messages and success/error alerts.

### Deploying to Production

1. Push to GitHub master:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```
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
