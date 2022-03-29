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

	// 시간 들어갈 wapper
	let userPoint = 0;
	const clocktitle = document.querySelector('#time');
	const newUrl = window.location.search;
	const RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*-?\d?\d?\d?\d?\d?/g;
	userDataArray = newUrl.match(RegExp);
	for (let i = 0; i < userDataArray.length; i++) {
		userDataArray[i] = userDataArray[i].replace('=', '');
	}

	const paymodal = document.querySelector('.paymodal');
	const creditCard = document.querySelector('#realcard');
	const pointpayment = document.querySelector('#realpoint');
	const receiptModal = document.querySelector('.receiptModal');
	const paymentModal = () => {
		paymodal.classList.toggle('opacityscroll');
	};

	(()=>{
		const totalpayment = document.querySelector(".totalpayment");
		const totalprice = (Number(userDataArray[4]) * 13000) +
		(Number(userDataArray[5]) * 10000) +
		(Number(userDataArray[6]) * 13000) +
		(Number(userDataArray[7]) * 9000);
		totalpayment.innerHTML = `총 ${totalprice.toLocaleString()}원`;
	})();

	const getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds
			}`;
		setTimeout(getTime, 1000);
	};

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

	getTime();

	$(document).on({
		click: (e) => {
			const mymodal = document.querySelector('.cwrningwapper');	
			countTime = 0;
			mymodal.classList.add('opacityscroll');
			document.cookie = `userCookie=120`;
		}
	});

	creditCard.addEventListener('click', (e) => {
		paymentModal();
		setTimeout(() => {
			const realcard = document.querySelector('.realcard');
			const paymentcardmtitle = document.querySelector('.paymentcardmtitle');
			realcard.style.animation = 'cardstyle linear 3s infinite reverse';
			realcard.style.transform = 'translate(0rem,27rem) rotate(90deg)'
			paymentcardmtitle.innerText = `결제중입니다`;
		}, 3000);

		setTimeout(() => {
			const seadUrl = `${window.location.pathname}?page=60&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}&seat=${userDataArray[8]}&number=${userDataArray[9]}&price=${userDataArray[10]}`;
			location.href = seadUrl;
		}, 5000);
		return paymentModal;
	});

	pointpayment.addEventListener('click', (e) => {
		receiptModal.classList.toggle('opacityscroll');
		setTimeout(() => {
			const seadUrl = `${window.location.pathname}?page=60&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}&seat=${userDataArray[8]}&number=${userDataArray[9]}&price=${userDataArray[10]}`;
			location.href = seadUrl;
		}, 7000);	
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});

};
