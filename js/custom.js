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




// complete-ad-blocker.js - Blocks ALL ads (banners and popunders)
(function() {
    // ======== CONFIGURATION ======== //
    const adNetworkDomains = [
        'rodesquad.com'
    ];
    
    const adContainerIds = [
        'container-81a1a9eb8a9f65c33ca1b04d79935adb'
    ];
    
    const adScriptUrls = [
        '//rodesquad.com/a4bb3a34836874714a22e53b284e8a90/invoke.js',
        '//rodesquad.com/81a1a9eb8a9f65c33ca1b04d79935adb/invoke.js',
        '//rodesquad.com/a5db5a14ad99bd991a0c5f619c0e6c82/invoke.js'
    ];

    // ======== CORE BLOCKING FUNCTIONS ======== //
    
    // 1. BLOCK SCRIPT LOADING
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(node) {
        if (node.tagName && node.tagName.toLowerCase() === 'script') {
            if (adScriptUrls.some(url => node.src.includes(url)) || 
                adNetworkDomains.some(domain => node.src.includes(domain))) {
                console.log('[AdBlocker] Blocked script:', node.src);
                return node; // Return the node without appending
            }
        }
        return originalAppendChild.apply(this, arguments);
    };

    // 2. BLOCK IFRAME CREATION
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        if (tagName.toLowerCase() === 'iframe') {
            console.log('[AdBlocker] Blocked iframe creation');
            return null;
        }
        return originalCreateElement.apply(document, arguments);
    };

    // 3. BLOCK POPUNDERS
    window.open = function() {
        console.log('[AdBlocker] Blocked window.open popunder');
        return null;
    };

    // 4. REMOVE AD CONTAINERS
    function removeAdElements() {
        // Remove by specific IDs
        adContainerIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.remove();
                console.log('[AdBlocker] Removed ad container:', id);
            }
        });

        // Remove by domain patterns
        document.querySelectorAll('script, iframe, div, img').forEach(el => {
            if (el.src && adNetworkDomains.some(domain => el.src.includes(domain))) {
                el.remove();
                console.log('[AdBlocker] Removed ad element by src:', el.src);
            }
            
            if (el.id && el.id.includes('container-')) {
                el.remove();
                console.log('[AdBlocker] Removed generic ad container:', el.id);
            }
        });
    }

    // 5. BLOCK DYNAMIC AD INJECTION
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    if (node.tagName === 'SCRIPT' && 
                        (adScriptUrls.some(url => node.src.includes(url)) || 
                         adNetworkDomains.some(domain => node.src.includes(domain)))) {
                        node.remove();
                        console.log('[AdBlocker] Blocked dynamically injected ad script');
                    }
                }
            });
        });
    });

    // ======== INITIALIZATION ======== //
    
    // Run immediately
    removeAdElements();
    
    // Run after DOM loads
    document.addEventListener('DOMContentLoaded', removeAdElements);
    window.addEventListener('load', removeAdElements);
    
    // Start observing for dynamic content
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // Block document.write injections
    document.write = function(content) {
        if (adNetworkDomains.some(domain => content.includes(domain))) {
            console.log('[AdBlocker] Blocked document.write injection');
            return;
        }
        // Fallback to original for non-ad content
        (function(original) {
            original.apply(document, arguments);
        })(document.write.bind(document));
    };

    console.log('[AdBlocker] Activated - All ads will be blocked');
})();
