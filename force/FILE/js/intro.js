window.onload = () => {
	let countTime = 0;
	(() => {
		let timer1;
		let timer2;
		setInterval(() => {
			const userCookie = document.cookie.split('=');
			document.cookie = `userCookie=${Number(userCookie[1]) - 1}`; //쿠키 카운트
			// console.log(document.cookie);
			if (Number(userCookie[1]) == 5) {
				//경고시간
				countTime += 1;
				if (countTime == 1) {
					const mymodal = document.querySelector('.cwrningwapper');
					modalAboutPersonNumChoice2(`홈 화면으로`, `돌아갑니다.`, mymodal);
					timer1 = setTimeout(function () {
						document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
					}, 4800);
					timer2 = setTimeout(function () {
						mymodal.classList.add('opacityscroll');
					}, 5000);
				}
			}

			if (Number(userCookie[1]) == 0) {
				//진짜로 돌아갈 시간
				location.href = `${window.location.pathname}`;
			}
			if (countTime == 0) {
				//도중에 클릭했을경우 중지
				clearTimeout(timer1);
				clearTimeout(timer2);
			}
		}, 1000);
	})();

	const clock = document.querySelector('#dayTime');
	const clocktitle = document.querySelector('#time');

	const modalAboutPersonNumChoice2 = (innervalue, innervalue_2, mymodal) => {
		//경고 모달
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
</section>`;
			}, i * 1000);
		}
	};

	const getTime = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		let day = date.getDay();
		const dday = date.getDate();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		switch (day) {
			case 0:
				day = `일`;
				break;
			case 1:
				day = `월`;
				break;
			case 2:
				day = `화`;
				break;
			case 3:
				day = `수`;
				break;
			case 4:
				day = `목`;
				break;
			case 5:
				day = `금`;
				break;
			case 6:
				day = `토`;
				break;
		}
		clock.innerHTML = `${year}년 ${month + 1}월 ${dday}일 ${day}요일`;
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분`;
		setTimeout(getTime, 1000);
	};

	getTime();

	$(document).on({
		click: (e) => {
			const mymodal = document.querySelector('.cwrningwapper');
			countTime = 0;
			mymodal.classList.add('opacityscroll');
			document.cookie = `userCookie=120`;
		},
	});

	$('#reservationBtn').on('click', function () {
		location.href = `${window.location.pathname}?page=20`;
	});
	$('#printTicketBtn').on('click', function () {
		location.href = `${window.location.pathname}?page=100`;
	});
};

$(window).on('load', (e) => {
	$('.windowloadimg').css({ height: '0%', opacity: '0', visibility: 'hidden' });
	setTimeout(() => {
		$('.printTicketimg').css({ transform: 'translateY(-5rem)' });
	}, 1000);
});

$(document).on({
	mouseover: (e) => {
		switch (e.target.className) {
			case 'ticketintroduce printticket':
			case 'h1tagL':
			case 'h2tagL':
				$('#lefttab').css({ transform: ' translateY(-5rem) rotate(5deg)' });
				break;
			case 'ticketintroduce Reservation':
			case 'h1tagR':
			case 'h2tagR':
				$('#righttab').css({ transform: ' translateY(-5rem) rotate(5deg)' });
				break;
		}
	},
	mouseout: (e) => {
		switch (e.target.className) {
			case 'ticketintroduce printticket':
			case 'h1tagL':
			case 'h2tagL':
				$('#lefttab').css({ transform: 'translateY(-5rem) rotate(0deg)' });
				break;
			case 'ticketintroduce Reservation':
			case 'h1tagR':
			case 'h2tagR':
				$('#righttab').css({ transform: 'translateY(-5rem) rotate(0deg)' });
		}
	},
});
