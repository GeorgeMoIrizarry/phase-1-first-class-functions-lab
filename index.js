// Code your solution in this file!
const returnFirstTwoDrivers = function (firstTwo) {
    return firstTwo.slice(0, 2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnLastTwoDrivers = function (lastTwo) {
    return lastTwo.slice(-2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier (a) {
    function fareMultiplier (b) {
       return a * b
    }
    return fareMultiplier
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(names, twoDriverFuncs) {
    return twoDriverFuncs(names)
}