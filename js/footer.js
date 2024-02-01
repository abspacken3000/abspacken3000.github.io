"use strict";

window.addEventListener("load", function () {
  var host = location.hostname;

  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `https://${host}/css/footer.min.css`;
  head.appendChild(link);

  var footer = document.createElement('footer');
  footer.className = 'sticky-bottom';
  footer.innerHTML =
    `<div class="container">
  <a href="https://${host}/">${host}</a> &middot; ${new Date().getFullYear()} &middot; 
  <a href="https://${host}/imprint/">Impressum</a> &middot; 
  <a href="https://${host}/privacy/">Datenschutz</a> &middot; 
  <a href="https://paypal.me/runschke/" target="_blank">Spenden</a></div>`;

  document.body.appendChild(footer);
});
