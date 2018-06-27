$(document).ready(function(){
    $.getJSON("data.js", function(works){
        $.each(works,function(work,projects){
        	$.each(projects,function(i,project){
        		var template = [
				'<div class="col-md-4">',
					'<div class="browserFrame">',
						'<div class="titlebar">',
							'<h4 class="titleDisplay">',
							'<i class="fab fa-chrome">',
							'</i>&nbsp;'+project.name+'&nbsp;',
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
        		$("#mySitesWrap").css({
        			height:$("#mySites").height()
        		});
        	});
        });
    });
});
