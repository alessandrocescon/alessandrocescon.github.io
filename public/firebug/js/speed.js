function loadGraphics() {
    d3.xml("assets/compass.svg", "image/svg+xml", function(xml) {
        document.body.appendChild(xml.documentElement);
    });

    d3.xml("assets/speed.svg", "image/svg+xml", function(xml) {
        document.body.appendChild(xml.documentElement);
    });

}

function initGeo() {
    navigator.geolocation.watchPosition(
        geosuccess,
        geofailure,
        {
            enableHighAccuracy:true,
            maximumAge:0,
            timeout:0
        }
    );

    //moveSpeed(30);
    //moveCompassNeedle(56);
}

var count = 0;
function geosuccess(event) {

    $("#debugoutput").text("geosuccess: " + count++ + " : " + event.coords.heading + ":" + event.coords.speed);

    var heading = event.coords.heading;
    var speed = event.coords.speed;

    if (heading != null) {
       moveCompassNeedle(heading);
    }

    if (speed != null) {
        // update the speed
        moveSpeed(speed);
    }
}

var currentCompassPosition =  {property: 0};
function moveCompassNeedle(heading) {

    // we use a svg transform to move to correct orientation
    var translateValue = "translate(225,231)";
    var to = {property: heading};

    // stop the current animation and run to the new one
    $(currentCompassPosition).stop().animate(to, {
        duration: 2000,
        step: function() {
            $("#compass").attr("transform", translateValue
                + " rotate(" + this.property + ")")
        }
    });
}

var currentSpeed = {property: 0};
function moveSpeed(speed) {

    // we use a svg transform to move to correct orientation
    var translateValue  = "translate(171,157)";
    var to = {property: Math.round(speed*3.6)};

    // stop the current animation and run to the new one
    $(currentSpeed).stop().animate(to, {
        duration: 2000,
        step: function() {
            $("#speed").attr("transform", translateValue
                + " rotate(" + this.property + ")")
        }
    });
}

function geofailure(event) {
    // ignore
}