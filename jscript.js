$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,projects){
            	var template = document.getElementsByTagName("template")[0];
            	$.each(projects,function(i,project){
            		currentSites = document.importNode(template,true);
            		
            	});
            	$("#mySites").append(currentSites);
            });
        });
    });
});
