//vars and conversor objects
var now = new Date();
var curMonthObject;
const docMonthDays = document.getElementById("month_days-values");
const docMonthText = document.getElementById("month-text");
const docMonthYear = document.getElementById("year-text");
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
const KNDweeks = {
  1: {
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
  2: {
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
  3: {
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
};
const dayPrototype = function(date, KNDWeek){
  let weekDay = weekDays[date.getDay()];
  let KNDday = KNDweeks[KNDWeek][weekDay];
  this.date = date;
  this.day = parseInt(date.toString().split(" ")[2]);
  this.KNDWeek = KNDWeek;
  this.weekDay = weekDay;
  if(KNDday){
    this.teams = KNDday.teams;
    this.place = KNDday.place;
  }else{
    this.teams = null;
    this.place = null;
  }
}
const monthPrototype = function(date){
  this.name = months[date.getMonth()];
  this.year = date.getFullYear();
  this.days = setMonthDays(date);
};

//testing with dates
function onload(){
  console.log("Date: "+now);
  console.log("Week day "+ weekDays[now.getDay()]);
  console.log("Day "+parseInt(now.toString().split(" ")[2]));
  console.log("Month "+months[now.getMonth()]);
  console.log("Year "+now.getFullYear());
  setObjectMonth(now);
  drawMonth();
}

/*functions*/
function daysDiff(date, date2=referenceDay){
  //Days difference from referenceday
  let curDate = new Date(date.getFullYear(),date.getMonth(),parseInt(date.toString().split(" ")[2]));
  return (curDate-date2)/86400000;
}
function getKNDWeek(date){
  let days = daysDiff(date);
  if(days >= 0){
    let weekDiff = Math.floor(days/7);
    return weekDiff%3 >0 ? weekDiff%3 : 3;
  }else{
    let weekDiff = Math.floor((Math.abs(days)+6)/7);
    return (3-weekDiff%3);
  }
}
function setObjectMonth(date){
  curMonthObject = new monthPrototype(date);
}
function setDay(date){
  let curKNDWeek = getKNDWeek(date);
  let newDay = new dayPrototype(date,curKNDWeek);
  return newDay;
}
function setMonthDays(date){
  let days = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
  console.log("setting "+days+" days");
  
  let month = date.getMonth();
  console.log("for the "+months[month]+" month");

  let year = date.getFullYear();
  console.log("on the "+(year)+" year");

  let daysArray=[];
  for(let i=1;i<=days;i++){
    let curDate = new Date(date.getFullYear(),date.getMonth(),i);
    let newDay = setDay(curDate);
    daysArray.push(newDay);
  }
  return daysArray;
}
function drawMonth(){
  docMonthText.innerHTML = curMonthObject.name;
  docMonthYear.innerHTML = curMonthObject.year;
  docMonthDays.innerHTML="";
  curMonthObject.days.forEach((day)=>{
    docMonthDays.innerHTML+= getDrawDay(day);
  });
}
function getDrawDay(day){
  let today = daysDiff(now, day.date)==0?"today":"";
  let teamsStr ="";
  if(day.teams){
    let teams = day.teams.forEach((team)=>{
      let str = `
      <span class="category-${team}">${team}</span>
      `;
      teamsStr+=str;
    });
  }
  let str = `
  <li class="is-${day.weekDay} ${today}">
    <p id="day-${day.day}">${day.day}</p>
    <div class="teams">
    ${teamsStr}
    </div>
  </li>
  `;
  return str;
}

/*onload function*/
window.onload();