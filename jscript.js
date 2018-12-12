$(document).ready(function(){
	var numOfSites = 0;

	function checkWidth(){
		var holderHeight = 0;
		holderHeight = 316 * (Math.ceil(numOfSites/Math.round($("#mySites").width()/$("#mySites").children(0).width())));
		$("#mySites").height(holderHeight);
	}

    $.getJSON("data.js", function(works){
        $.each(works,function(work,projects){
        	$.each(projects,function(i,project){
        		var projectName = project.name;
        		var projectDomain = project.domain;
        		var projectWp = project.wp;
        		var projectEc = project.ec;
        		var projectCt = project.ct;
        		var projectTt = project.tt;
        		var projectNsfw = project.nsfw;
        		if (projectName&&projectDomain) {
					if (projectName.length>=15) {
						projectName = projectName.substring(0, 15)+"...";
					}
					numOfSites++;
					var template = [
					'<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">',
						'<div class="browserFrame">',
							'<div class="titlebar">',
								'<h4 class="titleDisplay">',
								'<i class="fab fa-chrome">',
								'</i>&nbsp;'+projectName+'&nbsp;',
								'<i class="fas fa-times"></i>',
								'</h4>',
								'<i class="fas fa-times"></i>',
								'<i class="far fa-square"></i>',
								'<i class="fas fa-minus"></i>',
							'</div>',
							'<div class="addressbar">',
								'<i class="fas fa-arrow-left"></i>&nbsp;',
								'<i class="fas fa-arrow-right"></i>&nbsp;',
								'<i class="fas fa-sync"></i>&nbsp;',
								'<h5 class="addressArea">',
								'http://'+projectDomain+'/',
								'</h5>&nbsp;&nbsp;',
								'<i class="fas fa-ellipsis-v"></i>',
							'</div>',
							'<div class="contentArea">',
								'<img src="./img/thumbnail/'+projectName+'.JPG">',
							'</div>',
						'</div>',
					'</div>'
					].join("\n");
					$("#mySites").append(template);
        		}
        	});
        });
        checkWidth();
    });

	$(window).resize(checkWidth);

	window.onscroll = function(){stickCheck()};
	var menuBar = document.getElementsByClassName("header");
	var sticky = menuBar[0].offsetTop;
	function stickCheck(){
		if (window.pageYOffset >= sticky) {
			menuBar[0].classList.add("sticky");
		}else{
			menuBar[0].classList.remove("sticky");
		}
	}
});
