/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

$(document).ready(function () {

  $.ajax({
  type: "get",
  dataType: "jsonp",
  url: "https://www.strava.com/api/v3/clubs/200696/activities?access_token=c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3",
  success: function(data, response) {
    console.log(response);
    console.log(data);
    $.each(data, function(i, e) {
      var riderImage = data[i].athlete.profile;
      var firstName = data[i].athlete.firstname;
      var lastName = data[i].athlete.lastname;
      var actType = data[i].type;
      var distance = data[i].distance;
      var convDist = distance * 0.000621371;
      var fixedDist = convDist.toFixed(1);
      var avgSpd = data[i].average_speed;
      var convSpd = avgSpd * 2.23694;
      var fixedSpd = convSpd.toFixed(1);
      var initDate = new Date(data[i].start_date);
      var day = initDate.getDate();
      var month = initDate.getMonth() + 1;
      var year = initDate.getFullYear();
      var stravaDate = month + "/" + day + "/" + year;
      var str = '<div class="activities"><img class="riderImage" src="'+ riderImage +  '"/><div class="riderInfo"><span class="riderName">' + firstName + ' ' + lastName + '</span><p>Activity Type: ' + actType + '</p><p>Date: ' + stravaDate + '</p><p>Distance: ' + fixedDist + ' mi</p><p>Avg Speed: ' + fixedSpd + ' mi/hr</p></div></div>';
      $('.stravaActivities').append(str);
    });
  },

  error: function(response) {
    console.log('Uh Oh!');
    console.log(response);
    $('.stravaActivities').append("NOTHING WORKS");
  }
});

});