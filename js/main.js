// Main JavaScript functionality
console.log("Main JS loaded");

// Try to load broken resources
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'http://expired-dynamic-css.com/dynamic/broken-dynamic.css';
document.head.appendChild(link);
