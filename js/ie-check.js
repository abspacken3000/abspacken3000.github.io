"use strict";

window.addEventListener("load", function () {
  if (isIe()) {
    document.body.innerHTML =
      '<div style="flex: 1 1 auto;">\
    <div style="text-align: center;top: 50%;left: 50%;position: absolute;transform: translate(-50%, -50%);"> \
    <i class="fab fa-internet-explorer fa-3x fa-spin"></i><h1 style="text-decoration: line-through;">Internet Explorer</h1> \
    </div>\
    </div>';
  }
});

function isIe() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return true
  }
  return false;
}
