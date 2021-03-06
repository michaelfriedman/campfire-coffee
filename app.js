//variables
var businessHours = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
var stores = [];
var allItems = [];
var franchiseHourlyPounds = [];
var franchiseHourlyEmployeesArrayGlobal= [];
var franchiseTotalLbs = 0;
var franchiseDailyBaristas = 0;

var pikePlaceMarket = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
var seattlePublicLibrary = new CoffeeShop('Seattle Public Libray', 9, 45, 2.6, 0.02);
var southLakeUnion = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
var seaTacAirport = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

var form = document.getElementById('form');
var button = document.getElementById('createFranchiseButton');

// var table = document.getElementById('table');
// var tbody = document.getElementById('table-body');
// var tfoot = document.getElementById('tfoot')[0];

//constructor function
function CoffeeShop(name, minCustHr, maxCustHr, cupsCust, poundsCust) {
  this.name = name;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.cupsCust = cupsCust;
  this.poundsCust = poundsCust;
  this.businessHours = businessHours;
  this.hourlyCustomers = [];
  this.cupsSold = [];
  this.toGoBeansSold = [];
  this.beansForCups = [];
  this.employeesPerHour = [];
  this.totalHourlyPoundsNeeded = [];
  this.totalCustomers = 0;
  this.totalCupsSold = 0;
  this.totalToGoBeansSold = 0;
  this.totalBeansForCups = 0;
  this.totalPoundsNeeded = 0;
  this.dailyBaristasNeeded = 0;
  allItems.push(this);
  stores.push(this.name);
}

var grandTotals = {
  hourlyFranchisePounds: 0,
  dailyFranchisePounds: 0,
  hourlyFranchiseBaristas: 0,
  dailyFranchiseBaristas: 0
};

//functions and methods
function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
CoffeeShop.prototype.getRandomCustomer = function() {
  for (var j = 0; j < businessHours.length; j++) {
    this.hourlyCustomers.push(getRandomInclusive(this.minCustHr, this.maxCustHr));
  }
};
CoffeeShop.prototype.getCupsSold = function() {
  for (var k = 0; k < this.hourlyCustomers.length; k++) {
    this.hourlycutomers = this.hourlyCustomers[k];
    this.cupsSold.push((this.hourlyCustomers[k] * this.cupsCust));
  }
};
CoffeeShop.prototype.getToGoBeansSold = function() {
  for (var l = 0; l < this.hourlyCustomers.length; l++) {
    this.hourlycutomers = this.hourlyCustomers[l];
    this.toGoBeansSold.push((this.poundsCust * this.hourlyCustomers[l]));
  }
};
CoffeeShop.prototype.getBeansForCups = function() {
  for (var m = 0; m < this.cupsSold.length; m++) {
    this.beansForCups.push((this.cupsSold[m] / 16));
  }
};
CoffeeShop.prototype.getEmployeesPerHour = function() {
  for (var o = 0; o < this.hourlyCustomers.length; o++) {
    this.employeesPerHour.push(Math.ceil(this.cupsSold[o] / 30));
  }
};
//Methods for calculating totals
CoffeeShop.prototype.getTotalBeansForCups = function() {
  for (var q = 0; q < this.beansForCups.length; q++) {
    this.totalBeansForCups += (this.beansForCups[q]);
  }
};
CoffeeShop.prototype.getTotalToGoBeansSold = function() {
  for (var r = 0; r < this.toGoBeansSold.length; r++) {
    this.totalToGoBeansSold += (this.toGoBeansSold[r]);
  }
};
CoffeeShop.prototype.getTotalPoundsNeeded = function() {
  for (var s = 0; s < this.toGoBeansSold.length; s++) {
    this.totalPoundsNeeded = (this.totalBeansForCups + this.totalToGoBeansSold);
  }
};
CoffeeShop.prototype.getTotalHourlyPoundsNeeded = function() {
  for (var t = 0; t < this.beansForCups.length; t++) {
    this.totalHourlyPoundsNeeded[t] = (Math.round(this.beansForCups[t] + this.toGoBeansSold[t]) * 10) / 10;
  }
};

CoffeeShop.prototype.getTotalBaristasPerStore = function() {
  for (var s = 0; s < this.employeesPerHour.length; s++) {
    this.dailyBaristasNeeded += parseInt((this.employeesPerHour));
  }
};

CoffeeShop.prototype.doAllTheMethods = function() {
  this.getRandomCustomer();
  this.getCupsSold();
  this.getToGoBeansSold();
  this.getBeansForCups();
  this.getEmployeesPerHour();
  this.getTotalBaristasPerStore();
};

pikePlaceMarket.doAllTheMethods();
capitolHill.doAllTheMethods();
seattlePublicLibrary.doAllTheMethods();
southLakeUnion.doAllTheMethods();
seaTacAirport.doAllTheMethods();

CoffeeShop.prototype.getAllTheTotals = function() {
  this.getTotalBeansForCups();
  this.getTotalToGoBeansSold();
  this.getTotalPoundsNeeded();
  this.getTotalHourlyPoundsNeeded();
};
pikePlaceMarket.getAllTheTotals();
capitolHill.getAllTheTotals();
seattlePublicLibrary.getAllTheTotals();
southLakeUnion.getAllTheTotals();
seaTacAirport.getAllTheTotals();

