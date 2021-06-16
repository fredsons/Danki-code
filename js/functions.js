window.onload = function(){
    var map;
        
    function initialize() {

        var mapProp = {
            center:new google.maps.LatLng(-23.708218,-46.630874),
            zoom:14,
            scrollwheel: false,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
    
        map=new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat, long, icon, content){
        var latLng ={'lat' :lat, 'lng' :long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset:new google.maps.Size(0.20)
        });

        infoWindow.open(map.marker);

    }

    initialize();
    addMarker(-23.708218,-46.630874);
}


