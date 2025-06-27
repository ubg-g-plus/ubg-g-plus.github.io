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


(function blockRodesquadAds() {
  // Remove existing ad scripts, iframes, and containers
  function removeRodesquadElements() {
    // Remove <script> tags
    document.querySelectorAll('script[src*="rodesquad.com"]').forEach(el => el.remove());
    // Remove <iframe> tags
    document.querySelectorAll('iframe[src*="rodesquad.com"]').forEach(el => el.remove());
    // Remove ad containers by id pattern
    document.querySelectorAll('div[id^="container-"]').forEach(el => el.remove());
    // Remove any global atOptions variable
    if (window.atOptions) {
      try { delete window.atOptions; } catch (e) { window.atOptions = undefined; }
    }
  }

  // Initial sweep right away
  removeRodesquadElements();

  // Watch for future ad elements added to the DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        // If it's an element node
        if (node.nodeType === 1) {
          // Remove rodesquad scripts/iframes/containers immediately
          if (
            (node.tagName === 'SCRIPT' && node.src && node.src.includes('rodesquad.com')) ||
            (node.tagName === 'IFRAME' && node.src && node.src.includes('rodesquad.com')) ||
            (node.id && node.id.startsWith('container-'))
          ) {
            node.remove();
          }
          // Remove any child elements matching our criteria (deep scan)
          node.querySelectorAll && node.querySelectorAll('script[src*="rodesquad.com"], iframe[src*="rodesquad.com"], div[id^="container-"]').forEach(child => child.remove());
        }
      });
    });
    // Clean up global var after every mutation
    if (window.atOptions) {
      try { delete window.atOptions; } catch (e) { window.atOptions = undefined; }
    }
  });

  // Start observing the whole document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Keep running cleanup every 1s as an extra safety net
  setInterval(removeRodesquadElements, 1000);
})();


  // Start observing the full document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Run cleanup right now
  removeRodesquadScripts();
})();

