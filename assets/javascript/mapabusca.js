let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });
}

function listar(){

  fetch('http://localhost:3000/encontrarhemonucleo')
    .then((response) => response.json())
    .then((data) => {
      for(let elemento of data){
        coordenadas = {}
        coordenadas = {lat: elemento.local.coordenadas[0], lng: elemento.local.coordenadas[1]}
        marker = new google.maps.Marker({
          map: map,
          position: coordenadas,
          draggable: true
        });
      }
    })
}

