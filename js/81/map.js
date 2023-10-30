/* global google */
(async function () {
  'use strict';

  // destructure array
  const someNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
  const [a,b,,d, ...rest] = someNumbers;
  console.log(a, b, d, rest);

  const potus = {first: 'Joe', last: 'Biden', email: 'jbiden@whitehouse.gov', phone: '574456789'};
  const {first, email, ...rest2} = potus;
  console.log(first, email, rest2);

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

  const position = { lat: 40.09564277325912, lng: -74.22203857900014 };
  const pcs = {lat: 40.1090045670685, lng: -74.21720576956832 };

  const map = new Map(document.getElementById('map'), {
    zoom: 18,
    center: position,
    mapId: 'DEMO_MAP_ID',
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  const infoWindow = new google.maps.InfoWindow();//{content: 'This is BMG'});

  const beachFlagImg = document.createElement('img');
  beachFlagImg.src =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  const pinScaled = new PinElement({
    scale: 2,
    background: '#FBBC04',
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'BMG',
    //content: pinScaled.element
    content: beachFlagImg,
  });

  marker.addListener('click', () => {
    infoWindow.setContent('this is bmg <a target="_blank" href="https:\\www.google.com">more info</a>');
    infoWindow.open(map, marker);
  });


  const pcsMarker = new AdvancedMarkerElement({
    map: map,
    position: pcs,
    title: 'PCS',
    content: pinScaled.element
    //content: beachFlagImg,
  });

  pcsMarker.addListener('click', () => {
    infoWindow.setContent('this is pcs');
    infoWindow.open(map, pcsMarker);
  });

  map.addListener('center_changed', () => {
    const newCenter = map.getCenter();
    console.log(newCenter.lat(), newCenter.lng());
  });
}());
