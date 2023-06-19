document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Get current position
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

function onSuccess(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Use the latitude and longitude values as needed
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
}

function onError(error) {
  console.log("Error code: " + error.code);
  console.log("Error message: " + error.message);
}
