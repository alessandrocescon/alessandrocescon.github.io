window.addEventListener('load', function() {
   this.app = new App();
   this.app.readSessionCookie();
   init();
}, false);

function init() {
  if(this.app.session){
     var ssess=this.app.session.split("=");
     if(ssess.length == 2) {
         console.log("NOME "+ssess[0]);
         console.log("VALORE "+ssess[1]);
     }
     else {
        this.app.renderLoginForm();
     }
  }
  else {
    this.app.renderLoginForm();
  }
}