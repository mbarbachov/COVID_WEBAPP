const myModal = document.getElementById('modal');
const overlay = document.getElementById('overlay');


function createMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 40.731, lng: -73.997 }
    });

    let marker = new google.maps.Marker({
        position: { lat: 40.731, lng: -73.997 },
        map: map
    });
    let geocoder = new google.maps.Geocoder();

    map.addListener("click", (e) => {
        marker = placeMarkerAndPanTo(marker, e.latLng, map)
        let result = geocodeLatLng(geocoder, map, marker);

        // open model after alert is resolved
        openModal(myModal);
    });
}

function placeMarkerAndPanTo(prevMarker, latLng, map) {
    prevMarker.setMap(null);

    // pan to the location and create a marker
    map.panTo(latLng);
    return new google.maps.Marker({
        position: latLng,
        map: map
    });
}

function geocodeLatLng(geocoder, map, marker) {
    geocoder.geocode({ location: marker.latLng }, function(results, status) {
        if (status === "OK") {
            if (results[0]) {
                window.alert(results);
            } else {
                window.alert("No results found.");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

// modal displays and overlays
// const openModalButtons = document.querySelectorAll('[data-modal-target]');  // no need for a modal button


overlay.onclick = () => {
    if (myModal.classList[0] === 'active') {
        closeModal(myModal);
    }
}
// overlay.addEventListener('click', () => {
//     if (myModal.classList[0] === 'active') {
//         closeModal(myModal);
//     }
// });

function openModal(modal) {
    if (modal === null) return;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal === null) return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
}

