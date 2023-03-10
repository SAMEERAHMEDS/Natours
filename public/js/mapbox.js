/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2FtZWVyLWFobWVkLXMiLCJhIjoiY2xjOTA3ODZiMDRtcDN3cGN5bmN6YWNtZCJ9.7bXGTVpVfVn-9iKxpl_iVg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sameer-ahmed-s/clc911wbk001b15k7kf3jzsj8',
    scrollZoom: false,
    // center: [77.5946, 12.9716],
    // zoom: 7,
    //interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
