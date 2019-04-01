// Code your solution in this file!
function logDriverNames(drivers) {
  for (driver of drivers) {
  console.log(driver.name)
  }
}

function logDriversByHometown(drivers, location) {
  for (driver of drivers) {
    if (driver.hometown === location) {
    console.log(driver.name)
    }
  }
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  const numberSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };
   
  return newDrivers.sort(numberSorter);
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  const nameSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
   
  return newDrivers.sort(nameSorter);
}

function totalRevenue(drivers) {
  const summer = function (agg, driver) {
    console.log(agg + driver.revenue)
    return agg + driver.revenue;
  };
   
  return drivers.reduce(summer, 0);
}

function averageRevenue(drivers) {
  const summer = function (agg, driver) {
    return agg + driver.revenue;
  };
   
  return drivers.reduce(summer, 0)/drivers.length;
}

