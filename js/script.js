(function () {
  "use strict";

  // Mobile navigation toggle
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form -> n8n webhook (triggers an automatic confirmation email)
  var form = document.getElementById("kontakt-form");
  var status = document.getElementById("form-status");
  var N8N_WEBHOOK_URL = "https://adrian-business8.app.n8n.cloud/webhook/8db5c66b-eacf-4a4b-b307-8339cdbdf591";

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitButton = form.querySelector("button[type='submit']");
      var payload = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        service: form.service.value,
        message: form.message.value.trim(),
        submittedAt: new Date().toISOString()
      };

      if (submitButton) {
        submitButton.disabled = true;
      }
      if (status) {
        status.textContent = "Ihre Anfrage wird gesendet ...";
      }

      // no-cors: the browser won't let us read the response from a
      // cross-origin webhook, so we send the request and assume success —
      // n8n takes it from here (confirmation email, notifying Grünprofi).
      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function () {
          if (status) {
            status.textContent = "Danke! Ihre Anfrage ist eingegangen. Sie erhalten in Kürze eine Bestätigung per E-Mail.";
          }
          form.reset();
        })
        .catch(function () {
          if (status) {
            status.textContent = "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie direkt eine E-Mail.";
          }
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
          }
        });
    });
  }

  // Header shadow on scroll
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 4px 20px rgba(27,67,50,0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
