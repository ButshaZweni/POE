/* Interactive enhancements for Kizuna Alliance site */

const siteFeatures = {
  dynamicStories: [
    {
      title: 'Community Learning Hub',
      summary: 'Free learning programs and tutoring for youth and adults across the region.',
      category: 'Education',
      location: 'Port Elizabeth',
    },
    {
      title: 'Mobile Food Support',
      summary: 'Weekly food deliveries to families in need, with community volunteers on the ground.',
      category: 'Food Security',
      location: 'Eastern Cape',
    },
    {
      title: 'Garden Renewal Project',
      summary: 'Neighborhood gardens restored to grow healthy food and build shared spaces.',
      category: 'Sustainability',
      location: 'Local Communities',
    },
  ],
  galleryImages: [
    { src: 'Pictures/gallery-1.jpg', alt: 'Volunteers planting trees' },
    { src: 'Pictures/gallery-2.jpg', alt: 'Community education outreach' },
    { src: 'Pictures/gallery-3.jpg', alt: 'Food distribution event' },
  ],
  mapMarkers: [
    { title: 'Head Office', coords: { x: 50, y: 30 }, details: '123 Rose Street, Port Elizabeth' },
    { title: 'Outreach Center', coords: { x: 78, y: 55 }, details: '45 Hope Avenue, Port Elizabeth' },
    { title: 'Volunteer Hub', coords: { x: 26, y: 72 }, details: 'Community Volunteer Hub' },
  ],
};

function createMessageBanner(container, text, type = 'success') {
  const existing = document.querySelector('.js-feedback-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = `js-feedback-overlay feedback-overlay feedback-overlay--${type}`;
  overlay.setAttribute('role', 'alert');
  overlay.setAttribute('aria-live', 'assertive');
  overlay.innerHTML = `
    <div class="feedback-overlay__content">
      <p>${text}</p>
      <button type="button" class="feedback-overlay__close" aria-label="Dismiss notification">OK</button>
    </div>
  `;

  overlay.querySelector('.feedback-overlay__close').addEventListener('click', () => {
    overlay.remove();
  });

  document.body.append(overlay);
  window.setTimeout(() => overlay.remove(), 5500);
}

function initModals() {
  const modal = document.createElement('div');
  modal.id = 'js-lightbox-modal';
  modal.className = 'lightbox-modal';
  modal.innerHTML = `
    <div class="lightbox-content">
      <button type="button" class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <img src="" alt="" class="lightbox-image">
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.append(modal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.matches('.lightbox-close')) {
      modal.classList.remove('open');
    }
  });
}

function initGallery() {
  if (!document.querySelector('.gallery-section')) return;
  const gallery = document.createElement('div');
  gallery.className = 'gallery-grid';

  siteFeatures.galleryImages.forEach((image) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}"><span>${image.alt}</span>`;
    item.addEventListener('click', () => {
      const modal = document.getElementById('js-lightbox-modal');
      modal.querySelector('.lightbox-image').src = image.src;
      modal.querySelector('.lightbox-image').alt = image.alt;
      modal.querySelector('.lightbox-caption').textContent = image.alt;
      modal.classList.add('open');
    });
    gallery.append(item);
  });

  document.querySelector('.gallery-section').append(gallery);
}

function initTabs() {
  const tabSections = document.querySelectorAll('[data-js-tabs]');
  tabSections.forEach((section) => {
    const tabButtons = section.querySelectorAll('[data-tab-button]');
    const tabPanels = section.querySelectorAll('[data-tab-panel]');
    if (!tabButtons.length || !tabPanels.length) return;

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.tabButton;
        tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
        tabPanels.forEach((panel) => {
          panel.classList.toggle('active', panel.dataset.tabPanel === target);
        });
      });
    });
  });
}

