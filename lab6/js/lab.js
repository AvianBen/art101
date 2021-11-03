/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: November 1st 2021
* License: Public Domain
**/

// Define Vars
myTransport = ["legs", "bike", "car", "bus"];

myMainRide = {
  make: "GMC",
  model: "Terrain",
  color: "Black",
  year: 2011,
  age: function() {
    return 2021 - myMainRide.year;
  }
}

//Output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
