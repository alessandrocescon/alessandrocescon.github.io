class App {
  constructor() {
    //SETUP TEMPLATES
    this._startlayout='<div id="layout"><a href="#menu" id="menuLink" class="menu-link"><span></span></a>';
    this._sidebar = '<div id="menu"><div class="pure-menu"><a class="pure-menu-heading" href="#company">Visa S.p.A.</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="#list" class="pure-menu-link">List</a></li><li class="pure-menu-item"><a href="#new" class="pure-menu-link">New</a></li><li class="pure-menu-item"><a href="#sync" class="pure-menu-link">Sync</a></li></ul></div></div>';
    this._header = '<div class="pure-u-1 banner"><div class="bannerassest">ODS Manager 1.0</div></div>';
    this._content = '<div class="pure-u-1 content"></div>';
    this._footer = '<div class="pure-u-1 footer"><div class="footerassest">&copy; 2022 Visa S.p.A. IT dept.</div></div>';
    this._endlayout='</div>';
    this._loginform = '<form class="pure-form pure-form-stacked"><fieldset><legend>Login Form</legend><label for="user">User Name</label><input type="text" id="user" placeholder="User Name" /><span class="pure-form-message">This is a required field.</span><label for="password">Password</label><input type="password" id="password" placeholder="Password" /><button type="submit" class="pure-button pure-button-primary" id="signin">Sign in</button></fieldset></form>';
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
  renderStart() {
    this._content="START VIEW";
    var t1=new Ticket();
    console.log(Object.entries(t1));
    this.updateInterface();
  }
  renderLoginForm() {
  	this._content=this._loginform;
    this.updateInterface();
    this.registerLoginFormListener();
  }
  registerLoginFormListener() {
    if(document.getElementById('signin')) {
       document.getElementById('signin').addEventListener('click',this.login);
    }
  }
  renderServiceForm() {
    this._content=this._serviceForm;
    this.updateInterface();
    this.registerServiceFormListener();
  }
  registerServiceFormListener() {
    if(document.getElementById('save')) {
       document.getElementById('save').addEventListener('click',this.login);
    }
  }

  login() {
    if(event) {
      event.preventDefault();
    }
    var formData = new FormData();
    formData.append("name", document.getElementById('user').value);
    formData.append("pass", document.getElementById('password').value);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', "https://webauth.visa.it/user/login?_format=json", true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {

      }
      else {
      }
    }
    xhr.onerror = function () {
    };
    xhr.send(formData);
  }

  updateInterface() {
  	 this._view=this._startlayout+this._sidebar+'<div class="pure-u-1" id="main">'+this._header+'<div class="pure-u-1 content"><div class="contentassest">'+this._content+'</div></div></div>'+this._footer+this._endlayout;
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
  set serviceForm(val){
    this._serviceForm = val;
  }
  get serviceForm(){
    return this._serviceForm;
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