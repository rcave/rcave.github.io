/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.strava.com/api/v3/athletes/786332",
  "method": "GET",
  "headers": {
    "authorization": "Bearer c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3",
    "cache-control": "no-cache",
    "postman-token": "b6d237e9-ee6a-7ced-bd6d-55340875b7b7"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});