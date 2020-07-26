const visitorList = document.querySelector('#visitor-list');

//setup list
const setupList = (data) => {
	let html = '';	
	if (data.length){
		data.forEach(doc => {
			const visitor = doc.data();
			const template = `
				<div>
					<p>${visitor.full_name} visited at ${visitor.date}.</p>
					<p>Contact number: ${visitor.contact}</p>
				</div>
			`;
			html += template;
		});
		visitorList.innerHTML = html;
	}else{
		visitorList.innerHTML = '<p>Login to view records.</p>'
	}
}