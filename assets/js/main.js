/* Gold Letters LP — interactions */
(function () {
  'use strict';

  // --- Mobile nav toggle ---
  var hamburger = document.getElementById('hamburger');
  var gnav = document.getElementById('gnav');
  if (hamburger && gnav) {
    hamburger.addEventListener('click', function () {
      var open = gnav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    gnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        gnav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Back to top button ---
  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
  }

  // --- Primary "quote" rich button → jump to contact channels ---
  var quoteBtn = document.getElementById('quoteBtn');
  if (quoteBtn) {
    quoteBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var mail = document.querySelector('.channel-primary');
      if (mail) {
        mail.classList.add('flash');
        mail.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.location.href = mail.getAttribute('href');
      }
    });
  }

  // --- Scroll reveal animation ---
  var revealTargets = document.querySelectorAll(
    '.problem-card, .feature-card, .step-item, .material-card, .testimonial, .section-head, .solution-text, .solution-figure, .industry-list, .compare-table, .spec-table, .g-item, .cta-band-inner'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  // --- Article modal ---
  var modal = document.getElementById('articleModal');
  var openArticle = document.getElementById('openArticle');
  if (modal && openArticle) {
    var lastFocus = null;
    var openModal = function () {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      var closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    };
    var closeModal = function () {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      if (lastFocus) lastFocus.focus();
    };
    openArticle.addEventListener('click', openModal);
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }

  // --- FAQ: single-open accordion ---
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
