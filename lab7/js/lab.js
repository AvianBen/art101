/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/

function sortUserName() {
  let userName = window.prompt("Hey there! Can I have your name so I can fix it?");

  //split string into char array
  let nameArray = userName.split('');
  //sort array
  let nameArraySort = nameArray.sort();
  //join array back to a string
  let nameSorted = nameArraySort.join('');
  return nameSorted;
}

  //Output
  document.writeln("Bam. Your fixed name is ", sortUserName(), "</br>");
