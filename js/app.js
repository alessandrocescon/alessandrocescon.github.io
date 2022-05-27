window.addEventListener('load', function() {
   this.service = new App();
   this.service.readSessionCookie();
   init();
}, false);

function init() {
  if(this.service.session){
     var ssess=this.service.session.split("=");
     if(ssess.length == 2) {
         console.log("NOME "+ssess[0]);
         console.log("VALORE "+ssess[1]);
     }
  }
}