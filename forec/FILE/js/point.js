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
		setTimeout(getTime, 1000);
	};
	init();

	$(document).on({
		click: (e) => {
			document.cookie = `userCookie=120`;	
		}
	});

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
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});
}