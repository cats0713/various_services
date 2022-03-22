window.onload = () => {
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
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


	//예매번호 조회 
	$(function () {
		let getHypen = (target_number) => {
			let target = String(target_number);
			let dot = /\B(?=(\d{4})+(?!\d))/g;
			return target.replace(dot, "-");
		};
		let number = "";
		let userNum = document.querySelector('.Numresult');
		$(".mkeybord").on('click', function (e) {
			if (
				$('.Numresult').html().length < 9 &&
				e.target.id != $('#resetMnum') &&
				e.target.innerHTML != "확인"
			) {
				number += e.target.innerHTML;
				$(".Numresult").html(getHypen(number));
			} else if (
				$(".Numresult").html().length < 9 &&
				e.target.id == $('#resetMnum') &&
				e.target.innerHTML != "확인") {
				userNum.innerHTML = "";
			}
		});
		$("#resetMnum").on('click', function (e) {
			number = "";
			userNum.innerHTML = "";
		});
		$("#homeBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});

		$("#previousBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});
	});

}