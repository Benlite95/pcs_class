/* global google*/
(async function () {
  'use strict';

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const lakewood = { lat: 40.09564277325912, lng: -74.22203857900014 };

  const map = new Map(
    document.querySelector('#map'), {
    zoom: 16,
    center: lakewood,
    mapId: 'DEMO_MAP_ID'
  });

  /*const panorama = new google.maps.StreetViewPanorama(
    document.querySelector('#pano'),
    {
      position: lakewood,
      pov: {
        heading: 0,
        pitch: 40
      }
    }
  );

  map.setStreetView(panorama);

  map.addListener('center_changed', () => {
    panorama.setPosition(map.getCenter());
  });*/

  const searchInput = document.querySelector('#search');
  //const searchInput = $('#search');
  const placeslist = document.querySelector('#sidebar ul');

  async function handleSearchSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${search.value}&maxRows=10&username=slubowsky&type=json`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const places = await response.json();

      const bounds = new google.maps.LatLngBounds();
      places.geonames.forEach(place => {
        addPlaceToMap(place);
        bounds.extend({ lat: place.lat, lng: place.lng });
        addPlaceToSidebar(place);
      });
      map.fitBounds(bounds);

    } catch (e) {
      console.error(e);
    }
  }

  const infowindow = new google.maps.InfoWindow();

  function addPlaceToMap(place) {
    let img;
    if (place.thumbnailImg) {
      img = document.createElement('img');
      img.className = 'place-img';
      img.src = place.thumbnailImg;
    }
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: place.lat, lng: place.lng },
      title: place.title,
      content: img
    });

    marker.addListener('click', () => {
      infowindow.setContent(`
        <h4>${place.title}</h4>
        <div>${place.summary}</div>
        <a href="https://${place.wikipediaUrl}" target="_blank">more details</a>
      `);
      infowindow.open(map, marker);
    });
  }

  function addPlaceToSidebar(place) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${place.title}</span>
                    <img src="${place.thumbnailImg}"/>
                    <div class="summary">${place.summary}<div>`;
    placeslist.appendChild(li);
    li.addEventListener('click', async () => {
      const currentlyActive = document.querySelector('.active');
      if (currentlyActive) {
        currentlyActive.className = '';
        currentlyActive.querySelector('.summary').className = 'summary';
      }

      li.className = 'active';
      li.querySelector('.summary').className = 'summary visible';

      //setTimeout(() => map.panTo({lat: place.lat, lng: place.lng}), 1000);
      //setTimeout(() => map.setZoom(18), 2000);
      //doAfter(() => map.panTo({ lat: place.lat, lng: place.lng }), 1000);
      //doAfter(() => map.setZoom(18), 2000);

      await doAfter(() => map.panTo({ lat: place.lat, lng: place.lng }), 1000);
      await doAfter(() => map.setZoom(18), 1000);
    });
  }

  //$('form').submit(async e => {
  document.querySelector('form').addEventListener('submit', handleSearchSubmit);


  function doAfter(action, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(action()), delay);
    });
  }

  ////////////////////////

  const { DrawingManager } = await google.maps.importLibrary('drawing');
  const drawingManager = new DrawingManager();
  drawingManager.setMap(map);

  const markers = [];
  drawingManager.addListener('overlaycomplete', e => {
    console.log('something was drawn', e);
    //if (e.type === 'marker') {
      console.log(e.overlay.position.lat(), e.overlay.position.lng());
      markers.push({ lat: e.overlay.position.lat(), lng: e.overlay.position.lng() });
      localStorage.setItem('markers', JSON.stringify(markers));
    //}
  });

  if (localStorage.markers) {
    const savedMarkers = JSON.parse(localStorage.markers);
    savedMarkers.forEach(marker => {
      new AdvancedMarkerElement({
        map: map,
        position: marker
      });
    });
  }
}());
