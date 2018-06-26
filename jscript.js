$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,projects){
            	console.log(projects);
            	$.each(projects,function(i,project){
            		console.log(project);
            		alert(project.name);
            	});
            });
        });
    });
});
