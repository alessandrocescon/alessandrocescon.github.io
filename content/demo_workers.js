         var watchID;
         var geoLoc;
         function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert("Latitude : " + latitude + " Longitude: " + longitude);
            document.getElementById('webworker').insertAdjacentHTML('afterbegin', "Latitude : " + latitude + " Longitude: " + longitude+"<br>");
            postMessage("Latitude : " + latitude + " Longitude: " + longitude+"<br>");
         }
         
         function errorHandler(err) {
            if(err.code == 1) {
               console.log("Error: Access is denied!");
            } else if( err.code == 2) {
               console.log("Error: Position is unavailable!");
            }
         }
         
         function getLocationUpdate(){
            
            if(navigator.geolocation){
               
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               geoLoc = navigator.geolocation;
               watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
            } else {
               console.log("Sorry, browser does not support geolocation!");
            }
         }