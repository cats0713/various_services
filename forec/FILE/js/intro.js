window.onload = () => {
	const clock = document.querySelector('#dayTime');
	const clocktitle = document.querySelector('#time');

	// console.log(clocktitle);

	getTime = () => {
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

	init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

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
