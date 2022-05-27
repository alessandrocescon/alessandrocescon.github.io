class App {
  constructor() {
  }
  readSessionCookie() {
  	 var cookies = document.cookie.split(';');
     for (var i = 0 ; i < cookies.length; i++) {
        if(cookies[i].startsWith("SSESS")) {
        	this._session = cookies[i];
        }
    }
  }
  setSessionCookie() {
  	 
  }
  renderLoginForm() {
  	this._content=this._loginform;
    updateInterface();
  }
  updateInterface() {
  	 this._view=this._header+this._sidebar+this._content+this._footer;
     this.render();
  }
  render() {
  	document.getElementById('app').innerHTML = this._view;
  }
  set header(val){
    this._header = val;
  }
  get header(){
    return this._header;
  } 
  set footer(val){
    this._footer = val;
  }
  get footer(){
    return this._footer;
  } 
  set sidebar(val){
    this._sidebar = val;
  }
  get sidebar(){
    return this._sidebar;
  } 
  set loginform(val){
    this._loginform = val;
  }
  get loginform(){
    return this._loginform;
  } 
  set content(val){
    this._content = val;
  }
  get content(){
    return this._content;
  } 
  set view(val){
    this._view = val;
  }
  get view(){
    return this._view;
  }  
  set session(val){
    this._session = val;
  }
  get session(){
    return this._session;
  }  
  set ticket(val){
    this._ticket = val;
  }
  get ticket(){
    return this._ticket;
  }  
  //SETUP TEMPLATES
  this.sidebar = '<div class="pure-menu pure-menu-horizontal"><a href="#" class="pure-menu-heading">Your Logo</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li><li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Pricing</a></li><li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li></ul></div>';
  this.header = '<div class="banner"><h1 class="banner-head">Simple Pricing.<br>Try before you buy.</h1></div>';
  this.content = '<div class="l-content"></div>';
  this.footer = '<div class="footer l-box"><p><a href="#">Try now</a> for 14 days. No credit card required. Header image courtesy of <a href="http://unsplash.com/">Unsplash</a>.</p></div>';
  this.loginform = '<div class="l-content">LOGIN FORM!</div>';
}