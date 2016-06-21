//variables
var businessHours = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
var stores = []
var allItems = [];
var franchiseTotalLbs = 0;

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
  allItems.push(this);
  stores.push(this.name);
}
//objects
var pikePlaceMarket = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
var seattlePublicLibrary = new CoffeeShop('Seattle Public Libray', 9, 45, 2.6, 0.02);
var southLakeUnion = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
var seaTacAirport = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);
//functions and methods
function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//methods
CoffeeShop.prototype.getRandomCustomer = function() {
  for (var j = 0; j < businessHours.length; j++) {
    this.hourlyCustomers.push(getRandomInclusive(this.minCustHr, this.maxCustHr));
  }
};
CoffeeShop.prototype.getCupsSold = function () {
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
CoffeeShop.prototype.getTotalBeansForCups = function () {
  for (var q = 0; q < this.beansForCups.length; q++) {
    this.totalBeansForCups += (this.beansForCups[q]);
  }
};
CoffeeShop.prototype.getTotalToGoBeansSold = function () {
  for (var r = 0; r < this.toGoBeansSold.length; r++) {
    this.totalToGoBeansSold += (this.toGoBeansSold[r]);
  }
};
CoffeeShop.prototype.getTotalPoundsNeeded = function () {
  for (var s = 0; s < this.toGoBeansSold.length; s++) {
    this.totalPoundsNeeded = (this.totalBeansForCups + this.totalToGoBeansSold);
  }
};
CoffeeShop.prototype.getTotalHourlyPoundsNeeded = function() {
  for (var t = 0; t < this.beansForCups.length; t++) {
    this.totalHourlyPoundsNeeded[t] = (parseFloat(this.beansForCups[t] + this.toGoBeansSold[t]));
  }
};
CoffeeShop.prototype.doAllTheMethods = function() {
  this.getRandomCustomer();
  this.getCupsSold();
  this.getToGoBeansSold();
  this.getBeansForCups();
  this.getEmployeesPerHour();
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
    coffeeTable.appendChild(title);
  }
//create table element
function manifestTable(tableId) {
  var coffeeTableDiv = document.getElementById('tableExtrapolatons');
  var table = document.createELement('table');
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
  for (var index in object.totalHourlyPoundsNeeded) {
    var cell = document.createElement('td');
    cell.textContent = object.totalHourlyPoundsNeeded[index];
    row.appendChild(cell);
  }
  table.appendChild(row);
  object.totalHourlyPoundsNeeded.shift();
  object.totalHourlyPoundsNeeded.shift();
}
//bottom row with totals
function manifestTotals() {
  var table = document.getElementById('coffeeTable')
  var row = document.createElement('tr')
  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);
}
table.appendChild(row);
allStoresHourlyPounds.shift();
