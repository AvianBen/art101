/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/

//get div
let outputEl = document.getElementById("output");

//create newEl1 and append
let new1El = document.createTextNode("\nHello! I'm from javascript!");
outputEl.appendChild(new1El);

//create newEl2 and append
let new2El = document.createTextNode("\nWow! So am I!\n");
outputEl.appendChild(new2El);

//create newEl3 and append
let new3El = document.createTextNode("\nWoah! I'm at the top of the element!\n");
outputEl.insertBefore(new3El, outputEl.childNodes[0]);

//append URL
let new4El = document.createTextNode(String(document.URL));
outputEl.appendChild(new4El);

//append char set
let new5El = document.createTextNode(String(document.characterSet));
outputEl.appendChild(new5El);

//renames the node
document.renameNode(outputEl, null, "OUTPUTEL");

console.log(outputEl.childNodes);

//append to HTML
document.body.appendChild(outputEl);
