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
    const badScriptPatterns = [
        /\/\/rodesquad\.com\/.*\/invoke\.js/,
        /\/\/rodesquad\.com\/.*\.js/
    ];

    // Intercept dynamically-added scripts
    const origCreateElement = document.createElement;
    document.createElement = function(tag) {
        if (tag.toLowerCase() === "script") {
            const script = origCreateElement.call(document, tag);
            const origSetAttribute = script.setAttribute;
            script.setAttribute = function(attr, value) {
                if (attr === "src" && badScriptPatterns.some(re => re.test(value))) {
                    // Block script loading
                    script.type = "javascript/blocked";
                    return;
                }
                return origSetAttribute.call(this, attr, value);
            };
            return script;
        }
        return origCreateElement.call(document, tag);
    };

    // Remove existing rodesquad scripts
    document.querySelectorAll('script[src*="rodesquad.com"]').forEach(function(script) {
        script.remove();
    });

    // Remove injected iframes and containers regularly
    setInterval(function() {
        document.querySelectorAll('iframe[src*="rodesquad.com"]').forEach(function(iframe) {
            iframe.remove();
        });
        document.querySelectorAll('[id^="container-"]').forEach(function(div) {
            if (
                div.id.match(/^container-(81a1a9eb8a9f65c33ca1b04d79935adb|[a-f0-9]{32})$/)
            ) {
                div.remove();
            }
        });
    }, 1000);

    // Clean up on DOM ready, too
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('script[src*="rodesquad.com"]').forEach(function(script) {
            script.remove();
        });
    });
})();


