$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,projects){
            	var $template = document.getElementsByTagName("template")[0];
            	var tempContent = $template.prop('content');
            	$.each(projects,function(i,project){
            		var currentSites = document.importNode(tempContent,true);

            	});
            	$("#mySites").append(currentSites);
            });
        });
    });
});
