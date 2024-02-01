"use strict";

window.addEventListener("load", function () {
  var host = location.hostname;

  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `https://${host}/css/header.min.css`;
  head.appendChild(link);

  var header = document.createElement('header');
  header.innerHTML =
    `<div>
  Willkomen auf ${host}. Prost!
  </div>`;

  document.body.insertBefore(header, document.body.firstChild);

});
