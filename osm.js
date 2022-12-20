javascript:(async function() {
  const location = prompt("Enter the location you want to look up:");
  if (!location) {
    return;
  }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json`;

  const response = await fetch(url);
  const responseData = await response.json();

  console.log(responseData[0]["lat"]);
  console.log(responseData[0]["lon"]);
})();
