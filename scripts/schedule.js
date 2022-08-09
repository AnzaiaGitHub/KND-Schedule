//vars and conversor objects
var now = new Date();
var curMonth;
const referenceDay = new Date(2022,7,7); //Aug 7 2022
const referenceKNDWeek = 3;
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
const KNDweeks = [
  {
    week: 1,
    monday: {
      teams: ["K","F","F"],
      place: "Farallones"
    },
    tuesday: {
      teams: ["K","A","A"],
      place: "Buenos Aires"
    },
    wednesday: {
      teams: ["K","M","M"],
      place: "Farallones"
    },
    thursday: {
      teams: ["A","A","A"],
      place: "Buenos Aires"
    },
    friday: {
      teams: ["K","F","M"],
      place: "Farallones"
    },
    saturday: {
      teams:["K"],
      place: "Farallones"
    }
  },
  {
    week: 2,
    monday: {
      teams: ["K","M","M"],
      place: "Farallones"
    },
    tuesday: {
      teams: ["K","A","A"],
      place: "Buenos Aires"
    },
    wednesday: {
      teams: ["K","F","M"],
      place: "Farallones"
    },
    thursday: {
      teams: ["A","A","A"],
      place: "Buenos Aires"
    },
    friday: {
      teams: ["K","F","F"],
      place: "Farallones"
    },
    saturday: {
      teams:["K"],
      place: "Farallones"
    }
  },
  {
    week: 3,
    monday: {
      teams: ["K","F","F"],
      place: "Farallones"
    },
    tuesday: {
      teams: ["K","A","A"],
      place: "Buenos Aires"
    },
    wednesday: {
      teams: ["K","F","M"],
      place: "Farallones"
    },
    thursday: {
      teams: ["A","A","A"],
      place: "Buenos Aires"
    },
    friday: {
      teams: ["K","M","M"],
      place: "Farallones"
    },
    saturday: {
      teams:["K"],
      place: "Farallones"
    }
  },
];
const dayPrototype = function(date, teams, place, KNDWeek){
  let month = date.getMonth+1;
  
  this.date = new Date()
  this.day = parseInt(date.toString().split(" ")[2]);
  this.KNDWeek = KNDWeek;
  this.weekDay = date.getDay();
  this.time1 = teams[0];
  this.time2 = teams[1];
  this.place = place;
}
const monthPrototype = function(date){
  this.name = months[date.getMonth()];
  this.year = date.getFullYear();
  this.days = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
};

//testing with dates
console.log("Date: "+now);
console.log("Week day "+ weekDays[now.getDay()]);
console.log("Day "+parseInt(now.toString().split(" ")[2]));
console.log("Month "+months[now.getMonth()]);
console.log("Year "+now.getFullYear());

/*functions*/
function daysDiff(date){
  //Days difference from referenceday
  let curDate = new Date(date.getFullYear(),date.getMonth(),parseInt(date.toString().split(" ")[2]));
  return (curDate-referenceDay)/86400000;
}
function getKNDWeek(date){
  let days = daysDiff(date);
  if(days >= 0){
    let weekDiff = Math.floor(days/7);
    return weekDiff%3 >0 ? weekDiff%3 : 3;
  }else{
    let weekDiff = Math.floor()
    return "negative days";
  }
}