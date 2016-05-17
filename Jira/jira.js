$(document).ready(function () {

    $.ajax({
        type: "get",
        dataType: "json",
        url: "https://rudy.caveda:Snare7192@bluesombrero.atlassian.net/jira/rest/api/2/search?jql=asignee=rudy.caveda",
        success: function (data, response) {
            console.log(response);
            console.log(data);
        },
        error: function (response) {
            console.log('Uh Oh!');
            console.log(response);
        }
    });
});
