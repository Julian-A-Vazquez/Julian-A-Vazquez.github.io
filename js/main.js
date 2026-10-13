// Small progressive enhancements. The page works fully without this file.
(function () {
  "use strict";

  // "Copy email" button: shown only when the Clipboard API is available.
  var btn = document.querySelector("[data-copy]");
  var status = document.querySelector("[data-copy-status]");
  if (btn && status && navigator.clipboard && window.isSecureContext) {
    btn.hidden = false;
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(
        function () { status.textContent = "Copied."; },
        function () { status.textContent = "Copy failed. The address is shown above."; }
      );
    });
  }

  // Mark the nav link for the section currently in view.
  var links = document.querySelectorAll(".site-nav ul a[href^='#']");
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      var link = byId[entry.target.id];
      if (link) link.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  Object.keys(byId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
