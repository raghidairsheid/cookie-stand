'use strict';


//hours
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm","5pm" ,"6pm","7pm"];

let Seattle = {
    locationName: 'Seattle',
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    avgCustomerCookies: 6.3,
    randomCustomerPerHour: [],
    salesPerHour: [],
    totalPerHour: 0,

    //random number of customers per hour

    randomCustomerNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
        }
        //console.log(this);
    },

    //calculate and store amounts of cookies for each hour

    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
        //console.log(this);
    },

    //separate array
    //Display the values of each array as unordered lists in the browser
    // Calculating the sum of these hourly totals; 
    // your output for each location should look like this:
    render: function () {
        let container = document.getElementById('sales');
        let h1Element = document.createElement('h1');
        container.appendChild(h1Element);
        h1Element.textContent = this.locationName;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let hour = 0; hour < hours.length; hour++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
Seattle.randomCustomerNumber();
Seattle.salesCookies();
Seattle.render();


let tokyo = {
   locationName: 'Tokyo',
   minCustomerPerHour: 3,
   maxCustomerPerHour: 24,
   avgCustomerCookies: 1.2,
   randomCustomerPerHour: [],
   salesPerHour: [],
   totalPerHour: 0,

    //random number of customers per hour

    randomCustomerNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
        }
        //console.log(this);
    },

    //calculate and store amounts of cookies for each hour

    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
        //console.log(this);
    },

    //separate array
    //Display the values of each array as unordered lists in the browser
    // Calculating the sum of these hourly totals; 
    // your output for each location should look like this:
    render: function () {
        let container = document.getElementById('sales');
        let h1Element = document.createElement('h1');
        container.appendChild(h1Element);
        h1Element.textContent = this.locationName;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let hour = 0; hour < hours.length; hour++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
tokyo.randomCustomerNumber();
tokyo.salesCookies();
tokyo.render();



let Dubai = {
    locationName: 'Dubai',
    minCustomerPerHour: 11,
    maxCustomerPerHour: 38,
    avgCustomerCookies: 3.7,
    randomCustomerPerHour: [],
    salesPerHour: [],
    totalPerHour: 0,
 
     //random number of customers per hour
 
    randomCustomerNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
        }
         //console.log(this);
    },
 
     //calculate and store amounts of cookies for each hour
 
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
         //console.log(this);
    },
 
     //separate array
     //Display the values of each array as unordered lists in the browser
     // Calculating the sum of these hourly totals; 
     // your output for each location should look like this:
    render: function () {
        let container = document.getElementById('sales');
        let h1Element = document.createElement('h1');
        container.appendChild(h1Element);
        h1Element.textContent = this.locationName;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let hour = 0; hour < hours.length; hour++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
    }
 
}
Dubai.randomCustomerNumber();
Dubai.salesCookies();
Dubai.render();
 
 

let Paris = {
    locationName: 'Paris',
    minCustomerPerHour: 20,
    maxCustomerPerHour: 38,
    avgCustomerCookies: 2.3,
    randomCustomerPerHour: [],
    salesPerHour: [],
    totalPerHour: 0,
 
     //random number of customers per hour
 
    randomCustomerNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
        }
         //console.log(this);
    },
 
     //calculate and store amounts of cookies for each hour
 
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
         //console.log(this);
    },
 
     //separate array
     //Display the values of each array as unordered lists in the browser
     // Calculating the sum of these hourly totals; 
     // your output for each location should look like this:
    render: function () {
        let container = document.getElementById('sales');
        let h1Element = document.createElement('h1');
        container.appendChild(h1Element);
        h1Element.textContent = this.locationName;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let hour = 0; hour < hours.length; hour++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
    }
 
}
Paris.randomCustomerNumber();
Paris.salesCookies();
Paris.render();
 
  

let Lima = {
    locationName: 'Lima',
    minCustomerPerHour: 2,
    maxCustomerPerHour: 16,
    avgCustomerCookies: 4.6,
    randomCustomerPerHour: [],
    salesPerHour: [],
    totalPerHour: 0,
 
     //random number of customers per hour
 
    randomCustomerNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustomerPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour));
        }
         //console.log(this);
    },
 
     //calculate and store amounts of cookies for each hour
 
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustomerPerHour[i] * this.avgCustomerCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
         //console.log(this);
    },
 
    
     //separate array
     //Display the values of each array as unordered lists in the browser
     // Calculating the sum of these hourly totals; 
     // your output for each location should look like this:
    render: function () {
        let container = document.getElementById('sales');
        let h1Element = document.createElement('h1');
        container.appendChild(h1Element);
        h1Element.textContent = this.locationName;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let hour = 0; hour < hours.length; hour++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent = `Total: ${this.totalPerHour} cookies`
 
    }
 
}
Lima.randomCustomerNumber();
Lima.salesCookies();
Lima.render();
 
 



