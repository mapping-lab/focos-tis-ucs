mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

const nFormat = new Intl.NumberFormat(undefined, {minimumFractionDigits: 0});

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/infoamazonia/cm15efkli01m301pmgenve304', // stylesheet location
    // center: [-57.1592, -6.4979],
    center: [-58.926394, -6.190564],
    zoom: 4,
    minZoom: 3,
    maxBounds: [[-90.600324, -26.503416], [-20.933966, 5.888552]], // Set the max bounds
    maxZoom: 10 // Set the max zoom level
});

var mapLayers = {
    'focos-uc': ['focos-uc'],
    'focos-ti': ['focos-ti']
};


map.on('load', () => {
    map.addControl(new mapboxgl.NavigationControl());

    let elements = document.querySelectorAll('li.layer-toggle a');
    // Layer controls
    Array.prototype.forEach.call(elements, function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            let element = e.currentTarget;
            let layerId = element.id;
            
            Array.prototype.forEach.call(mapLayers[layerId], function (layer) {
                var visibility = map.getLayoutProperty(layer, 'visibility');
                // console.log(visibility);
                if (visibility === 'visible' || visibility == undefined) {
                    element.classList.remove('active');
                    map.setLayoutProperty(layer, 'visibility', 'none');
                } else {
                    element.classList.add('active');
                    map.setLayoutProperty(layer, 'visibility', 'visible');
                }
            });
        });
    });

 

    
});