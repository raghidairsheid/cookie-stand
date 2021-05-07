'use strict';


//hours
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm","5pm" ,"6pm","7pm"];
// let randomCustomerPerHour= [];
// let salesPerHour= [];


let obLocatin =[]; //array of obj

// constructur function
function Location(locationName, minCustomerPerHour, maxCustomerPerHour, avgCustomerCookies){
    this.locationName = locationName;
    this.minCustomerPerHour = minCustomerPerHour;
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCustomerCookies = avgCustomerCookies;
    this.totalPerHour = 0;
    this.randomCustomerPerHour =[];
    this.salesPerHour = [];
    obLocatin.push(this) 
    
}
Location.prototype.random = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
    };

Location.prototype.randomCustomerNumber = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
    }
    console.log(this);
},
   
Location.prototype.salesCookies= function () {
    for (let i = 0; i < hours.length; i++) {
        this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
        this.totalPerHour += this.salesPerHour[i];
    }
     console.log(this);
},

Location.prototype.render = function () {
    let parent = document.getElementById('sales');
    let creat_table = document.createElement('table');
    parent.appendChild(t);


    let tr = document.createElement('tr');
    creat_table.appendChild(tr);
    let th = document.createElement('th');
    tr.appendChild(th);
    for(let i=0; i<obLocatin.length; i++){
        totalPerHour+=this.counter;
        th.textContent = this.location;
        for (let i = 0; i < hours.length; i++) {
            let cell = document.createElement('td');
            tr.appendChild(cell);
            cell.textContent = this.salesCookies[i];
            }
        }
        let locationTotal = document.createElement('td');
        tr.appendChild(locationTotal);
        locationTotal.textContent = this.counter;
    }


let seattle = new Location('seattle', 65, 23, 6.3);
console.log(seattle);
let tokyo = new Location('Tokyo',24, 3, 1.2);
console.log(tokyo)
let dubai = new Location('Dubai',38, 11, 3.7);
console.log(dubai);
let paris = new Location('Paris', 38, 20, 2.3);
console.log(paris);
let lima = new Location('Lima',16, 2, 4.6);
console.log(lima);
//footer



function header() {
    
    let trEl = document.createElement('tr');
    h.appendChild(trEl);
    let cell1 = document.createElement('th');
    trEl.appendChild(cell1);
    cell1.textContent = " ";
    for (let j = 0; j < hours.length; j++) {
        let cell2 = document.createElement('th');
        trEl.appendChild(cell2);
        cell2.textContent = hours[j];
    }
    let cell3 = document.createElement('th');
    trEl.appendChild(cell3);
    cell3.textContent = 'Daily Location Total';
}

let formSales = document.getElementById('formSales');
//let divEl = document.getElementById('container');
formSales.addEventListener('submit', clickme);


function clickme(event){
    event.preventDefault();

    let locationName = event.target.locationName.value;
    console.log(locationName);
    let minCustomerPerHour = event.target.minCustomerPerHour.value;
    console.log(minCustomerPerHour);
    let maxCustomerPerHour = event.target.maxCustomerPerHour.value;
    console.log(maxCustomerPerHour);
    let avgCustomerCookies = event.target.avgCustomerCookies.value;
    console.log(avgCustomerCookies);
}



// let Seattle = {
//     locationName: 'Seattle',
//     minCustomerPerHour: 23,
//     maxCustomerPerHour: 65,
//     avgCustomerCookies: 6.3,
//     randomCustomerPerHour: [],
//     salesPerHour: [],
//     totalPerHour: 0,

//     //random number of customers per hour

//     randomCustomerNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
//         }
//         //console.log(this);
//     },

//     //calculate and store amounts of cookies for each hour

//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//         //console.log(this);
//     },

//     //separate array
//     //Display the values of each array as unordered lists in the browser
//     // Calculating the sum of these hourly totals; 
//     // your output for each location should look like this:
//     render: function () {
//         let container = document.getElementById('sales');
//         let h1Element = document.createElement('h1');
//         container.appendChild(h1Element);
//         h1Element.textContent = this.locationName;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let liTotal = document.createElement('li');
//         ulElement.appendChild(liTotal);
//         liTotal.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// Seattle.randomCustomerNumber();
// Seattle.salesCookies();
// Seattle.render();


