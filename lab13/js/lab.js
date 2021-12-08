/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/
$("#button").click(function(){
  for (var i=0; i <=200; i++) {
    var output = "";
    var fizz = "fizz";
    var buzz = "buzz";
    var boom = "boom";
    if (i % 3 == 0){
      output += fizz
    }
    if (i % 5 == 0){
      output += buzz
    }
    if (i % 7 == 0){
      output += boom
    }
    $("#output").append("<p>" + i + ":" +  output + "</p>");
  }
});
