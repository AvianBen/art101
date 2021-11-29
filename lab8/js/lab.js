/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: November 3rd 2021
* License: Public Domain
**/

let nums = [1,4,5,8,12,26,200,1001];
console.log("My array of nums: ", nums);

//squares any number put into function
function numSquared(x){
    let results = x * x;
    return results;
}

//test numsSquared
console.log("Square this: ", nums[2], "\n", numSquared(nums[2]));
console.log("Square this: ", nums[6], "\n", numSquared(nums[6]));

let result = nums.map(numSquared);
//return all of the numbers in the array squared
console.log("The array of nums squared: ", result);

let results = nums.map(function(x){
    return x - 5;
});

//should return all of the numbers in the array minus five
console.log("The array of nums minus five: ", results);

//get location of output in HTML and create mapResults
mapResults = "Original Array: " + nums + "<br><br>" + "Squared Array: " + result + "<br><br>" + "Original Array minus 5: " + results + "<br><br>";

console.log(mapResults);

let outputEl = document.getElementById("output");

outputEl.innerHTML = mapResults;
