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
  var N8N_WEBHOOK_URL = "https://adrian-business8.app.n8n.cloud/webhook/8b8918a7-6382-4124-8c05-3da3d6452b61";

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitButton = form.querySelector("button[type='submit']");
      var params = new URLSearchParams();
      params.append("name", form.name.value.trim());
      params.append("email", form.email.value.trim());
      params.append("phone", form.phone.value.trim());
      params.append("service", form.service.value);
      params.append("message", form.message.value.trim());
      params.append("submittedAt", new Date().toISOString());

      if (submitButton) {
        submitButton.disabled = true;
      }
      if (status) {
        status.textContent = "Ihre Anfrage wird gesendet ...";
      }

      // n8n beantwortet die CORS-Preflight-Anfrage (OPTIONS) nicht, die ein
      // echter "application/json" + mode:"cors" Request auslöst - der
      // Browser blockiert den POST dann komplett, bevor er überhaupt
      // rausgeht. application/x-www-form-urlencoded + no-cors umgeht das
      // zuverlässig (CORS "simple request", kein Preflight nötig); n8n
      // parst die Felder trotzdem sauber nach $json.body.<feld>. Nachteil:
      // kein echtes Erfolg/Fehler-Feedback vom Server lesbar, daher die
      // optimistische Erfolgsmeldung.
      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
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
