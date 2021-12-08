/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/
var comicURL = "https://xkcd.com/info.0.json";

$("#activate").click(callAjax);

function callAjax() {
// Using the core $.ajax() method
  $.ajax({
      url: comicURL,

      type: "GET",

      dataType : "json",

      crossDomain: true
    })
    .done(function(data) {
      var titleTxt = data.title;
      $("#title").html(titleTxt);
      var imgUrl = data.img;
      var imgTag = "<img src=" + imgUrl + ">";
      $("#comic").html(imgTag);

    })
      // What we do if the api call fails
    .fail(function(request,error){
        console.log(request, error);
    })
}
