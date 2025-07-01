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
loadGoogleAnalytics('G-PWQ3YQT32E');




/*** BEGIN BANNER AD BLOCKING CODE ***/
(function() {
    // Only run if not already initialized
    if (window.bannerAdBlockerLoaded) return;
    window.bannerAdBlockerLoaded = true;
    
    console.log('Banner ad blocker activated');

    // Specific banner ads to block
    const adScriptsToBlock = [
        '//rodesquad.com/a5db5a14ad99bd991a0c5f619c0e6c82/invoke.js',
        '//rodesquad.com/a4bb3a34836874714a22e53b284e8a90/invoke.js'
    ];

    // 1. Block script elements from loading
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(node) {
        if (node.tagName && node.tagName.toLowerCase() === 'script') {
            if (adScriptsToBlock.some(adUrl => node.src && node.src.includes(adUrl))) {
                console.log('Blocked banner ad script:', node.src);
                return node; // Don't append
            }
        }
        return originalAppendChild.apply(this, arguments);
    };

    // 2. Neutralize ad configuration
    if (window.atOptions) {
        window.atOptions = {};
        Object.freeze(window.atOptions);
        console.log('Neutralized atOptions');
    }

    // 3. Block iframe creation
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        if (tagName.toLowerCase() === 'iframe') {
            console.log('Blocked iframe creation for ads');
            return null;
        }
        return originalCreateElement.apply(document, arguments);
    };

    // 4. Remove existing ads
    function removeExistingBannerAds() {
        adScriptsToBlock.forEach(scriptUrl => {
            const domain = scriptUrl.split('/')[2];
            // Remove script elements
            document.querySelectorAll(`script[src*="${domain}"]`).forEach(el => el.remove());
            // Remove any iframes that got through
            document.querySelectorAll(`iframe[src*="${domain}"]`).forEach(el => el.remove());
        });
    }

    // Run immediately and on DOM load
    removeExistingBannerAds();
    document.addEventListener('DOMContentLoaded', removeExistingBannerAds);
    window.addEventListener('load', removeExistingBannerAds);
})();
/*** END BANNER AD BLOCKING CODE ***/
