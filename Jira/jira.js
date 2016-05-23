$(document).ready(function () {

    //    $.ajax({
    //        type: 'get',
    //        dataType: 'json',
    //        url: 'https://bluesombrero.atlassian.net/jira/rest/api/2/search?jql=asignee=rudy.caveda',
    //        username: 'rudy.caveda',
    //        password: 'Snare7192', 
    //        xhrFields: { withCredentials: true },
    //        success: function (data, response) {
    //            console.log(response);
    //            console.log(data);
    //        },
    //        error: function (response) {
    //            console.log('Uh Oh!');
    //            console.log(response);
    //        }
    //    });

    var data = "\t{ \"username\": \"rudy.caveda\", \"password\": \"Snare7192\" }";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://bluesombrero.atlassian.net/rest/agile/1.0/issue/BWA-6507");
    xhr.setRequestHeader("authorization", "Basic cnVkeS5jYXZlZGE6U25hcmU3MTky");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "7650b764-4584-292c-cc08-e6c3b1ebf476");

    xhr.send(data);
});
