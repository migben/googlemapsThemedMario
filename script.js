function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.75065563753321, lng: -73.98615378121347},
        zoom: 18,
        mapId: '9f471e09021b126d',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false,
    });

    const markers = [
        [
            "Pipe",
            40.744152660356065,
            -73.99548525773498,
            "images/pipe.svg",
            38,
            31
        ]
    ]

    for(let i = 0; i < markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaleSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
          });
    
          const infowindow = new google.maps.InfoWindow({
              content: currMarker[0],
          })
    
          marker.addListener("click", () => {
              infowindow.open(map, marker);
          })
    }

     
}

// 40.75065563753321, -73.98615378121347

// marker 40.744152660356065, -73.99548525773498