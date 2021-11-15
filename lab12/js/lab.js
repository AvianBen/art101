/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/
function sortingHat(str){
  let l = str.length;
  let mod = l % 4;
   if (mod == 0){
     return "Gryffindor";
   }
   else if (mod == 1){
     return "Ravenclaw";
   }
   else if (mod == 2){
     return "Slytherin";
   }
   else if (mod == 3){
     return "Hufflepuff";
   }
 }

let myButton = $("#button");
myButton.click(function(){
  let name = $("#input").val();
  let house = sortingHat(name);
  let newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  $("#output").html(newText);
});
