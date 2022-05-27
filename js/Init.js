window.addEventListener('load', function() {
   this.app = new App();
   this.app.readSessionCookie();
   init();
}, false);

function init() {
  if(this.app.session){
     var ssess=this.app.session.split("=");
     if(ssess.length == 2) {
         if(ssess[0].startsWith("SSESS")) {
            this.app.renderStart();
         }
     }
     else {
        this.app.renderLoginForm();
     }
  }
  else {
    this.app.renderLoginForm();
  }
}