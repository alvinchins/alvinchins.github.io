$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,projects){
            	var currentSites = document.getElementsByTagName("template")[0];
            	$.each(projects,function(i,project){
            		
            	});
            	$("#mySites").append(currentSites);
            });
        });
    });
});
