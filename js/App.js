class App {
  constructor() {
    //SETUP TEMPLATES
    this.startlayout='<div id="layout"><a href="#menu" id="menuLink" class="menu-link"><span></span></a>';
    this.sidebar = '<div id="menu"><div class="pure-menu"><a class="pure-menu-heading" href="#company">Visa S.p.A.</a><ul class="pure-menu-list"><li class="pure-menu-item"><a href="#list" class="pure-menu-link">List</a></li><li class="pure-menu-item"><a href="#new" class="pure-menu-link">New</a></li><li class="pure-menu-item"><a href="#sync" class="pure-menu-link">Sync</a></li></ul></div></div>';
    this.header = '<div class="pure-u-1 banner"><div class="bannerassest">ODS Manager 1.0</div></div>';
    this.content = '<div class="pure-u-1 content"></div>';
    this.footer = '<div class="pure-u-1 footer"><div class="footerassest">&copy; 2022 Visa S.p.A. IT dept.</div></div>';
    this.endlayout='</div>';
    this.loginform = '<form class="pure-form pure-form-stacked"><fieldset><legend>Login Form</legend><label for="user">User Name</label><input type="text" id="user" placeholder="User Name" /><span class="pure-form-message">This is a required field.</span><label for="password">Password</label><input type="password" id="password" placeholder="Password" /><button type="submit" class="pure-button pure-button-primary" id="signin">Sign in</button></fieldset></form>';
  }
  readSessionCookie() {
  	 var cookies = document.cookie.split(';');
     for (var i = 0 ; i < cookies.length; i++) {
        if(cookies[i].startsWith("SSESS")) {
        	this.session = cookies[i];
        }
    }
  }
  setSessionCookie() {
  	 
  }
  htmlTicketRender(t1) {
    var tr =this.ticketRender(t1);
    var rendered ='<form class="pure-form pure-form-stacked"><fieldset><legend>ODS Form</legend>';
    for(var i=0;i<tr.length;i++) {
      if(typeof(tr[i][0]) == 'object') {
        for(var ib=0;ib<tr[i].length;ib++) {
          var fr= new FormItem(tr[i][ib]);
          rendered+=fr.getRendered();
        }
      }
      else {
        var fr= new FormItem(tr[i]);
        rendered+=fr.getRendered();
      }
    }
    rendered+="</fieldset></form>";
    return rendered;
  }
  renderStart() {
    var t1=new Ticket('30-05-2022','acescon','','29-05-2022','2455');
    t1.reqdate='2022-05-30';
    var eq1=new Equipment();
    eq1.model='modello';
    eq1.serial='12345';
    t1.addequipment(eq1);
    t1.addequipment(eq1);
    var wk1 = new Work('2022-05-30','10','20','30');
    t1.addwork(wk1);
    var wk2 = new Work('2022-05-30','109','209','309');
    t1.addwork(wk2);
    var wk3 = new Work('2022-05-30','103','203','303');
    t1.addwork(wk3);
    this.content=this.htmlTicketRender(t1);
    this.updateInterface();
  }
  renderLoginForm() {
  	this.content=this.loginform;
    this.updateInterface();
    this.registerLoginFormListener();
    //debug
    //this.renderStart();
  }
  registerLoginFormListener() {
    if(document.getElementById('signin')) {
       document.getElementById('signin').addEventListener('click',this.login);
    }
  }
  renderServiceForm() {
    this.content=this.serviceForm;
    this.updateInterface();
    this.registerServiceFormListener();
  }
  renderFieldTemplate() {
    var fldhtml='';
    return fldhtml;

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
    xhr.withCredentials = true;
    xhr.open('GET', "https://webauth.visa.it/remotelogin", true);
    xhr.setRequestHeader("Content-Type", "application/json");
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
  	 this.view=this.startlayout+this.sidebar+'<div class="pure-u-1" id="main">'+this.header+'<div class="pure-u-1 content"><div class="contentassest">'+this.content+'</div></div></div>'+this.footer+this.endlayout;
     this.render();
  }
  render() {
  	document.getElementById('app').innerHTML = this.view;
  }
  ticketRender(t1) {
    console.log(t1);
    console.log(t1.works[0]);
    var ntest = "equipment_0_model";
    var spl=ntest.split("_");
    console.log(spl[0]);
    var nnam=spl[0];
    console.log(t1['equipment'][0]);
    //var t2 = JSON.parse(JSON.stringify(t1));
    //console.log(t2);
    var ticketarray=new Array();
    
    for(var obj in Object.entries(t1)) {
   
      if(typeof(Object.entries(t1)[obj][1]) == 'object') {
        var enobj = 0;
        var arr=new Array();
         for(var objb in Object.entries(t1)[obj][1]) {
            var constr = Object.entries(t1)[obj][1][objb].constructor.name.toLowerCase();
            var itmd=new Array();
            for(var i = 0;i<Object.entries(Object.entries(t1)[obj][1][objb]).length;i++) {
              itmd[i]=new Array(enobj,constr,Object.entries(Object.entries(t1)[obj][1][objb])[i][0],Object.entries(Object.entries(t1)[obj][1][objb])[i][1]);
            }
            ticketarray.push(itmd);
         enobj++;
         }
         
      }
      else {
        var ccon= t1.constructor.name.toLowerCase();
        ticketarray.push(new Array(0,ccon,Object.entries(t1)[obj][0],Object.entries(t1)[obj][1]));
      }
    }
    console.log(ticketarray);
    return ticketarray;
  }
  setHeader(val){
    this.header = val;
  }
  getHeader(){
    return this.header;
  } 
  setFooter(val){
    this.footer = val;
  }
  getFooter(){
    return this.footer;
  } 
  setSidebar(val){
    this.sidebar = val;
  }
  getSidebar(){
    return this.sidebar;
  } 
  setStartlayout(val){
    this.startlayout = val;
  }
  getStartlayout(){
    return this.startlayout;
  } 
  setEndlayout(val){
    this.endlayout = val;
  }
  getEndlayout(){
    return this.endlayout;
  } 
  setLoginform(val){
    this.loginform = val;
  }
  getLoginform(){
    return this.loginform;
  } 
  setServiceForm(val){
    this.serviceForm = val;
  }
  getServiceForm(){
    return this.serviceForm;
  } 
  setContent(val){
    this.content = val;
  }
  getContent(){
    return this.content;
  } 
  setView(val){
    this.view = val;
  }
  getView(){
    return this.view;
  }  
  setSession(val){
    this.session = val;
  }
  getSession(){
    return this.session;
  }  
  setTicket(val){
    this.ticket = val;
  }
  getTicket(){
    return this.ticket;
  }  
}