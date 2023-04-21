// Create an overlay div and add it to the document
var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'transparent';
document.body.appendChild(overlay);

// Disable scrolling while the overlay is active
document.body.style.overflow = 'hidden';

// Remove the overlay and re-enable scrolling after a few seconds
setTimeout(function() {
  overlay.parentNode.removeChild(overlay);
  document.body.style.overflow = '';
}, 5000);
