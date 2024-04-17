function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 59.937017, lng: 30.315777},
    disableDefaultUI: true,
    ZoomControl: false,
    scaleControl: true,
  });

  var image = './img/map-mobile.png';
  var marker = new google.maps.Marker({
    position: {lat: 59.937017, lng:30.315777},
    map: map,
    icon: image
  });
}

initMap()
