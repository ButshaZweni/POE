# Kizuna Alliance Website

A static nonprofit website for Kizuna Alliance, built with HTML and CSS. The site presents the organization's mission, services, volunteer opportunities, donation options, and contact details using responsive cards, forms, and navigation.

## Project Overview

This project is a simple static website designed for a community-focused organization. It includes multiple HTML pages with a shared layout style and a single stylesheet for visual consistency.

Part 2 improvements:
- Added and refined CSS to improve the global style, layout, spacing, and readability.
- Improved HTML structure with picture cards, centered alignment, and better page composition.
- Made pages more user friendly and visually appealing.
- Shortened long page sections using collapsible content so users do not have to scroll for too long.

Key features:
- Responsive navigation menu across pages
- Hero section with image overlay on the homepage
- Service cards describing the organization's programs
- About page with expandable sections for goals and team details
- Donation, enquiry, volunteer, and contact pages with user-facing forms
- Consistent footer with social links and page navigation

## Pages

- `index.html` — Home page with hero messaging, impact summary, and quick access to About and Services.
- `aboutus.html` — Organizational history, mission, vision, and expandable details for goals and team members.
- `service.html` — Service overview page listing community programs such as education support, food distribution, garden work, cleanups, outreach, mentorship, and emergency assistance.
- `donate.html` — Donation page with a contribution form and information about alternate gift donations.
- `enquiry.html` — General enquiry form for questions about volunteering, sponsorship, or services.
- `contactus.html` — Contact page with a message form, office locations, and embedded maps.
- `volunteer.html` — Volunteer signup page with eligibility information and a registration form.

## Assets

- `style.css` — Main stylesheet for the entire website
- `Pictures/` — Image assets used throughout the site, including hero and program images
- `header-footer.js` — JavaScript file providing interactive modals, gallery lightbox, dynamic content search, form validation, and custom map features, linked from all main HTML pages
- `javascript.jv` — Additional file in the workspace; not currently referenced by the site

## Website Behavior

- Navigation links are static HTML anchors.
- Forms use placeholder action values such as `process_donation.php`, `process_enquiry.php`, and `process_volunteer.php`; backend processing is not included in this repository.
- The About page uses HTML `<details>` elements for collapsible content to keep the page clean while preserving all information.

## Technologies Used

- HTML5
- CSS3

## How to View Locally

1. Open the project folder in a code editor or file manager.
2. Open any HTML file such as `index.html` in your browser.
3. For a better local development experience, use a simple local server if available.

## Notes

- The project is currently static; additional backend implementation would be needed for actual form submission handling.
- The site uses a responsive layout, but minor adjustments may be needed for specific mobile devices or screen sizes.
- If you want, the next update can add a shared header/footer include strategy or a simple script to improve mobile navigation.
