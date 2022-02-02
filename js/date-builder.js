"use strict";

//https://stackoverflow.com/questions/10032456/how-to-get-next-seven-days-from-x-and-format-in-js
function GetDates(startDate, daysToAdd) {
    let aryDates = [];
    // i = 0 includes today
    for (let i = 1; i <= daysToAdd; i++) {
        let currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        // Array of days only
        aryDates.push(DayAsString(currentDate.getDay()));
        // Original
        /*        aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());*/
    }

    return aryDates;
}

function MonthAsString(monthIndex) {
    let d = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    let weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";

    return weekdays[dayIndex];
}

// Today
let startDate = new Date();
// Next 5 days
let aryDates = GetDates(startDate, 5);
console.log(aryDates);

