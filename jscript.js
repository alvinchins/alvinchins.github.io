$(document).ready(function(){
	var numOfSites = 0;

    $.getJSON("data.js", function(works){
        $.each(works,function(work,projects){
        	$.each(projects,function(i,project){
        		var projectTitle = project.name;
        		if (projectTitle.length>=15) {
        			projectTitle = projectTitle.substring(0, 15)+"...";
        		}
        		numOfSites++;
        		var template = [
				'<div class="col-md-4">',
					'<div class="browserFrame">',
						'<div class="titlebar">',
							'<h4 class="titleDisplay">',
							'<i class="fab fa-chrome">',
							'</i>&nbsp;'+projectTitle+'&nbsp;',
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
							'http://'+project.domain+'/',
							'</h5>&nbsp;&nbsp;',
							'<i class="fas fa-ellipsis-v"></i>',
						'</div>',
						'<div class="contentArea">',
							'<img src="./img/thumbnail/'+project.name+'.JPG">',
						'</div>',
					'</div>',
				'</div>'
        		].join("\n");
        		$("#mySites").append(template);
        	});
        });
    });

    function checkWidth(){
		var holderHeight = 0;
		if ($(window).width() >= 768) {
			holderHeight = 316 * (Math.ceil(numOfSites/3));
		}else{
			holderHeight = 316 * numOfSites;
		}
		$("#mySites").height(holderHeight);
		console.log(holderHeight);
	}

	checkWidth();
	$(window).resize(checkWidth);
});
