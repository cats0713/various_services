window.onload = () => {
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
	//찐으로 들어갈 곳



	getTime = () => {
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

	// 동작들 제이쿼리
	$(document).on({
		click: (e) => {
			console.log(e.target.className);
			switch (e.target.className) {
				case 'movietimebox':
					$('.modalwapper').toggleClass('opacityscroll');
					break;
				case 'fa-solid fa-x modalclosebtn':
					$('.modalwapper').toggleClass('opacityscroll');
					break;
				case 'goselectPerson':
					$('.modalwapper').toggleClass('opacityscroll');
					$('.countermodalwapper').toggleClass('opacityscroll');
					break;
			}
		},
		scroll: (e) => { },
	});
	$('#testposter').on({
		mouseenter: (e) => {
			$(e.target).css({ transform: 'translate(-15rem)' });
			$('.posterinfo').css({
				opacity: '1',
				visibility: 'visible',
				transform: 'translate(42rem,-42.8rem)',
			});
		},
		mouseleave: (e) => {
			$(e.target).css({ transform: 'translate(0rem)' });
			$('.posterinfo').css({
				opacity: '0',
				visibility: 'hidden',
			});
		},
	});
	$("#homeBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});
	$("#previousBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});
	//인원선택창 카운터//



}