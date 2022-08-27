function initMap(){
    const directionsRenderer =new google.maps.DirectionsRenderer();
    const directionsService =new google.maps.DirectionsService();
    const map= new google.maps.Map(document.getElementById("map"),{
        zoom:14,
        center: {lat:37.77,lng:-122.447},
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService,directionsRenderer);
    document.getElementById("mode").addEventListener("change",()=>{
        calculateAndDisplayRoute(directionsService,directionsRenderer);
    })
    
}
function calculateAndDisplayRoute(directionsService,directionsRenderer){
    const selectedMode= document.getElementById("mode").value;

    directionsService
    .route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,


        travelMode: google.maps.Travelmode[selectedMode],
    })
    .then((response)=> {
        directionsRenderer.setDirections(response);
    })
    .catch((e)=> window.alert("Directions request failed due to" + status));
}