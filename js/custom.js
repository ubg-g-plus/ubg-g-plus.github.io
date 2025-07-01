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




(function() {
    // === Block Rodesquad ad scripts and elements ===

    // Remove all ad scripts, iframes, and containers immediately and continuously
    function removeRodesquadAds() {
        document.querySelectorAll('script[src*="rodesquad.com"]').forEach(s => s.remove());
        document.querySelectorAll('iframe[src*="rodesquad.com"]').forEach(f => f.remove());
        document.querySelectorAll('[id^="container-"]').forEach(d => d.remove());
    }

    // Initial cleanup and repeat every 500ms
    removeRodesquadAds();
    setInterval(removeRodesquadAds, 500);

    // Watch for sneaky DOM insertions
    new MutationObserver(removeRodesquadAds).observe(document.body, {childList: true, subtree: true});

    // Block dynamically added scripts
    const origCreateElement = document.createElement;
    document.createElement = function(tagName, ...args) {
        const el = origCreateElement.call(this, tagName, ...args);
        if (tagName.toLowerCase() === 'script') {
            const origSetAttribute = el.setAttribute;
            el.setAttribute = function(attr, value) {
                if (attr === 'src' && value.includes('rodesquad.com')) return;
                return origSetAttribute.apply(this, arguments);
            };
        }
        return el;
    };

    // Patch appendChild and insertBefore to block Rodesquad scripts/iframes before they reach DOM
    function blockNodeInsertion(orig) {
        return function(node) {
            try {
                if (
                    (node.tagName === "SCRIPT" && node.src && node.src.includes('rodesquad.com')) ||
                    (node.tagName === "IFRAME" && node.src && node.src.includes('rodesquad.com'))
                ) return node;
            } catch (e) {}
            return orig.apply(this, arguments);
        }
    }
    Element.prototype.appendChild = blockNodeInsertion(Element.prototype.appendChild);
    Element.prototype.insertBefore = blockNodeInsertion(Element.prototype.insertBefore);

    // === Block popunder ads (window.open) ===

    const realOpen = window.open;
    let allowPop = false;
    window.open = function() {
        if (allowPop) {
            allowPop = false;
            return realOpen.apply(window, arguments);
        }
        // Block all other popups/popunders
        return null;
    };

    // Prevent click-hijack popunders
    document.body.addEventListener('click', function(e) {
        if (window.event) {
            window.event.stopImmediatePropagation && window.event.stopImmediatePropagation();
        }
    }, true);

    // Block "are you sure you want to leave" popups
    window.onbeforeunload = null;

})();

