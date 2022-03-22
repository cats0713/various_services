window.onload = () => {
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
	const seat = document.querySelectorAll('.seat');
	const geticket = document.querySelector('#geticket');
	let userDataArray = [];

	let newUrl = window.location.search;
	let RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;

	userDataArray = newUrl.match(RegExp);
	for(let i =0; i<userDataArray.length; i++){
		userDataArray[i] = userDataArray[i].replace('=','');
	}

	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
	};
	init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

	$(document).on({
		click: (e) => {
			switch (e.target.className) {
				case 'seat':
					break;
			}
		}
	});

	seat.forEach((value, index, array) => {
		value.addEventListener('click', (e) => {
			e.target.classList.toggle('check');
			console.log(e.target);
		});
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});

	geticket.addEventListener("click", () => {
		location.href = `${window.location.pathname}?page=40&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}`;
	});
}