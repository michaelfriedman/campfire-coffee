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
