$(document).ready(function() {

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'https://bluesombrero.atlassian.net/jira/rest/api/2/search?jql=asignee=rudy.caveda',
        username: 'rudy.caveda',
        password: 'Snare7192', 
        xhrFields: { withCredentials: true },
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
