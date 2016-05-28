window.addEventListener('load', requestInfo);

function requestInfo() {
	var spFirstName = document.getElementById('first_name');
	var spLastName = document.getElementById('last_name');
	var spCity = document.getElementById('city');
	var spAddress = document.getElementById('address');
	var spPhone = document.getElementById('phone');
	var spEmail = document.getElementById('email');
	var url ="http://www.filltext.com/?rows=1&first_name={firstName}&last_name={lastName}&city={city}&address={streetAddress}&phone={phone|format}&email={email}";
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = loadInfo;
	httpRequest.open('GET', url);
	httpRequest.send();
	
	function loadInfo() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
			var data = JSON.parse(httpRequest.responseText);
				spFirstName.innerHTML = data[0].first_name;
				spLastName.innerHTML = data[0].last_name;
				spCity.innerHTML = data[0].city;
				spAddress.innerHTML = data[0].address;
				spPhone.innerHTML = data[0].phone;
				spEmail.innerHTML = data[0].email;
			}
		}
	}
}