//generate tables
//make h1 title row
function manifestTitle(textContent) {
  var coffeeTableDiv = document.getElementById('tableExtrapolatons');
  var title = document.createElement('h1');
  title.textContent = textContent;
  coffeeTableDiv.appendChild(title);
}

//create table element
function manifestTableFrame(tableId) {
  var coffeeTableDiv = document.getElementById('tableExtrapolatons');
  var table = document.createElement('table');
  table.id = tableId;
  coffeeTableDiv.appendChild(table);
}

//make table header
function manifestHeader(tableId, textContent) {
  var table = document.getElementById(tableId);
  var billboard = document.createElement('tr');
  billboard.id = 'billboard-header';
  table.appendChild(billboard);
  businessHours.unshift(textContent);
  businessHours.unshift('');
  for (index in businessHours) {
    digits = document.createElement('td');
    digits.textContent = businessHours[index];
    billboard.appendChild(digits);
  }
  businessHours.shift();
  businessHours.shift();
}

//insert coffee shop data
function manifestCoffeeProjections(tableId, object) {
  var table = document.getElementById(tableId);
  var row = document.createElement('tr');
  object.totalHourlyPoundsNeeded.unshift(Math.round(object.totalPoundsNeeded * 10) / 10);
  object.totalHourlyPoundsNeeded.unshift(object.name);

  for (var index = 0; index < object.totalHourlyPoundsNeeded.length; index++) {
    var cell = document.createElement('td');
    cell.textContent = object.totalHourlyPoundsNeeded[index];
    row.appendChild(cell);
    if (franchiseHourlyPounds.length <= index - 1) {
      franchiseHourlyPounds.push(0);
    }
    if (parseInt(index) > 0) {
      franchiseHourlyPounds[index - 1] += parseFloat(object.totalHourlyPoundsNeeded[index]);
    }
  }
  table.appendChild(row);
  object.totalHourlyPoundsNeeded.shift();
  object.totalHourlyPoundsNeeded.shift();
}

//bottom row with totals
function manifestCoffeeTotals() {
  var table = document.getElementById('coffee-table');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);
  for (var index in franchiseHourlyPounds) {
    cell = document.createElement('td');
    cell.textContent = Math.round(franchiseHourlyPounds[index] * 10) / 10;
    row.appendChild(cell);
  }
  table.appendChild(row);
  franchiseHourlyPounds.shift();
}

//labor data
function manifestBaristaRow(tableId, object) {
  var table = document.getElementById(tableId);
  var row = document.createElement('tr');
  object.employeesPerHour.unshift(Math.ceil(object.dailyBaristasNeeded));
  object.employeesPerHour.unshift(object.name);
  for (var index in object.employeesPerHour) {
    cell = document.createElement('td');
    cell.textContent = object.employeesPerHour[index];
    row.appendChild(cell);
  }
  table.appendChild(row);
  if (franchiseHourlyEmployeesArrayGlobal.length <= index - 1) {
        franchiseHourlyEmployeesArrayGlobal.push(0);
      if (parseInt(index) > 0) {
        franchiseHourlyEmployeesArrayGlobal[index - 1] += parseFloat(object.employeesPerHour[index]);
      }
    }
    table.appendChild(row);
    object.employeesPerHour.shift();
    object.employeesPerHour.shift();
  }

//generate the coffee-table
function manifestCoffeeTable() {
  manifestTitle('Minimum Stock Requirements by Kiosk');
  manifestTableFrame('coffee-table');
  manifestHeader('coffee-table', 'Daily Totals:');
  for (var index in allItems) {
    manifestCoffeeProjections('coffee-table', allItems[index]);
  }
  manifestCoffeeTotals();
}

//generate staffing table
function manifestStaffingTable() {
  manifestTitle('Daily Staffing Requirements by Kiosk');
  manifestTableFrame('staffing-table');
  manifestHeader('staffing-table', 'Totals');
  for (var index in allItems) {
    manifestBaristaRow('staffing-table', allItems[index]);
  }
  createEmployTotalsRow();
}
manifestCoffeeTable();
manifestStaffingTable();

function createEmployTotalsRow() {
  var table = document.getElementById('staffing-table');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = franchiseDailyBaristas;
  row.appendChild(cell);
  table.appendChild(row);
  franchiseHourlyEmployeesArrayGlobal.shift();
}




//reset tables on demand
// function clearForm() {
//   event.target.kioskName.value = '';
//   event.target.minCust.value = null;
//   event.target.maxCust.value = null;
//   event.target.cupsPer.value = null;
//   event.target.poundsPer.value = null;
// }
//
// function resetTable() {
//   var coffeeTableDiv = document.getElementById('tableExtrapolatons');
//   coffeeTableDiv.innerHTML = '';
// }

//Everything below this line is written exactly from starter code.
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);

  var name = event.target.name.value;
  var price = parseFloat(event.target.price.value);

  var newCoffeeShop = new CoffeeShop(name, price);
  newItem.doAllTheMethods();

  makeItemRow(newCoffeeSHop);
  tfoot.innerHTML = '';
  makeTotalRow();
  event.target.name.value = '';
  event.target.price,value = null;
}

form.addEventListener('submit', handleFormSubmit);
button.addEventListener('click', handleButtonClick);
