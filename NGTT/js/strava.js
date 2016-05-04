/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://www.strava.com/api/v3/athletes/786332");
xhr.setRequestHeader("authorization", "Bearer c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "eed0ae1a-2cdf-71b8-3968-39f90ec96051");

xhr.send(data);