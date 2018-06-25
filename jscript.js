$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,project){
            	alert(project.name + project.domain);
            });
        });
    });
});
