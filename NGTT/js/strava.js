/************************/
/*** STRAVA API CALLS ***/
/************************/

// athlete ID: 786332
// client ID: "9192"
// Client Secret: "9d563e863adc54e8e3d719aa78cb141cc3b068de"
// accessToken: "c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3"
console.log("Strava Script Loaded");

//var xhr = new XMLHttpRequest();


$.ajax({
    url: "https://www.strava.com/api/v3/athletes/786332",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "json"
    },
    success: function (response) {
        console.log(response); //server response
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer c0ed3db9c2a6ae04e3d23097d62735dba7bba1c3');
    },
});