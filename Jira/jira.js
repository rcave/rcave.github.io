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


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://rudy.caveda:Snare7192@bluesombrero.atlassian.net/rest/agile/1.0/issue/BWA-6507");
    xhr.send();
    console.log(xhr.responseText);
});
