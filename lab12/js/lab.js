/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/
function sortingHat(str){
  let l = str.length;
  let houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff", "Mikusans"];
  let mod = (l % houses.length) - 1;
  let house = houses[mod];
  return house;
}


let myButton = $("#button");
myButton.click(function(){
  let name = $("#input").val();
  let house = sortingHat(name);

  let description0 = "You are one of the brave, keep true to the path.";
  let description1 = "Your intelligence has driven you here in search of even more knowledge, best of luck.";
  let description2 = "You're cunning, and you're prepared to do what it takes in order to succeed.";
  let description3 = "Your hard work and loyalty knows no bounds, the ideals of a true hero.";
  let description4 = "You're quite a strange one, good luck.";
  houseD = ""
  if (house == "Gryffindor") {
     houseD = description0;
  }
  else if (house == "Ravenclaw") {
     houseD = description1;
  }
  else if (house == "Slytherin") {
     houseD = description2;
  }
  else if (house == "Hufflepuff") {
     houseD = description3;
  }
  else if (house == "Mikusans") {
     houseD = description4;
  }

  let newText = "<p>The Sorting Hat has sorted you into " + house + "<br> <br>" + houseD + "</p>";
  $("#output").html(newText);
});
