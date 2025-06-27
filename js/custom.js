document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.navbar-brand.js-scroll-trigger').forEach(function(el) {
        el.innerHTML = '<strong>Unblocked Games G+</strong>';
        el.style.visibility = 'visible';
    });
});

/*

Custom script

This file will not be overwritten by the updater

*/

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

function loadGoogleAnalytics(trackingId) {
  // Create the script tag for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  // Assign gtag function globally
  window.gtag = gtag;

  // Configure gtag
  gtag('js', new Date());
  gtag('config', trackingId);
}

// Usage
loadGoogleAnalytics('G-2K0VE1NY81');


(function ultraBlockRodesquad() {
  // List of all known rodesquad ad keys (add more if you spot new ones)
  const RODESQUAD_KEYS = [
    '81a1a9eb8a9f65c33ca1b04d79935adb',
    'a4bb3a34836874714a22e53b284e8a90'
    // Add more keys here if you find more ad units
  ];

  // Helper: Block any matching elements, even ones loaded later
  function nukeRodesquadAds() {
    // Remove all rodesquad scripts
    document.querySelectorAll('script[src*="rodesquad.com"]').forEach(s => s.remove());
    // Remove ad iframes from rodesquad
    document.querySelectorAll('iframe[src*="rodesquad.com"]').forEach(f => f.remove());
    // Remove any ad containers by id pattern
    RODESQUAD_KEYS.forEach(key => {
      document.querySelectorAll(`[id*="${key}"]`).forEach(el => el.remove());
    });
    // Remove any suspicious iframes/banners/containers
    document.querySelectorAll('div,iframe').forEach(el => {
      if (
        (el.id && el.id.startsWith('container-')) ||
        (el.src && el.src.includes('rodesquad.com'))
      ) {
        el.remove();
      }
    });
    // Clean up global atOptions var
    if (window.atOptions) {
      try { delete window.atOptions; } catch (e) { window.atOptions = undefined; }
    }
  }

  // Remove on load
  nukeRodesquadAds();

  // Watch for sneaky injected ads
  const observer = new MutationObserver(() => nukeRodesquadAds());
  observer.observe(document.documentElement, { childList: true, subtree: true });

  // Backup: Nuke every second in case something sneaks through
  setInterval(nukeRodesquadAds, 1000);
})();



  // Start observing the full document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Run cleanup right now
  removeRodesquadScripts();
})();

