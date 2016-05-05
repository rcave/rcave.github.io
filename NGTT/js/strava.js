/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

$(document).ready(function() {

  $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://www.strava.com/api/v3/athletes/786332?access_token=c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3",
    success: function(data, response) {
      console.log(response);
      console.log(data);
      $('.riderId').append(data.id);
      $('.fn').append(data.firstname);
      $('.ln').append(data.lastname);
      $('.riderProfile img').attr('src', data.profile);
    },
    error: function(response) {
      console.log('Uh Oh!');
      console.log(response);

    }
  });
  
  $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://www.strava.com/api/v3/athletes/786332/stats?access_token=c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3",
    success: function(data, response) {
      console.log(response);
      console.log(data);
      $('.ytdCount span').append(data.ytd_ride_totals.count);
      var ytdDistance = data.ytd_ride_totals.distance * 0.000621371;
      var fixed = ytdDistance.toFixed(1);
      $('.ytdDistance span').append(fixed);

    },
    error: function(response) {
      console.log('Uh Oh!');
      console.log(response);

    }
  });

});