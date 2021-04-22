function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.75065563753321, lng: -73.98615378121347},
        zoom: 18,
        mapId: '9f471e09021b126d',
        mapTypeControl: false,
        fullscreenControl: false,
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
        ],
        [
            "Max Brenner's",
            40.73465002178639, 
            -73.99122692312896,
            "images/star.svg",
            38,
            31
        ],
        [
            "Yogurt - The frozen Wall",
            40.736427411933946, 
            -73.99418608664605,
            "images/star.svg",
            38,
            31
        ],
        [
            "Yoshi\'s Home",
            40.75234290510081, 
            -74.0029399346282,
            "images/yoshi_house.svg",
            38,
            31
        ],
        [
            "Empire State",
            40.74871217797759, 
            -73.98574385362132,
            "images/castle.svg",
            38,
            31
        ],
        [
            "Izakaya\'s Mew",
            40.75042084656154, 
            -73.98621298930084,
            "images/star.svg",
            38,
            31
        ],
        [
            "34 St Herald Square",
            40.7500791163572, 
            -73.98808953201902,
            "images/pipe.svg",
            38,
            31
        ],
        [
            "The Morgan Library & Museum",
            40.74947766693204, 
            -73.98141337042556,
            "images/ghosthouse.svg",
            38,
            31
        ],
        [
            "Kano\'s Martial Arts",
            40.74654634043023, 
            -73.99284482548181,
            "images/pointer.svg",
            38,
            31
        ],
        [
            "Columbus Circle",
            40.768078943007026, 
            -73.98191408395799,
            "images/hill_with_eyes.svg",
            38,
            31
        ],
        [
            "The Vessel",
            40.754039445856776, 
            -74.00216873134288,
            "images/hill_with_eyes.svg",
            38,
            31
        ],
        [
            "Hudson Yards",
            40.753579694944314, 
            -74.0011824950649,
            "images/castle.svg",
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
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
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