function initAccordions() {
  const accordions = document.querySelectorAll('[data-js-accordion]');
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('open');
      const content = accordion.nextElementSibling;
      if (!content) return;
      if (accordion.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
}

function initSearchFilter() {
  const searchContainer = document.querySelector('.dynamic-content-search');
  const listContainer = document.querySelector('.dynamic-content-list');
  if (!searchContainer || !listContainer) return;

  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Search stories, services, or locations...';
  input.className = 'search-input';
  searchContainer.append(input);

  function renderList(filterText = '') {
    const text = filterText.trim().toLowerCase();
    listContainer.innerHTML = '';
    const visibleStories = siteFeatures.dynamicStories.filter((story) => {
      return [story.title, story.summary, story.category, story.location]
        .some((field) => field.toLowerCase().includes(text));
    });

    if (!visibleStories.length) {
      const emptyMessage = document.createElement('p');
      emptyMessage.className = 'empty-state';
      emptyMessage.textContent = 'No matches found. Try a different keyword.';
      listContainer.append(emptyMessage);
      return;
    }

    visibleStories.forEach((story) => {
      const card = document.createElement('article');
      card.className = 'story-card';
      card.innerHTML = `
        <h3>${story.title}</h3>
        <p>${story.summary}</p>
        <p class="story-meta">${story.category} � ${story.location}</p>
      `;
      listContainer.append(card);
    });
  }

  input.addEventListener('input', () => renderList(input.value));
  renderList();
}

function injectDynamicContent() {
  const target = document.querySelector('.dynamic-content-placeholder');
  if (!target) return;

  const section = document.createElement('section');
  section.className = 'dynamic-story-section card';
  section.innerHTML = `
    <div class="section-header">
      <h2>Latest Community Stories</h2>
      <p>Browse our latest impact updates and filter them instantly.</p>
    </div>
    <div class="dynamic-content-search"></div>
    <div class="dynamic-content-list"></div>
  `;
  target.append(section);
  initSearchFilter();
}

function createMapWidget() {
  const mapSection = document.querySelector('.map-grid');
  if (!mapSection) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-map-card';
  wrapper.innerHTML = `
    <div class="map-widget-header">
      <div>
        <strong>Interactive Map</strong>
        <p>Click markers or use zoom controls to explore our locations.</p>
      </div>
      <div class="map-controls">
        <button type="button" class="map-control" data-map-control="zoom-out">−</button>
        <button type="button" class="map-control" data-map-control="zoom-in">+</button>
      </div>
    </div>
    <div class="map-canvas" aria-label="Interactive site map" role="application"></div>
    <div class="map-legend"><strong>Tap a marker to view details.</strong></div>
  `;

  const canvas = wrapper.querySelector('.map-canvas');
  const markerInfo = document.createElement('div');
  markerInfo.className = 'map-marker-info';
  markerInfo.textContent = 'Select a location to view details.';
  wrapper.append(markerInfo);

  let zoomLevel = 1;
  const updateZoom = () => {
    canvas.style.transform = `scale(${zoomLevel})`;
    canvas.style.transformOrigin = 'center center';
  };

  wrapper.querySelectorAll('[data-map-control]').forEach((control) => {
    control.addEventListener('click', () => {
      zoomLevel += control.dataset.mapControl === 'zoom-in' ? 0.18 : -0.18;
      zoomLevel = Math.min(Math.max(zoomLevel, 0.8), 1.8);
      updateZoom();
    });
  });

  siteFeatures.mapMarkers.forEach((marker) => {
    const markerButton = document.createElement('button');
    markerButton.type = 'button';
    markerButton.className = 'map-marker';
    markerButton.style.left = `${marker.coords.x}%`;
    markerButton.style.top = `${marker.coords.y}%`;
    markerButton.textContent = marker.title;
    markerButton.addEventListener('click', () => {
      markerInfo.textContent = `${marker.title}: ${marker.details}`;
      document.querySelectorAll('.map-marker').forEach((btn) => btn.classList.remove('active'));
      markerButton.classList.add('active');
    });
    canvas.append(markerButton);
  });

  updateZoom();
  mapSection.prepend(wrapper);
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value) {
  return /^\+?[0-9\s()-]{7,20}$/.test(value);
}

function initFormHandling() {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const textarea = form.querySelector('textarea');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const errors = [];
      const formContainer = form.closest('main') || form;

      if (name && !name.value.trim()) {
        errors.push('Name is required.');
      }
      if (email && !validateEmail(email.value)) {
        errors.push('Enter a valid email address.');
      }
      if (phone && phone.value.trim() && !validatePhone(phone.value)) {
        errors.push('Phone number must be 7-20 digits and can include +, (), or -');
      }
      if (textarea && !textarea.value.trim()) {
        errors.push('Please add a message.');
      }

      if (errors.length) {
        createMessageBanner(formContainer, errors.join(' '), 'error');
        return;
      }

      form.reset();
      createMessageBanner(formContainer, 'Thank you! Your message has been received.', 'success');
    });
  });
}

function setupInteractivePanels() {
  const serviceSection = document.querySelector('#service');
  if (!serviceSection) return;

  const tabs = document.createElement('div');
  tabs.className = 'service-tabs';
  tabs.innerHTML = `
    <div class="tabs-bar" data-js-tabs>
      <button data-tab-button="education" class="active">Education</button>
      <button data-tab-button="food">Food Aid</button>
      <button data-tab-button="community">Community Work</button>
    </div>
    <div class="tab-panels">
      <div class="tab-panel active" data-tab-panel="education">
        <p>Education sessions, after-school tutoring, and literacy support for families.</p>
      </div>
      <div class="tab-panel" data-tab-panel="food">
        <p>Food distribution programs, meal packs, and nutrition workshops in local areas.</p>
      </div>
      <div class="tab-panel" data-tab-panel="community">
        <p>Neighborhood cleanups, garden renewal projects, and volunteer-led outreach.</p>
      </div>
    </div>
  `;
  serviceSection.prepend(tabs);
  initTabs();
}

