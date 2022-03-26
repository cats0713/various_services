window.onload = () => {
	setInterval(()=>{
		let userCookie = document.cookie.split('=');
		// console.log("카운트가 진행되고 있습니다.");
		document.cookie = `userCookie=${Number(userCookie[1])-1}`;	
		// console.log(document.cookie);
		if(Number(userCookie[1]) <= 0){
			console.log("작동시간이 초과되었습니다.");
			location.href = `/forec`;
		}
	},1000);
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');

	const moviePersonnelText = document.querySelector("#moviePersonnelText");
	const movieSeatText = document.querySelector("#movieSeatText");
	const movieTheaterText = document.querySelector("#movieTheaterText");
	const showtimeText = document.querySelector("#showtimeText");
	const movieReservationNumber = document.querySelector("#movieReservationNumber");
	const totalPriceText = document.querySelector("#totalPriceText");
	const receiptBtn = document.querySelector('.receiptBtn');
	const receiptModal = document.querySelector('.receiptModal');
	let ReservationNumber = `${Math.floor(Math.random()*(9999-1000)+1000)}-${Math.floor(Math.random()*(99999-10000)+10000)}`;
	let totalprice = '';
	let personUrl = '';

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
	let init = () => {
		getTime();
		setTimeout(getTime, 1000);
	};

	let printReceipt = () => {
		totalprice = (Number(userDataArray[4]) * 13000) +
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
		movieSeatText.innerHTML = `${userDataArray[8].replaceAll('_', ' ')}`;
		movieTheaterText.innerHTML = `${userDataArray[3]}관`;
		showtimeText.innerHTML = `${userDataArray[2]}`;
		movieReservationNumber.innerHTML = ReservationNumber;
		totalPriceText.innerHTML = `총 ${totalprice.toLocaleString()}`;
		personUrl = moviePersonnelText.innerHTML.replaceAll(' ','_');
	}

	printReceipt();
	init();

	$(document).on({
		click: (e) => {
			document.cookie = `userCookie=120`;	
		}
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});

	$(".skipbtn").on("click",()=>{
		let seadUrl = `${window.location.pathname}?page=50&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&seat=${userDataArray[8]}&number=${ReservationNumber}&person=${personUrl}&price=${totalprice}`;
		location.href = seadUrl;
	});

	$(".numpadbtn").on("click",()=>{
		// console.log(window.location.search);
		//location.href = ``;
		console.log("입력확인");	
	});

	//누르면 결제창
	receiptBtn.addEventListener('click', () => {
		receiptModal.classList.toggle('opacityscroll');
	});

};
$(document).ready(function () {
	$('.reCeiptBody').css({ 'top': '40%', 'opacity': '1' })
});