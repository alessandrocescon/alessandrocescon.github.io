class App {
  constructor() {
    //SETUP TEMPLATES
    this._startlayout='<div id="layout"><a href="#menu" id="menuLink" class="menu-link"><span></span></a>';
    this._sidebar = '<div id="menu"><div class="pure-menu"><a class="pure-menu-heading" href="#company">Visa S.p.A.</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="#list" class="pure-menu-link">Lista</a></li><li class="pure-menu-item"><a href="#nuovo" class="pure-menu-link">Nuovo</a></li><li class="pure-menu-item"><a href="#aggiorna" class="pure-menu-link">Aggiorna</a></li></ul></div></div>';
    this._header = '<div class="pure-u-1 banner">ODS Manager 1.0</div>';
    this._content = '<div class="pure-u-1 content"></div>';
    this._footer = '<div class="pure-u-1 footer">Footer</div>';
    this._endlayout='</div>';
    this._loginform = '<div class="pure-u-1 content">LOGIN FORM!</div>';
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