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
    // Remove any Rodesquad ads ASAP and keep watching for new ones
    function removeRodesquadAds() {
        // Remove all scripts with rodesquad.com
        document.querySelectorAll('script[src*="rodesquad.com"]').forEach(s => s.remove());
        // Remove all iframes with rodesquad.com
        document.querySelectorAll('iframe[src*="rodesquad.com"]').forEach(f => f.remove());
        // Remove any ad containers with known ids or suspect classes
        document.querySelectorAll('[id^="container-"]').forEach(d => {
            if (
                d.id.match(/^container-([a-f0-9]{32}|81a1a9eb8a9f65c33ca1b04d79935adb)$/)
            ) {
                d.remove();
            }
        });
        // Remove any divs/iframes with ad-like styles
        document.querySelectorAll('div,iframe').forEach(el => {
            if (
                el.src && el.src.includes('rodesquad.com')
            ) {
                el.remove();
            }
        });
    }

    // Call once right away
    removeRodesquadAds();

    // Call again every 500ms (persistent ads are stubborn)
    setInterval(removeRodesquadAds, 500);

    // Watch DOM for sneaky changes (MutationObserver is king here)
    new MutationObserver(removeRodesquadAds).observe(document.body, {
        childList: true,
        subtree: true
    });

    // Monkey patch appendChild and insertBefore to block Rodesquad scripts/iframes immediately
    function blockNodeInsertion(orig) {
        return function(node) {
            try {
                // Block script or iframe from rodesquad before it enters the DOM
                if (
                    (node.tagName === "SCRIPT" && node.src && node.src.includes('rodesquad.com')) ||
                    (node.tagName === "IFRAME" && node.src && node.src.includes('rodesquad.com'))
                ) {
                    return node; // Don't insert
                }
            } catch (e) {}
            return orig.apply(this, arguments);
        }
    }
    Document.prototype.appendChild = blockNodeInsertion(Document.prototype.appendChild);
    Document.prototype.insertBefore = blockNodeInsertion(Document.prototype.insertBefore);
    Element.prototype.appendChild = blockNodeInsertion(Element.prototype.appendChild);
    Element.prototype.insertBefore = blockNodeInsertion(Element.prototype.insertBefore);

    // Overwrite document.createElement to block Rodesquad script tags dynamically created
    const origCreateElement = document.createElement;
    document.createElement = function(tagName, ...args) {
        const el = origCreateElement.call(document, tagName, ...args);
        if (tagName.toLowerCase() === 'script') {
            const origSetAttribute = el.setAttribute;
            el.setAttribute = function(attr, value) {
                if (attr === 'src' && value.includes('rodesquad.com')) {
                    // Block the ad script
                    return;
                }
                return origSetAttribute.apply(this, arguments);
            };
        }
        return el;
    };
})();
