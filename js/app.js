window.addEventListener('load', function() {
   this.service = new App();
   this.service.readSessionCookie();
   init();
}, false);

function init() {
  console.log(this.service.session);
}