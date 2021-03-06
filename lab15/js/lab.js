/**
* Author: Ben Chavez <berchave@ucsc.edu>
* Created: October 25th 2021
* License: Public Domain
**/
var catURL = "https://cataas.com/cat?json=true";

$("#activate").click(callAjax);

function callAjax() {
// Using the core $.ajax() method
  $.ajax({
      url: catURL,

      type: "GET",

      dataType : "json",
    })
    .done(function(data) {
      var imgUrl = "https://cataas.com" + data.url;
      var imgTag = "<img src=" + imgUrl + ">";
      $("#output").html(imgTag);

    })
      // What we do if the api call fails
    .fail(function(request,error){
        console.log(request, error);
    })
}
