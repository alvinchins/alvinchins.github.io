$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(result){
            $.each(result, function(i, field){
                $(".footer").append(field + " ");
            });
        });
    });
});