function initResponsiveUI() {
  document.documentElement.classList.add('js-enabled');
  const style = document.createElement('style');
  style.textContent = `
    .lightbox-modal {position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.75);opacity:0;pointer-events:none;transition:opacity .25s ease;z-index:9999;}
    .lightbox-modal.open{opacity:1;pointer-events:auto;}
    .lightbox-content{position:relative;max-width:92vw;max-height:92vh;padding:1rem;background:#fff;border-radius:12px;box-shadow:0 18px 40px rgba(0,0,0,.25);}
    .lightbox-image{max-width:calc(100vw - 4rem);max-height:calc(80vh - 5rem);display:block;border-radius:8px;}
    .lightbox-close{position:absolute;top:0.75rem;right:0.75rem;border:none;background:transparent;color:#333;font-size:2rem;cursor:pointer;}
    .gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:1rem;margin-top:1rem;}
    .gallery-item{padding:0;border:none;border-radius:12px;overflow:hidden;background:#fff;text-align:left;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;display:flex;flex-direction:column;}
    .gallery-item:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(0,0,0,.12);}
    .gallery-item img{width:100%;height:160px;object-fit:cover;display:block;}
    .gallery-item span{padding:0.75rem;font-size:0.95rem;color:#222;}
    .custom-map-card{margin-bottom:1.5rem;border-radius:16px;border:1px solid #ddd;overflow:hidden;background:#fafafa;}
    .map-widget-header{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;background:#fff;border-bottom:1px solid #e2e8f0;}
    .map-widget-header p{margin:0;font-size:0.95rem;color:#4a5568;}
    .map-controls{display:flex;gap:0.5rem;}
    .map-control{width:42px;height:42px;border:none;border-radius:999px;background:#2b6cb0;color:#fff;font-size:1.4rem;cursor:pointer;transition:background .2s ease;}
    .map-control:hover{background:#265a9a;}
    .map-canvas{position:relative;height:320px;background:linear-gradient(135deg,#bde1f4,#4673a1);transition:transform .25s ease;}
    .map-marker{position:absolute;padding:0.35rem 0.6rem;border-radius:999px;background:#f7b731;color:#1f2937;font-weight:700;border:2px solid rgba(255,255,255,.95);cursor:pointer;transform:translate(-50%,-50%);transition:transform .2s ease,box-shadow .2s ease;}
    .map-marker:hover,.map-marker.active{transform:translate(-50%,-50%) scale(1.05);box-shadow:0 8px 16px rgba(0,0,0,.18);}
    .map-marker-info{padding:0.9rem 1rem;background:#fff;border-top:1px solid #ddd;font-size:0.95rem;color:#333;}
    .feedback-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.72);z-index:10000;padding:1rem;}
    .feedback-overlay__content{max-width:520px;width:100%;background:#fff;border-radius:18px;padding:2rem;box-shadow:0 24px 60px rgba(0,0,0,.25);text-align:center;}
    .feedback-overlay__content p{margin:0 0 1.5rem;font-size:1.1rem;line-height:1.5;color:#24303f;}
    .feedback-overlay__close{background:#2b6cb0;color:#fff;border:none;border-radius:999px;padding:0.85rem 1.5rem;font-size:1rem;cursor:pointer;transition:transform .2s ease,background .2s ease;}
    .feedback-overlay__close:hover{transform:translateY(-1px);background:#265a9a;}
    .feedback-overlay--success .feedback-overlay__content{border:2px solid #8bc34a;}
    .feedback-overlay--error .feedback-overlay__content{border:2px solid #e74c3c;}
    .banner{padding:1rem 1.2rem;border-radius:12px;margin-bottom:1rem;font-weight:700;}
    .banner--success{background:#e6ffef;color:#085a31;border:1px solid #9ee6c5;}
    .banner--error{background:#ffe9e9;color:#a12222;border:1px solid #f2b4b4;}
    .story-card, .section-header{background:#fff;border-radius:14px;padding:1rem;box-shadow:0 8px 20px rgba(0,0,0,.05);margin-bottom:1rem;}
    .search-input{width:100%;padding:0.9rem 1rem;border:1px solid #c4c4c4;border-radius:999px;font-size:1rem;margin-top:1rem;}
    .empty-state{font-style:italic;color:#666;}
    .service-tabs{margin-bottom:1.5rem;}
    .tabs-bar{display:flex;gap:0.5rem;flex-wrap:wrap;}
    .tabs-bar button{background:#fff;border:1px solid #ccd0d7;border-radius:999px;padding:0.7rem 1rem;cursor:pointer;transition:background .2s ease,border-color .2s ease;}
    .tabs-bar button.active{background:#2b6cb0;color:#fff;border-color:#2b6cb0;}
    .tab-panel{display:none;padding:1rem;background:#fff;border-radius:16px;border:1px solid #e2e8f0;}
    .tab-panel.active{display:block;}
    .js-enabled .card{transition:transform .25s ease,box-shadow .25s ease;}
    .js-enabled .card:hover{transform:translateY(-2px);}
    @media (max-width: 760px){
      .gallery-grid{grid-template-columns:1fr;}
      .tabs-bar{flex-direction:column;}
    }
  `;
  document.head.append(style);
}

function initPageFeatures() {
  initResponsiveUI();
  initModals();
  initGallery();
  initAccordions();
  initTabs();
  initFormHandling();
  injectDynamicContent();
  createMapWidget();
  setupInteractivePanels();
}

document.addEventListener('DOMContentLoaded', initPageFeatures);
