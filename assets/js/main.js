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

  // --- Scroll reveal animation ---
  var revealTargets = document.querySelectorAll(
    '.problem-card, .feature-card, .step-item, .material-card, .testimonial, .section-head, .solution-text, .solution-figure, .industry-list, .compare-table, .spec-table'
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

  // --- FAQ: keep single-open behaviour (accordion) ---
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

  // --- Contact form (front-end demo handling) ---
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var note = document.getElementById('formNote');
      if (note) note.hidden = false;
      form.querySelector('button[type="submit"]').disabled = true;
      // NOTE: 実装時はここでバックエンド/フォームサービスへ送信処理を追加してください。
    });
  }
})();
