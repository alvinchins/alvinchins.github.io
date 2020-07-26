$(document).ready(function(){

	// Setup firebase db
	var db = firebase.firestore();
	db.collection("visitors").get().then(function(querySnapshot){
		querySnapshot.forEach(function(visitors){
			var doc = visitors.data();
			var fullName = doc.full_name;
			var contact = doc.contact;
			var time = doc.date;
			if (fullName) {
				var template = [
				'<div class="row">',
				'<div class="col-sm-12">',fullName,' Visit at ',time,'</div>',
				'<div class="col-sm-12">Contact Number: ',contact,'</div>',
				'</div>'
				].join("\n");
				$("#myVisitors").append(template);
			}
		});
	});

	setTimeout(function(){
        $('#loader-wrapper').fadeOut();
        $('.header').fadeIn();
    }, 1000);
});
