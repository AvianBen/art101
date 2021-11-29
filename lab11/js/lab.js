/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/

$(document).ready(function(){
  $("#challenge").append("<button id=challenges>Challenges</button>");
  $("#challenges").click(function(){
    $("#challenge").toggleClass("red");
  });

  $("#problem").append("<button id=problems>Problems</button>");
  $("#problems").click(function(){
    $("#problem").toggleClass("blue");
  });

  $("#result").append("<button id=results>Result</button>");
  $("#results").click(function(){
    $("#result").toggleClass("green");
  });

  $("#result").append("<button id=results2>Return</button>");
  $("#results2").click(function(){
    $("#result").toggleClass("black");
  });
})
