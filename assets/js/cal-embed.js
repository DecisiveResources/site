// Cal.com inline booking embed for _includes/cal-embed.html. The booking link comes from the
// container's data-cal-link attribute, so this file holds no per-page values and can stay out of inline script.
(function () {
  var container = document.getElementById('cal-embed');
  if (!container) return;

  // Cal.com's standard loader snippet (unchanged): queues calls until app.cal.com/embed/embed.js loads.
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", {
    origin: "https://cal.com"
  });

  Cal("inline", {
    elementOrSelector: "#cal-embed",
    calLink: container.dataset.calLink,
    layout: "month_view"
  });

  Cal("ui", {
    styles: {
      branding: {
        brandColor: "#1e59b5"
      }
    },
    hideEventTypeDetails: false
  });
})();
