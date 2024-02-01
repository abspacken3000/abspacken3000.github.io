"use strict";

window.addEventListener("load", function () {
  if (!isCookieAccepted()) {
    var id = Math.random().toString(36).substring(7);
    document.body.innerHTML +=
      `<div class="modal show top" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}_lbl"
      aria-hidden="true">
      <div class="modal-dialog modal-frame modal-top" role="document">
        <div class="modal-content">
          <div class="modal-body pt-0 pb-0">
            <div class="row d-flex justify-content-center align-items-center">
              <p class="pt-2 pr-2 pl-2 mb-0 pb-2">
                abspacken3000.de nutzt Cookies zum Betrieb dieser Seite. <a href="privacy/" target="_blank">Weitere Infos</a></p>
              <button type="button" class="btn btn-green btn-sm" onclick="document.getElementById('${id}').remove();setCookieAccepted();">Ok</button>
            </div></div></div></div></div>`;

    $('#'+id).modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
  }
});

function setCookieAccepted() {
  var d = new Date();
  d.setTime(d.getTime() + 31536000000); // 365*24*60*60*1000
  document.cookie = `cookie-accept=true; expires=${d.toUTCString()}; path=/`;
}

function isCookieAccepted() {
  const b = document.cookie.match('(^|;)\\s*cookie-accept\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}
