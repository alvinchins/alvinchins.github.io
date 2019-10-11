$(document).ready(function(){

	// Setup firebase db
	var db = firebase.firestore();
	db.collection("sites").get().then(function(querySnapshot){
		querySnapshot.forEach(function(site){
			var doc = site.data();
			var projectName = doc.name;
			var projectDomain = doc.domain;
			var projectWp = "";
			var projectEc = "";
			var projectCt = "";
			var projectTt = "";
			var projectNsfw = "";
			if (projectName&&projectDomain) {
				if (projectName.length>=15) {
					projectName = projectName.substring(0, 15)+"...";
				}
				if (doc.wordpress) {
					projectWp = '<span title="WordPress" class="b_wp"><p>WORDPRESS</p></span>';
				}
				if (doc.e_commerce) {
					projectEc = '<span title="E-Commerce" class="b_ec"><p>E-COMMERCE</p></span>';
				}
				if (doc.custom_theme) {
					projectCt = '<span title="Custom Theme" class="b_ct"><p>CUSTOM THEME</p></span>';
				}
				if (doc.theme_template) {
					projectTt = '<span title="Theme Template" class="b_tt"><p>THEME TEMPLATE</p></span>';
				}
				if (doc.nsfw) {
					projectNsfw = '<span title="Not Safe For Work" class="b_nsfw"><p>NOT SAFE FOR WORK</p></span>';
				}
				var template = [
				'<div class="col-md-12 col-lg-6">',
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
							'<a class="browserText" href="http://'+projectDomain+'/" target="_blank">',
							'http://'+projectDomain+'/',
							'</a>',
							'</h5>&nbsp;&nbsp;',
							'<i class="fas fa-ellipsis-v"></i>',
						'</div>',
						'<div class="contentArea itemframe">',
							'<div class="overlay">',
								'<div class="badges">',
									projectWp,
									projectEc,
									projectCt,
									projectTt,
									projectNsfw,
								'</div>',
							'</div>',
							'<div class="imageframe">',
								'<img src='+doc.thumbnail_url+'>',
							'</div>',
						'</div>',
					'</div>',
				'</div>'
				].join("\n");
				$("#mySites").append(template);
			}
		});
	});

	setTimeout(function(){
        $('#loader-wrapper').fadeOut();
        $('.header').fadeIn();
    }, 1000);
});
