$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
        	console.log(works);
            $.each(works,function(work,project){
            	console.log(work);
            	console.log(project);
            	console.log(project.name);
            });
        });
    });
});
