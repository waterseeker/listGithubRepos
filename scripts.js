$('document').ready(function() {
    const endpoint = 'https://api.github.com/users/waterseeker/repos';
    const repos = [];

   $('button').one('click', function() {
       $.get(endpoint, function(data) {
           repos.push(...data);
           console.log(repos);
           for(var i = 0; i < repos.length; i++) {
               $('#myRepos').append(
                   `<li><a href="${repos[i].html_url}" target="_blank">
                    ${repos[i].name}</a></li>`
               );
           }
        }).fail(function() {
            alert('Error! Could not load repositories');
        });
    });
});
