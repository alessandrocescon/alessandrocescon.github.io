class App {
  constructor() {
    //SETUP TEMPLATES
    this.startlayout='<div id="layout"><a href="#menu" id="menuLink" class="menu-link"><span></span></a>';
    this.sidebar = '<div id="menu"><div class="pure-menu"><a class="pure-menu-heading" href="#company">Company</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="#home" class="pure-menu-link">Home</a></li><li class="pure-menu-item"><a href="#about" class="pure-menu-link">About</a></li><li class="pure-menu-item menu-item-divided pure-menu-selected"><a href="#" class="pure-menu-link">Services</a></li><li class="pure-menu-item"><a href="#contact" class="pure-menu-link">Contact</a></li></ul></div></div>';
    this.header = '<div class="banner"><h1 class="banner-head">Simple Pricing.<br>Try before you buy.</h1></div>';
    this.content = '<div class="l-content"></div>';
    this.footer = '<div class="footer l-box"><p><a href="#">Try now</a> for 14 days. No credit card required. Header image courtesy of <a href="http://unsplash.com/">Unsplash</a>.</p></div>';
    this.endlayout='</div>';
    this.loginform = '<div class="l-content">LOGIN FORM!</div>';
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
    this.updateInterface();
  }
  updateInterface() {
  	 this._view=this._startlayout+this._sidebar+'<div id="main">'+this._header+this._content+'</div>'+this._footer+this._endlayout;
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
  set startlayout(val){
    this._startlayout = val;
  }
  get startlayout(){
    return this._startlayout;
  } 
  set endlayout(val){
    this._endlayout = val;
  }
  get endlayout(){
    return this._endlayout;
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
}