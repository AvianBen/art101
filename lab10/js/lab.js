/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: November 3rd 2021
* License: Public Domain
**/

  //Output

  document.getElementById("button").addEventListener("click", function(){
    let userName = document.getElementById("user-name").value;
    console.log(userName);

    //split string into char array
    let nameArray = userName.split('');

    for(let i = nameArray.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i+1));
      let temp = nameArray[i];
      nameArray[i] = nameArray[x];
      nameArray[x] = temp;
    }

    let nameUnsorted = nameArray.join("");

    document.getElementById("output1").innerHTML = "Your name unsorted: " + nameUnsorted;
  });

  document.getElementById("button").addEventListener("click", function(){
    let userName = document.getElementById("user-name2").value;
    console.log(userName);

    //split string into char array
    let nameArray = userName.split('');
    //sort array
    let nameArraySort = nameArray.sort();
    //join array back to a string
    let nameSorted = nameArraySort.join('');

    document.getElementById("output2").innerHTML = "Your friend's name sorted: " + nameSorted;
  });

  document.getElementById("button").addEventListener("click", function(){
    let userName = document.getElementById("user-name3").value;
    console.log(userName);

    //split string into char array
    let nameArray = userName.split('');
    //sort array
    let nameArraySort = nameArray.sort();
    //join array back to a string
    let nameSorted = nameArraySort.join('');

    document.getElementById("output3").innerHTML = "Your mom's name sorted: " + nameSorted;
  });

  document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("content").style.color = "blue";

  });

  document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("content").style.fontVariant = "small-caps";

  });

  setTimeout(function(){
  document.getElementById("content").style.fontSize = "x-large";
}, 3000);
