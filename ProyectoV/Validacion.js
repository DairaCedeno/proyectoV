function initMap() {
    // Crea una instancia del mapa
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  
    // Verifica si el mapa se ha cargado correctamente
    google.maps.event.addListenerOnce(map, "tilesloaded", function() {
      alert("El mapa de Google se ha cargado correctamente.");
    });
  }
 

      