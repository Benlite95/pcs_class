/* global google*/
(async function () {
  'use strict';

  const lakewood = { lat: 40.09564277325912, lng: -74.22203857900014 };

  const { Map } = await google.maps.importLibrary('maps');
  const { DrawingManager } = await google.maps.importLibrary('drawing');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  const map = new Map(document.getElementById('map'), {
    zoom: 18,
    center: lakewood,
    mapId: 'DEMO_MAP_ID',
  });

  const drawingManager = new DrawingManager({polylineOptions: {geodesic: true}});
  drawingManager.setMap(map);

  /*const markers = JSON.parse(localStorage.getItem('markers')) ?? [];
  if (markers) {
    markers.forEach(marker => {
      new AdvancedMarkerElement({
        map,
        position: marker
      });
    });
  }

  const circles = JSON.parse(localStorage.getItem('circles')) ?? [];
  if (circles) {
    circles.forEach(circle => {
      new google.maps.Circle({
        map,
        center: circle.center,
        radius: circle.radius,
      });
    });
  }*/

  /*drawingManager.addListener('overlaycomplete', e => {
    console.log(e);
    switch(e.type) {
      case 'marker':
        markers.push(e.overlay.getPosition());
        localStorage.setItem('markers', JSON.stringify(markers));
        break;
      case 'circle':
        circles.push({radius: e.overlay.getRadius(), center: e.overlay.getCenter()});
        localStorage.setItem('circles', JSON.stringify(circles));
        break;
      case 'polyline':
        console.log('do polyline stuff');
        break;
      case 'polygon':
        console.log('do polygon stuff');
        break;
      case 'rectangle':
        console.log('do rectangle stuff');
        break;
    }
  });*/

  const drawings = JSON.parse(localStorage.getItem('drawings')) ?? [];
  if (drawings) {
    drawings.forEach(drawing => {
      switch (drawing.type) {
        case 'marker':
          new AdvancedMarkerElement({
            map,
            position: drawing.position
          });
          break;
        case 'circle':
          new google.maps.Circle({
            map,
            center: drawing.center,
            radius: drawing.radius,
          });
          break;
        case 'polyline':
          new google.maps.Polyline({
            map,
            path: drawing.path,
            geodesic: true
          });
          break;
        case 'polygon':
          new google.maps.Polygon({
            map,
            path: drawing.path
          });
          break;
        case 'rectangle':
          new google.maps.Rectangle({
            map,
            bounds: drawing.bounds
          });
          break;
      }
    });
  }

  drawingManager.addListener('markercomplete', e => {
    drawings.push({ type: 'marker', position: e.getPosition() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  drawingManager.addListener('circlecomplete', e => {
    drawings.push({ type: 'circle', radius: e.getRadius(), center: e.getCenter() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  drawingManager.addListener('polylinecomplete', e => {
    drawings.push({ type: 'polyline', path: e.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  drawingManager.addListener('polygoncomplete', e => {
    drawings.push({ type: 'polygon', path: e.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });

  drawingManager.addListener('rectanglecomplete', e => {
    drawings.push({ type: 'rectangle', bounds: e.getBounds() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });
}());
