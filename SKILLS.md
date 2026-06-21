# Skills Reference

## Overview

This document summarizes the website features and implementation details for the POE project.

---

## Features & Implementation

### Functionality: Interactive Elements

- Gallery lightbox modal for viewing images in full screen
- Tap-to-zoom image support inside the modal
- Service tabs for switching between content panels
- Collapsible accordions with smooth height animation
- Form feedback overlays for success and error messages
- Interactive map markers that display details when clicked
- Map zoom controls with limits and smooth scaling

### Functionality: Interactive Maps

- Custom map widget built from HTML/CSS/JavaScript
- Zoom controls for adjusting the map scale
- Clickable location markers with active state styling
- Marker info display for location titles and addresses
- Responsive design for mobile and desktop viewports

### Functionality: Gallery Lightbox

- Responsive gallery grid of image items
- Full-screen overlay with image caption and close button
- Click-to-open behavior for gallery items
- Close on outside click and Escape key support
- Tap-to-zoom toggle for images inside the lightbox

### Dynamic Content & Search

- Real-time content filtering as the user types
- Multi-field search across titles, summaries, categories, and locations
- Case-insensitive matching for broad usability
- Empty-state message when no results match the search
- Story cards showing title, summary, category, and location

### SEO & Accessibility

- Unique, descriptive title tags on each page
- Meta keywords tailored to each page's content
- Meta description tags for better search result summaries
- Descriptive alt text for images and semantic image filenames
- Accessible form labels and keyboard-friendly interactions

### Forms & Validation

- Structured enquiry and contact forms with required fields
- Email validation and optional phone validation
- Clear error messages for invalid input
- Success overlays with visual confirmation
- Uniform validation behavior across forms

## Implementation Notes

- Main JavaScript logic is located in `header-footer.js`
- Page content is defined in the HTML files such as `index.html`, `contactus.html`, `enquiry.html`, and `service.html`
- The document avoids scoring or rubric-specific wording and focuses on implementation details

**Last Updated:** June 2026
