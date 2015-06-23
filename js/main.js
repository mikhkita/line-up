$(document).ready(function(){	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        $(".b-4 .man").css("margin-top",( myHeight > myWidth )?50:0);
    }
    $(window).resize(resize);
    resize();

    if( device.mobile() ){
        $(".b-mobile-arrow").hide();
    }

    $(window).stellar({
        hideDistantElements: false,
        horizontalScrolling: false,
        positionProperty: 'transform'
    });

    $('.b-slider-cont').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 7000,
    });

    $(".arrow-left").click(function(){
        $(".slick-prev").trigger("click");
        return false;
    });
    
    $(".arrow-right").click(function(){
        $(".slick-next").trigger("click");
        return false;
    });

    var styles = [
            {
                "stylers": [
                    { "visibility": "on" },
                    { "saturation": -100 },
                    { "lightness": 30 }
                ]
            },{
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    { "weight": 0.1 },
                    { "visibility": "off" },
                    { "color": "#323232" }
                ]
            },{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "on" },
                    { "weight": 0.4 },
                    { "color": "#646464" }
                ]
            },{
                "featureType": "poi.school",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#e84000" },
                    { "visibility": "simplified" }
                ]
            },{
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    { "weight": 0.1 },
                    { "color": "#ffffff" },
                    { "visibility": "on" }
                ]
            },{
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ff6d20" },
                    { "visibility": "simplified" }
                ]
            },{
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    { "weight": 0.1 },
                    { "color": "#ffffff" },
                    { "visibility": "on" }
                ]
            },{
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ffffff" }
                ]
            },{
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    { "weight": 0.1 },
                    { "color": "#646464" }
                ]
            },{
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                    { "hue": "#8800ff" },
                    { "visibility": "on" },
                    { "saturation": 5 }
                ]
            },{
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    { "weight": 0.1 },
                    { "saturation": 11 },
                    { "lightness": 50 },
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative.locality",
                "elementType": "labels.text",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "transit.station",
                "elementType": "labels.text",
                "stylers": [
                    { "visibility": "on" },
                    { "weight": 0.1 },
                    { "color": "#323232" }
                ]
            },{
                "featureType": "transit.station.bus",
                "elementType": "labels.icon",
                "stylers": [
                    { "gamma": 0.72 },
                    { "weight": 0.1 },
                    { "saturation": 77 },
                    { "lightness": 1 },
                    { "hue": "#0099ff" }
                ]
            },{
                "featureType": "transit.station",
                "elementType": "labels.text",
                "stylers": [
                    { "visibility": "on" },
                    { "weight": 0.1 },
                    { "color": "#3c3c3c" }
                ]
            },{
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "on" },
                    { "weight": 0.1 },
                    { "color": "#464646" }
                ]
            },{
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#3c3c3c" }
                ]
            },{
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#b7e4ff" }
                ]
            },{
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            }
        ];

        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

        // var myLatlng = new google.maps.LatLng(55.797883,37.586003);
        // var myPlace = new google.maps.LatLng(55.800694,37.584115);
        // var myOptions = {
        //     zoom: 15,
        //     maxZoom: 17,
        //     minZoom: 13,
        //     center: myLatlng,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //     disableDefaultUI: true,
        //     zoomControl: false
        // }
        // var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	var myPlace = new google.maps.LatLng(59.947896, 30.273620);
    var myOptions = {
        zoom: 17,
        center: new google.maps.LatLng(59.948096, 30.273620),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');



    // Кастомные функции
    custom['getPip'] = function(el){
        var marker = new google.maps.Marker({
            position: myPlace,
            icon: {
                url: "i/pip-2.png", // url
                scaledSize: new google.maps.Size(68, 103), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(34,103) // anchor
            },
            animation: google.maps.Animation.DROP,
            map: map,
            title: "Line-Up"
        });
    }

});