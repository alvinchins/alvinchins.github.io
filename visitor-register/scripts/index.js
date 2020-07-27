const visitorList = document.querySelector('#visitor-list');

//setup list
const setupList = (data) => {
	let html = '';
	if (data.length){
		let counter = data.length;
		data.forEach(doc => {
			const visitor = doc.data();
			const template = `
				<div class="record-item">
					<p>#${counter} - ${visitor.first_name} ${visitor.last_name} visited at ${visitor.date}</p>
					<p>Contact number: ${visitor.contact}</p>
				</div>
			`;
			html += template;
			counter -= 1;
		});
		visitorList.innerHTML = html;
	}else{
		visitorList.innerHTML = '<p>Login to view records.</p>'
	}
}