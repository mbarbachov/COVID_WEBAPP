// function createMap() {
//     let map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 8,
//         center: { lat: 40.731, lng: -73.997 }
//     });
//
//     let marker = new google.maps.Marker({
//         position: { lat: 40.731, lng: -73.997 },
//         map: map
//     });
//     let geocoder = new google.maps.Geocoder();
//
//     map.addListener("click", (e) => {
//         marker = placeMarkerAndPanTo(marker, e.latLng, map)
//         let result = geocodeLatLng(geocoder, map, marker);
//
//         // open model after alert is resolved
//         openModal(myModal);
//     });
// }
//
// function placeMarkerAndPanTo(prevMarker, latLng, map) {
//     prevMarker.setMap(null);
//
//     // pan to the location and create a marker
//     map.panTo(latLng);
//     return new google.maps.Marker({
//         position: latLng,
//         map: map
//     });
// }
//
// function geocodeLatLng(geocoder, map, marker) {
//     geocoder.geocode({ location: marker.latLng }, function(results, status) {
//         if (status === "OK") {
//             if (results[0]) {
//                 window.alert(results);
//             } else {
//                 window.alert("No results found.");
//             }
//         } else {
//             window.alert("Geocoder failed due to: " + status);
//         }
//     });
// }

// modal displays and overlays
let modal = document.getElementById('simpleModal');
let modalButton = document.getElementById('modalBtn');
let closeButton = document.getElementById('closeBtn');

// listen for events
modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

// close and open functions
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none'
}

function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
