//date = mm dd aaaa
var date = new Date("august-8-2022");
var now = new Date();
const weekDays = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday"
};
const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};
console.log("Date: "+date);
console.log("Week day "+ weekDays[date.getDay()]);
console.log("Day "+parseInt(date.toString().split(" ")[2]));
console.log("Month "+months[date.getMonth()]);
console.log("Year "+date.getFullYear());