// let tokyo = {
//    locationName: 'Tokyo',
//    minCustomerPerHour: 3,
//    maxCustomerPerHour: 24,
//    avgCustomerCookies: 1.2,
//    randomCustomerPerHour: [],
//    salesPerHour: [],
//    totalPerHour: 0,

//     //random number of customers per hour

//     randomCustomerNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
//         }
//         //console.log(this);
//     },

//     //calculate and store amounts of cookies for each hour

//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//         //console.log(this);
//     },

//     //separate array
//     //Display the values of each array as unordered lists in the browser
//     // Calculating the sum of these hourly totals; 
//     // your output for each location should look like this:
//     render: function () {
//         let container = document.getElementById('sales');
//         let h1Element = document.createElement('h1');
//         container.appendChild(h1Element);
//         h1Element.textContent = this.locationName;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let liTotal = document.createElement('li');
//         ulElement.appendChild(liTotal);
//         liTotal.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// tokyo.randomCustomerNumber();
// tokyo.salesCookies();
// tokyo.render();



// let Dubai = {
//     locationName: 'Dubai',
//     minCustomerPerHour: 11,
//     maxCustomerPerHour: 38,
//     avgCustomerCookies: 3.7,
//     randomCustomerPerHour: [],
//     salesPerHour: [],
//     totalPerHour: 0,
 
//      //random number of customers per hour
 
//     randomCustomerNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
//         }
//          //console.log(this);
//     },
 
//      //calculate and store amounts of cookies for each hour
 
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//          //console.log(this);
//     },
 
//      //separate array
//      //Display the values of each array as unordered lists in the browser
//      // Calculating the sum of these hourly totals; 
//      // your output for each location should look like this:
//     render: function () {
//         let container = document.getElementById('sales');
//         let h1Element = document.createElement('h1');
//         container.appendChild(h1Element);
//         h1Element.textContent = this.locationName;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let liTotal = document.createElement('li');
//         ulElement.appendChild(liTotal);
//         liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
//     }
 
// }
// Dubai.randomCustomerNumber();
// Dubai.salesCookies();
// Dubai.render();
 
 

// let Paris = {
//     locationName: 'Paris',
//     minCustomerPerHour: 20,
//     maxCustomerPerHour: 38,
//     avgCustomerCookies: 2.3,
//     randomCustomerPerHour: [],
//     salesPerHour: [],
//     totalPerHour: 0,
 
//      //random number of customers per hour
 
//     randomCustomerNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
//         }
//          //console.log(this);
//     },
 
//      //calculate and store amounts of cookies for each hour
 
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//          //console.log(this);
//     },
 
//      //separate array
//      //Display the values of each array as unordered lists in the browser
//      // Calculating the sum of these hourly totals; 
//      // your output for each location should look like this:
//     render: function () {
//         let container = document.getElementById('sales');
//         let h1Element = document.createElement('h1');
//         container.appendChild(h1Element);
//         h1Element.textContent = this.locationName;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let liTotal = document.createElement('li');
//         ulElement.appendChild(liTotal);
//         liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
//     }
 
// }
// Paris.randomCustomerNumber();
// Paris.salesCookies();
// Paris.render();
 
  

// let Lima = {
//     locationName: 'Lima',
//     minCustomerPerHour: 2,
//     maxCustomerPerHour: 16,
//     avgCustomerCookies: 4.6,
//     randomCustomerPerHour: [],
//     salesPerHour: [],
//     totalPerHour: 0,
 
//      //random number of customers per hour
 
//     randomCustomerNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
//         }
//          //console.log(this);
//     },
 
//      //calculate and store amounts of cookies for each hour
 
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//          //console.log(this);
//     },
 
    
//      //separate array
//      //Display the values of each array as unordered lists in the browser
//      // Calculating the sum of these hourly totals; 
//      // your output for each location should look like this:
//     render: function () {
//         let container = document.getElementById('sales');
//         let h1Element = document.createElement('h1');
//         container.appendChild(h1Element);
//         h1Element.textContent = this.locationName;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let liTotal = document.createElement('li');
//         ulElement.appendChild(liTotal);
//         liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
//     }
 
// }
// Lima.randomCustomerNumber();
// Lima.salesCookies();
// Lima.render();
