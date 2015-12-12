/* Contact form script on about page */

function postToGoogle () {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var city = $("#city").val();
  var email = $("#email").val();

  $.ajax({
    url: "https://docs.google.com/forms/d/1obo-iqIwDah27yHg8rJ49OiJIty7oLvVLwbbX_ouixU/formResponse",
    data: { "entry_1646104219": firstName,
    "entry_831410926": lastName,
    "entry_1209985360": city,
    "entry_1789308797": email
    },
    type: "POST",
    dataType: "json",
    statusCode: {
      0: function() {
        window.location.replace("thank-you.html");
      },
      200: function() {
        window.location.replace("thank-you.html");
      }
    }
  });
}

$(document).ready(function() {
    $("#submit").click(function() {
      event.preventDefault();
      postToGoogle();
    })
})


/* calendar page

var calendar = {

  artWalk: {
    title: "Wynwood Art Walk",
    date: "01/09/2016",
    location: "Wynwood",
    start: '18:00',
    end: '00:00',
    cost: false,
    summary: "Occurs the second Saturday of every month, Art walk is an event that ____."
  }
  tacoTuesday: {
    date:
  }

}
*/

/*for an item in the object calendar, display the object if matches today's date

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()]; */



/* to style google map */



/* image hover feature */
