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
        // display a marker geocode the location
        marker = placeMarkerAndPanTo(marker, e.latLng, map);
        let result = geocodeLatLng(geocoder, map, marker);
        console.log(result);

        // display the modal with lorem text
        openModal();
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
                return results;
            } else {
                return "No results found.";
            }
        } else {
            return `Geocoder failed due to: ${status}`;
        }
    });
}

// getting all of our modal elements
let modal = document.getElementById('simpleModal');
let closeButton = document.getElementById('closeBtn');

// listen for events
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

// close and open functions
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

$(document).ready(function() {
    $(".btn").click(function() {
        $(".input").toggleClass("active").focus().val("");
        $(this).toggleClass("animate");
    });
});
