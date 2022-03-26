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

	const clock = document.querySelector('#dayTime');
	const clocktitle = document.querySelector('#time');

	let getTime = () => {
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
	};

	let init = () => {
		getTime();
		setTimeout(init, 1000);
	};

	init();

	$(document).on({
		click: (e) => {
			document.cookie = `userCookie=120`;	
		}
	});

	$('#reservationBtn').on('click', function () {
		location.href = `/forec?page=20`;
	});
	$('#printTicketBtn').on('click', function () {
		location.href = `/forec?page=100`;
	});
};


$(window).on('load', (e) => {
	$('.windowloadimg').css({ height: '0%', opacity: '0', visibility: 'hidden' });
	$('.printTicketimg').css({ transform: 'translateY(-5rem)' });
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
