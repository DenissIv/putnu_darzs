let map;

function initMap() {
    const location = { lat: 56.94462820948123, lng: 24.073426998585436 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location, //56.94462820948123, 24.073426998585436
        zoom: 16,
    });
    new google.maps.Marker({
        position: location,
        map,
        title: "",
        label: { color: '#c92a2c', fontWeight: 'bold', fontSize: '14px', text: 'Baložu iela 11, Rīga' },
        icon: {
            labelOrigin: new google.maps.Point(90, 14),
            url: "http://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png"
        }
    });
}