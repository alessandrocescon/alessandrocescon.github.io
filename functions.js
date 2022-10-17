function rw(elw) {
  var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth,
  y = win.innerHeight || docElem.clientHeight || body.clientHeight;
  if (parseInt(x) <= 900 && parseInt(x) > 500) {
      if (parseInt(elw) <= 40) {
        return "50%";
      }
      else {
        return "100%";
      }
  }
  else if (parseInt(x) <= 500) {
    return "100%";
  }
  else {
    return elw+"%";
  }
}
function debug() {
  javascript:(function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+'NS']&&F.documentElement.namespaceURI;E=E?F[i+'NS'](E,'script'):F[i]('script');E[r]('id',b);E[r]('src',I+g+T);E[r](b,u);(F[e]('head')[0]||F[e]('body')[0]).appendChild(E);E=new Image;E[r]('src',I+L);})(document,'createElement','setAttribute','getElementsByTagName','FirebugLite','4','firebug-lite-debug.js','/skin/xp/sprite.png','https://alessandrocescon.github.io/public/firebug/build/','#startOpened');
}
function responsive() {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;
  if (parseInt(x) <= 900 && parseInt(x) > 500) {
    var respconts = document.getElementsByClassName("dlfitm");
    for (var i = 0, len = respconts.length; i < len; i++) {
      var elw = respconts[i].style.width;
      if (parseInt(elw) <= 40) {
        respconts[i].style.width = "50%";
      }
      else {
        respconts[i].style.width = "100%";
      }
    }
  }
  else if (parseInt(x) <= 500) {
    var respconts = document.getElementsByClassName("dlfitm");
    for (var i = 0, len = respconts.length; i < len; i++) {
      var elw = respconts[i].style.width;
      respconts[i].style.width = "100%";
    }
  }
}
function togglemenu() {
  var state = document.getElementById("toggler").innerText;
  if(state == "[+]") {
    document.getElementById("toggler").innerText="[-]";
    document.getElementById("menuul").style.height = "auto";
  }
  else {
    document.getElementById("toggler").innerText="[+]";
    document.getElementById("menuul").style.height = "3.0em";
  }
}
function closemenu() {
  var state = document.getElementById("toggler").innerText;
  document.getElementById("toggler").innerText="[+]";
  document.getElementById("menuul").style.height = "3.0em";
}
function createmenu() {
   var menu="<ul id='menuul'>";
   menu+="<li><a id='toggler' href='#' title='toggle menu' onclick='togglemenu()'>[+]</a></li>";
   for (i in pages.pages) {
        var folder="";
        if(pages.pages[i].folder != "") {
          folder = "/"+pages.pages[i].folder;
        }
        menu+="<li><a href='"+folder+"/"+pages.pages[i].url+"' title='"+pages.pages[i].title+"' onclick='loadme();return false;'>"+pages.pages[i].menu+"</a></li>";
      }
    menu+="</ul>";
    document.getElementById("menu").innerHTML=menu;
}
function poptext() {
  document.getElementById("footer").innerHTML="Copyright &copy; 2020 Alessandro Cescon info@eyefly.it";
}
function pop() {
  loadstartpage();
  createmenu();
  poptext();
}
function loadme(dest=0) {
  if(event) {
    event.preventDefault();
  }
  var reqcont = event.target.href;
  if(dest != 0) {
     reqcont = dest;
  }
  const url = new URL(reqcont);
  var tit=  url.pathname.replace(".html", "");
  tit= tit.replace("/", "");
  tit= tit.replace("-", " ");
  tit= tit.replace("_", " ");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("cont").innerHTML=xhttp.responseText;
         popmeta();
         main();
         //console.log(xhttp.responseText);
         closemenu();
      }
      else {
        document.getElementById("cont").innerHTML="Error, document not available.";
        closemenu();
      }
  };
  xhttp.open("GET", reqcont, true);
  xhttp.send();
}
function loadstartpage() {
  const params = new URLSearchParams(window.location.search);
  if(params.has('dest')) {
      var reqcont = window.location.protocol+"//"+window.location.hostname+decodeURI(params.get('dest'));
      loadme(reqcont);
      //console.log(reqcont);
  }
  else {
      var reqcont = window.location.protocol+"//"+window.location.hostname+"/content/home.html";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             document.title = "hometest";
             document.getElementById("cont").innerHTML=xhttp.responseText;
             popmeta();
             main();
          }
          else {
            document.getElementById("cont").innerHTML="Error, document not available.";
          }
      };
      xhttp.open("GET", reqcont, true);
      xhttp.send();
  }
}
function popmeta() {
    var title= "Home page title";
    var description = "Home page description";
    if(document.getElementById("title")) {
        title = document.getElementById("title").innerHTML;     
    }
    if(document.getElementById("description")) {
        description = document.getElementById("description").innerHTML;     
    }
    //console.log(title);
    //console.log(description);
    document.title = title;
    document.description = description;
    window.history.replaceState({}, document.title, "/");
}
function main() {
  if(document.getElementById('demo')) {
    getDemo();
  }
  if(document.getElementById('webworker')) {
    startWorker();
  }
}
function getDemo() {
    document.getElementById("demo").innerHTML="Dynamic text demo";
}



var w;
function startWorker() {

  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("https://alessandrocescon.github.io/content/demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}