$(updateGraph)
$(updateView)
function updateView(){
    alert("Zagster Data")
}

const BASE_URL = "https://zagster-service.herokuapp.com"


function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}
// fade out
$(function() {
  $('body').removeClass('fade-out');
});
// fade out
function updateGraph(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [{
            label: 'Total Zagster Rides Per Year',
            backgroundColor: 'rgb(255, 102, 0)',
            borderColor: 'rgb(250, 249, 249)',
            data: [0, 10, 5, 2, 20, 30, 45,30,20,2,5,15]
        }]
    },

    // Configuration options go here
    options: {}
});
}