window.onload = () => {
	let countTime = 0;

	(()=>{
		let timer1;
		let timer2;
		setInterval(()=>{
			const userCookie = document.cookie.split('=');
			document.cookie = `userCookie=${Number(userCookie[1])-1}`;//쿠키 카운트
			// console.log(document.cookie);
			if(Number(userCookie[1]) == 5){ //경고시간
				countTime += 1;	
				if(countTime == 1){
					const mymodal = document.querySelector('.cwrningwapper');
					modalAboutPersonNumChoice2(`홈 화면으로`, `돌아갑니다.`, mymodal);
					timer1 = setTimeout(function () {
						document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
					}, 4800)
					timer2 = setTimeout(function () {
						mymodal.classList.add('opacityscroll');
					}, 5000);
				}
			}
	
			if(Number(userCookie[1]) == 0){ //진짜로 돌아갈 시간 
				location.href = `${window.location.pathname}`;
			}
			if(countTime == 0){ //도중에 클릭했을경우 중지
				clearTimeout(timer1);
				clearTimeout(timer2);
			}
		},1000);
	})();

	const clocktitle = document.querySelector('#time');
	const seat = document.querySelectorAll('.seat');
	let userDataArray = [];
	//[1]: 영화제목, [2]: 시간, [3]: 영화관(A,B), [4]: 성인, [5]: 청소년, [6]: 장애인, [7]: 노약자

	const newUrl = window.location.search;
	const RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;
	userDataArray = newUrl.match(RegExp);
	for (let i = 0; i < userDataArray.length; i++) { //url데이터 파싱
		userDataArray[i] = userDataArray[i].replace('=', '');
	}
	const countNum = Number(userDataArray[4]) + Number(userDataArray[5]) + Number(userDataArray[6]) + Number(userDataArray[7]);

	(() => {
		const moviePersonnelText = document.querySelector(".seatInfo");
		const totalPriceText = document.querySelector("#Pricetitle");
		const totalprice = (Number(userDataArray[4]) * 13000) +
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
		totalPriceText.innerHTML = `총 ${totalprice.toLocaleString()}원`;
	})();

	const modalAboutPersonNumChoice = (innervalue, innervalue_2, mymodal) => { //경고 모달
		mymodal.classList.toggle('opacityscroll');
		for (let i = 0; i < 2; i++) {
			setTimeout(() => {
				mymodal.innerHTML = `
				<section class="coutnWrningModal">
				<div class="modalhat">
	<div class="strip"></div>
	<div class="strip"></div>
	<div class="strip"></div>
</div>
<header class="coutnWrningModalheader">
	<h1 class="coutnWrningModalheadertitle">
		${innervalue}
		<p class="enterkey">${innervalue_2}</p>
		<i class="fa-solid fa-triangle-exclamation"></i>
	</h1>
</header>
<figure class="modalinfomation">
	<figcaption class="modalinfomation_inner">
		<p class="cunnum">${2 - i}초 뒤에</p>
		자동으로 창이 닫힙니다.
	</figcaption>
</figure>
</section>`
			}, i * 1000);
		}
	}
	const modalAboutPersonNumChoice2 = (innervalue, innervalue_2, mymodal) => { //경고 모달
		mymodal.classList.toggle('opacityscroll');
		for (let i = 0; i < 5; i++) {
			setTimeout(() => {
				mymodal.innerHTML = `
				<section class="coutnWrningModal">
				<div class="modalhat">
	<div class="strip"></div>
	<div class="strip"></div>
	<div class="strip"></div>
</div>
<header class="coutnWrningModalheader">
	<h1 class="coutnWrningModalheadertitle">
		${innervalue}
		<p class="enterkey">${innervalue_2}</p>
		<i class="fa-solid fa-triangle-exclamation"></i>
	</h1>
</header>
<figure class="modalinfomation">
	<figcaption class="modalinfomation_inner">
		<p class="cunnum">${5 - i}초 뒤에</p>
		자동으로 창이 닫힙니다.
	</figcaption>
</figure>
</section>`
			}, i * 1000);
		}
	}

	//시간
	const getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
		setTimeout(getTime, 1000);
	};
	getTime();

	$(document).on({
		click: (e) => {
			const mymodal = document.querySelector('.cwrningwapper');	
			countTime = 0;
			mymodal.classList.add('opacityscroll');
			document.cookie = `userCookie=120`;	
			switch (e.target.className) {
				case 'geticket': 
				let seadUrl = `${window.location.pathname}?page=40&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}`;
				const checkSeat = document.querySelectorAll(".check");
				let userSeat = '';
				checkSeat.forEach((e, i, a) => {
					userSeat += `${e.id}_`;
				});
				if (userSeat == '') { //좌석을 선택하지 않았다면
					const mymodal = document.querySelector('.cwrningwapper');
					modalAboutPersonNumChoice(`좌석을`, `선택하여 주십시오`, mymodal);
					setTimeout(function () {
						document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
					}, 1800)
					setTimeout(function () {
						mymodal.classList.add('opacityscroll');
					}, 2000);
				} else if (checkSeat.length == countNum) {
					seadUrl += `&seat=${userSeat}`;
					location.href = seadUrl;
				} else {
					// console.log("남은 좌석을 마저 선택하십시오");
					const mymodal = document.querySelector('.cwrningwapper');
					modalAboutPersonNumChoice(`나머지 좌석을`, `선택하여 주십시오`, mymodal);
					setTimeout(function () {
						document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
					}, 1800)
					setTimeout(function () {
						mymodal.classList.add('opacityscroll');
					}, 2000);
				}
				break;
				case 'seat check': // 체크가 되었을때
					const check = document.querySelectorAll('.check');
					const seatNum = document.querySelector('.seatNum');
					let wCount = 0;
					if (check.length > countNum) {
						e.target.classList.remove('check');
						const mymodal = document.querySelector('.cwrningwapper');
						modalAboutPersonNumChoice(`총 인원이`, `초과되었습니다`, mymodal);
						setTimeout(function () {
							document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
						}, 1800)
						setTimeout(function () {
							mymodal.classList.add('opacityscroll');
						}, 2000);

					} else if (e.target.id[0] == 'W') {
						check.forEach((v, i, a) => {
							wCount += /W/.test(v.id) ? 1 : 0;
						});
						if (userDataArray[6] == 0) {
							e.target.classList.remove('check');
							// console.log("장애인 석은 선택 불가 합니다.");
							const mymodal = document.querySelector('.cwrningwapper');
							modalAboutPersonNumChoice(`장애인석은`, `선택이 불가합니다`, mymodal);
							setTimeout(function () {
								document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
							}, 1800)
							setTimeout(function () {
								mymodal.classList.add('opacityscroll');
							}, 2000);
						} else if (userDataArray[6] < wCount) {
							e.target.classList.remove('check');
							// console.log("장애인 석을 초과 하셨습니다.");
							const mymodal = document.querySelector('.cwrningwapper');
							modalAboutPersonNumChoice(`장애인석이`, `초과 선택 되었습니다`, mymodal);
							setTimeout(function () {
								document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
							}, 1800)
							setTimeout(function () {
								mymodal.classList.add('opacityscroll');
							}, 2000);
						}
					}
					if (!(check.length > countNum) && !(userDataArray[6] < wCount)) {
						seatNum.innerHTML = ``;
						check.forEach((v, i, a) => {
							seatNum.innerHTML += ` ${v.id}`;
						});
					}
					break;
				case 'seat':
					const numBox = document.querySelector('.seatNum');
					numBox.innerHTML = numBox.innerHTML.replace(e.target.id,'');
					break;
			}
		}
	});


	seat.forEach((value, index, array) => { //seat 버튼이 눌리면
		value.addEventListener('click', (e) => {
			e.target.classList.toggle('check');
		});
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});

	$("#Seatreset").on("click", () => {
		const seatNum = document.querySelector('.seatNum');
		const seatSet = document.querySelectorAll(".check");
		seatNum.innerHTML = ``;
		seatSet.forEach((v, i, a) => {
			v.className = 'seat';
		});
	});
}