/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.strava.com/api/v3/athletes/786332?access_token=c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3",
        "method": "GET",
        "dateType": "jsonp",
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});