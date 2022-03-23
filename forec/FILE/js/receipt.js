window.onload = () => {
	const receiptBtn = document.querySelector("#receiptBtn");
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');

	const moviePersonnelText = document.querySelector("#moviePersonnelText");
	const movieSeatText = document.querySelector("#movieSeatText");
	const movieTheaterText = document.querySelector("#movieTheaterText");
	const showtimeText = document.querySelector("#showtimeText");
	const totalPriceText = document.querySelector("#totalPriceText");


	let newUrl = window.location.search;
	let RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;
	userDataArray = newUrl.match(RegExp);
	for (let i = 0; i < userDataArray.length; i++) {
		userDataArray[i] = userDataArray[i].replace('=', '');
	}

	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds
			}`;
	};

	init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

	let printReceipt = () => {
		let totalprice = (Number(userDataArray[4]) * 13000) +
											(Number(userDataArray[5]) * 10000) +
											(Number(userDataArray[6]) * 13000) +
											(Number(userDataArray[7]) * 9000);
		if (userDataArray[4] != 0) {
			moviePersonnelText.innerHTML += `성인${userDataArray[4]}명 `;
		}
		if (userDataArray[5] != 0) {
			moviePersonnelText.innerHTML += `청소년${userDataArray[5]}명 `;
		}
		if (userDataArray[6] != 0) {
			moviePersonnelText.innerHTML += `장애인${userDataArray[6]}명 `;
		}
		if (userDataArray[7] != 0) {
			moviePersonnelText.innerHTML += `노약자${userDataArray[7]}명 `;
		}
		movieSeatText.innerHTML = `${userDataArray[8]}`;
		movieTheaterText.innerHTML = `${userDataArray[3]}관`;
		showtimeText.innerHTML = `${userDataArray[2]}`; 
		totalPriceText.innerHTML = `총 ${totalprice.toLocaleString()}`;
	}
	printReceipt();

	receiptBtn.addEventListener("click",()=>{
		location.href = `${window.location.pathname}?page=50`;
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});



}