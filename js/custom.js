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




// disable-ads.js - This will prevent all specified ad scripts from loading
(function() {
    // List of ad script URLs to block
    const blockedScripts = [
        '//rodesquad.com/a4bb3a34836874714a22e53b284e8a90/invoke.js',
        '//rodesquad.com/81a1a9eb8a9f65c33ca1b04d79935adb/invoke.js',
        '//rodesquad.com/a5db5a14ad99bd991a0c5f619c0e6c82/invoke.js'
    ];
    
    // List of ad container IDs to remove
    const adContainerIds = [
        'container-81a1a9eb8a9f65c33ca1b04d79935adb'
    ];
    
    // Override document.createElement to prevent iframe creation
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        if (tagName.toLowerCase() === 'iframe') {
            console.log('Blocked iframe creation for ads');
            return null;
        }
        return originalCreateElement.apply(document, arguments);
    };
    
    // Override document.write to prevent ad injection
    const originalWrite = document.write;
    document.write = function(content) {
        if (blockedScripts.some(script => content.includes(script))) {
            console.log('Blocked ad script injection');
            return;
        }
        originalWrite.apply(document, arguments);
    };
    
    // Remove ad containers if they exist
    function removeAdContainers() {
        adContainerIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.remove();
                console.log('Removed ad container:', id);
            }
        });
    }
    
    // Run immediately and also after DOM loads
    removeAdContainers();
    document.addEventListener('DOMContentLoaded', removeAdContainers);
    window.addEventListener('load', removeAdContainers);
    
    // Block script elements from loading
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(node) {
        if (node.tagName && node.tagName.toLowerCase() === 'script') {
            if (blockedScripts.some(script => node.src.includes(script))) {
                console.log('Blocked ad script:', node.src);
                return node;
            }
        }
        return originalAppendChild.apply(this, arguments);
    };
})();
