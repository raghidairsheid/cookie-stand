'use strict';


//hours
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm","5pm" ,"6pm","7pm"];
// let randomCustomerPerHour= [];
// let salesPerHour= [];


let obLocatin =[]; //array of obj
let patSales = document.getElementById('sales');
let creat_table = document.createElement('table');
patSales.appendChild(creat_table);

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
// Location.prototype.random = function(min, max){
//     return Math.floor(Math.random() * (max - min +1) + min);
//     };

Location.prototype.randomCustomerNumber = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
    }
    //console.log(this);
};
   
Location.prototype.salesCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
        this.totalPerHour += this.salesPerHour[i];
    }
     //console.log(this);
};
 
Location.prototype.render = function () {
    
    let trEl1 = document.createElement('tr');
    creat_table.appendChild(trEl1);
    let tdata = document.createElement('td');
    trEl1.appendChild(tdata);
    tdata.textContent = this.locationName;

    for (let i = 0; i < hours.length; i++) {
        let tdata = document.createElement('td');
        trEl1.appendChild(tdata);
        tdata.textContent = this.salesPerHour[i];
    }
    
    let locationTotal = document.createElement('th');
    trEl1.appendChild(locationTotal);
    locationTotal.textContent = this.totalPerHour;
};

//let seattle = new Location('seattle', 65, 23, 6.3);
// seattle.randomCustomerNumber();
// seattle.salesCookies();
// let tokyo = new Location('Tokyo',24, 3, 1.2);

// let dubai = new Location('Dubai',38, 11, 3.7);
// let paris = new Location('Paris', 38, 20, 2.3);
// let lima = new Location('Lima',16, 2, 4.6);

function header() {
    let trEl2 = document.createElement('tr');
    creat_table.appendChild(trEl2);
    let thead = document.createElement('th');
    trEl2.appendChild(thead);
    thead.textContent = " ";
    for (let j = 0; j < hours.length; j++) {
        let thead2 = document.createElement('th');
        trEl2.appendChild(thead2);
        thead2.textContent = hours[j];
    }
    let thead3 = document.createElement('th');
    trEl2.appendChild(thead3);
    thead3.textContent = 'Daily Location Total';
};

function footer(){
    let trEl3 = document.createElement('tr');
    creat_table.appendChild(trEl3);
    let thEl = document.createElement('th');
    trEl3.appendChild(thEl);
    thEl.textContent = 'Total';

    let finalTotal = 0;
    for(let i=0; i<hours.length; i++){
        let totalHour = 0;
        for(let j=0; j<obLocatin.length; j++){
            totalHour = totalHour + obLocatin[j].salesPerHour[i];
            finalTotal += obLocatin[j].salesPerHour[i];
        }
        let tdata2 = document.createElement('th');
        trEl3.appendChild(tdata2);
        tdata2.textContent = totalHour;
    }
    let tdata3 = document.createElement('th');
    trEl3.appendChild(tdata3);
    tdata3.textContent = finalTotal;
};
header();
let seattle = new Location('seattle', 65, 23, 6.3);
seattle.randomCustomerNumber();
seattle.salesCookies();
seattle.render();
console.log(seattle);

let tokyo = new Location('Tokyo',24, 3, 1.2);
tokyo.randomCustomerNumber();
tokyo.salesCookies();
tokyo.render();
//console.log(tokyo);

let dubai = new Location('Dubai',38, 11, 3.7);
dubai.randomCustomerNumber();
dubai.salesCookies();
dubai.render();
//console.log(dubai);

let paris = new Location('Paris', 38, 20, 2.3);
paris.randomCustomerNumber();
paris.salesCookies();
paris.render();
//console.log(paris);

let lima = new Location('Lima',16, 2, 4.6);
lima.randomCustomerNumber();
lima.salesCookies();
lima.render();
//console.log(lima);
footer();

let formSales = document.getElementById('formSales');
//let divEl = document.getElementById('container');
formSales.addEventListener('submit', clickme);


function clickme(event){
    event.preventDefault();

    let locName = event.target.locationName.value;
    console.log(locName);
    let minCus = parseInt(event.target.min.value);
    console.log(minCus);
    let maxCus = parseInt(event.target.max.value);
    console.log(maxCus);
    let avgCus = parseInt(event.target.AVG.value);
    console.log(avgCus);
    
    let editLoc = new Location(locName, minCus, maxCus,avgCus);
        editLoc.randomCustomerNumber();
        editLoc.salesCookies();
        editLoc.render();

        let patSales2 = document.getElementById('editLocation');
        patSales2.textContent = ' '; 
        footer();
    // creat_table();
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
