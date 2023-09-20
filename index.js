// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers() {
  return drivers.slice(0, 2); // slice method returns a new array with the elements from index zero to one less than the secondreturn
}

function returnLastTwoDrivers() {
  return drivers.slice(-2); // slice method returns a new array with the elements from index -1 to n-1, where n
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return (fare) => {
    return fare * int;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, functionReturnDrivers) => {
  if (functionReturnDrivers === returnFirstTwoDrivers) {
    return arrayOfDrivers.slice(0, 2);
  }
  return arrayOfDrivers.slice(-2);
};
