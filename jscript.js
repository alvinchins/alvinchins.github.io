$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.works.sites, function(i,site){
            	alert(site.name);
            }
        });
    });
});
