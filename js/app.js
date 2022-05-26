window.addEventListener('load', function() {
   identify();
}, false);
function identify() {
   var cookies = document.cookie.split(';');
   for (var i = 0 ; i < cookies.length; i++) {
         console.log(cookies[i]);
    }
}
function verifycookie() {

}
function startlogin() {

}

