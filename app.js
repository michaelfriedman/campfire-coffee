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
