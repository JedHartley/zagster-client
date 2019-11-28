$(updateGraph)
$(updateView)

// // function updateView(){
// //     alert("Zagster Data")
// // }
// // // // "const" a memory location that never changes is a constant
const BASE_URL = "https://zagster-service.herokuapp.com"

// // // // const PI = 3.14159
// // // // //jQuery command. "$" Wait until the webpage loads call the function whos name is in the parantheses
// // // // //function call means run the code
// // // // //$(greeter)

// // // // //call function add(use it-make it run)
// // // // add(2,3);
// // // // // greeter is the function identifier. name is the functions argument (info it need to do its job)
// // // // function add(num1, num2){
// // // //   answer = num1 + num2;
// // // //   console.log("The answer is:" + answer);
// // // //   return answer;
// // // // }

// // // // function greeter(name){
// // // //   alert("Welcome to "+ name + " Data Visualization")
// // // // }
// // // // greeter("Jed Hartley's")

// // // // var person = {name: "Jed", age:38, car: {model: "Toyota", year: 2011} }
// // // // console.log ("My name is " + person.name)
// // // // console.log ("my age is " + person.age)
// // // // console.log ("My car model is " + person.car.model)

// // // // if (person.age > 35){
// // // //   alert("You're Old!")
// // // // }

// var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is ' + year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])

// // // Arrays to hold data points pulled from JQuery
let years = []
let months2016 = []
let months2017 = []
let months2018 = []

//define or implement a function
$.getJSON(BASE_URL + "/rides/count" , updateRideCount)
function updateView() {
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
  ).then(updateChart);
}



// function perYear(data){}
function perYear(data) {
  [{"9":220},{"10":141},{"11":89},{"12":16}]
for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
  months2016.push(data[2016] [index] [month])
}}
console.log("2016 data by months is easy " + months2016)

for (var index = 0, month=1; index <=11, month<=12; ++index, ++month){
  months2017.push(data[2017] [index] [month])
}

  for (var index = 0, month=1; index <= data.length, month<=10; ++index, ++month){
    months2018.push(data[2018] [index] [month])

}

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  console.log(data)
}

function updateGraph(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [{
            label: 'Total Zagster Rides',
            backgroundColor: 'rgb(255, 102, 0)',
            borderColor: 'rgb(250, 249, 249)',
            data: month,
            data: years,
        }]
    },

    // Configuration options go here
    options: {}
});
}
