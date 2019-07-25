if("geolocation" in navigator){        
        console.log("supported");
    }else{ console.log("geo not supported"); }    
    
    getLocation();
    function getLocation(){        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }else{ console.log("you're outside the earth"); }
    }

    function showPosition(position){        
        console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
        console.log(haversine(position.coords.latitude, position.coords.longitude, -22.746226, -47.334551));
    }
    function haversine(userLat, userLong, locoLat, locoLong){
        var rad = function(x) {
            return x * Math.PI / 180;
        };
        
        // Earth radius in KM
        var earthRadius = 6378137; 
        // Latitude degree
        var dLat = rad(locoLat - userLat);
        // Longitude degree
        var dLong = rad(locoLong - userLong);        
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(userLat)) * Math.cos(rad(locoLat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = erthRadius * c;
        // in meters
        return distance;
    }
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;

            case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;

            case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;

            case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
    }
