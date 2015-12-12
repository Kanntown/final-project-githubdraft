/* function init () {
  var mapOptions = {
    center: new google.maps.LatLng(25.8042441,-80.19891860000001),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}


function loadScript () {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript; */
/*
$(document).ready(function(){

  $("svg").attr("style", "height: " + window.innerHeight);

  var euro = "euro";

    // display all European Union nations
    $("#euro").hover(function() {
      // mouseenter


})
*/
//click function
$("svg .food").click(function(){
    alert("The image was clicked.");
});
