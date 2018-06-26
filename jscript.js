$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("data.js", function(works){
            $.each(works,function(work,projects){
            	var currentSites = document.createElement("div");
            	currentSites.setAttribute("class","row");
            	$.each(projects,function(i,project){
            		var siteWraper = document.createElement("div");
            		var siteTitle = document.createElement("h1");
            		siteTitle.innerHTML = project.name;
            		var siteDomain = document.createElement("h3");
            		siteDomain.innerHTML = project.domain;
            		siteWraper.appendChild(siteTitle);
            		siteWraper.appendChild(siteDomain);
            		currentSites.appendChild(siteWraper);
            	});
            	$("body").appendChild(currentSites);
            });
        });
    });
});
