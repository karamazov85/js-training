
// new Date() constructor 
let date = new Date() // gives date in this moment
console.log("DATE: ", date)

// DATA PASSED IN AS STRING:

let date2 = new Date("2021-01-05")
console.log("DATE 2: ", date2) // in node it will output 2021-01-05T00:00:00.000Z but in the browser, it will output Day Jan 05 2021 00:00:00 GMT+0000

// pass in addisional stuff in the string to specify time and timezone 

let date3 = new Date("2021-01-05T12:45Z") 
console.log("DATE 3: ", date3) // Tue Jan 05 2021 12:45:00 GMT+0000 (Greenwich Mean Time) - if Z is not included, it will return the local time of the browser's system.

// DATA PASSED IN AS PARAMS: 
let date4 = new Date(2021, 0, 5, 12, 45, 27)
console.log("DATE 4: ", date4) // DATE 4:  Tue Jan 05 2021 12:45:00 GMT+0000 (Greenwich Mean Time) 
// MOTHS ARE ZERO INDEXED. SO JAN is 0, Dec is 11 and so on. RETURNS LOCAL TIME. 

// DATA PASSED IN AS TIMESTAMP: passin epoch time in a new Date object
let date4b = new Date(1611227854902);
console.log("DATE 4b: ", date4b) // DATE 4b:  Thu Jan 21 2021 11:17:34 GMT+0000 (Greenwich Mean Time)


// STATIC METHODS - methods directly on Date object

// Date.Now() 
let timeNow = Date.now()
console.log("TIMENOW: ", timeNow) // 1611226904868 - RETURNS Unix epoch time, good for unique timestamps  

// Date.UTC() - RETURNS the date in UTC
let date5 = new Date(Date.UTC(2021, 0, 5, 12, 45, 27))
console.log("DATE 5: ", date5) // DATE 5:  Tue Jan 05 2021 12:45:27 GMT+0000 (Greenwich Mean Time)

// Date.parse() - parses a passed in string into a readable date format - DO NOT USE , BROWSER INCONSISTENCIES


// INSTANCE METHODS 

// get the day-part of the date as an integer. 
let date7 = date5.getDate();
console.log("DATE 7: ", date7) 

// gets the day of the week from the date as an integer 0-6 WHERE SUNDAY is 0!!! 
let date8 = date5.getDay();
console.log("DATE 8: ", date8) // 2 Tuesday (Sunday is 0)

let date9 = date5.getTime() // Returns epoch milliseconds for date instance 
console.log("DATE 9: ", date9) 

let newDate = new Date("2021-01-09T14:56:23")
newDate.toString()
// "Sat Jan 09 2021 14:56:23 GMT+0100 (Central European Standard Time)"
newDate.toDateString()
// "Sat Jan 09 2021"
newDate.toLocaleDateString()
// "1/9/2021"
newDate.toLocaleTimeString()
// "2:56:23 PM"
newDate.toLocaleString()
// "1/9/2021, 2:56:23 PM"
newDate.toGMTString()
// "Sat, 09 Jan 2021 13:56:23 GMT"
newDate.toUTCString()
// "Sat, 09 Jan 2021 13:56:23 GMT"
newDate.toISOString()
// "2021-01-09T13:56:23.000Z"
newDate.toTimeString()
// "14:56:23 GMT+0100 (Central European Standard Time)"
newDate.getTime()
// 1610200583000

// OTHER USEFUL STUFF

// destructure month, date and year from date
let [month, date10, year] = new Date().toLocaleDateString("en-US").split("/")
console.log(month, date10, year) // remember: Strings

// to measure the time it took something to finish

// with Date.now()
let start = Date.now()
// The event to time goes here:
doSomethingForALongTime()
let end = Date.now()
let elapsed = end - start // elapsed time in milliseconds


// Using instance methods
let start = new Date()
// The event to time goes here:
doSomethingForALongTime()
let end = new Date()
let elapsed = end.getTime() - start.getTime() // elapsed time in milliseconds

// then, translate this to seconds. We use Math.floor() becuase we need actually elapsed seconds (so we can't use Math.round() because it rounds to the nearest integer so it may round upwards) and we need it as an integer. 
let elapsedSeconds = Math.floor(elapsed / 1000)

// here is the generic form of this
let seconds = Math.floor(Date.now() / 1000)



