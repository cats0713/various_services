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

	let newUrl = window.location.search;
	let RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;
	userDataArray = newUrl.match(RegExp);

	if (userDataArray[1]) {
		console.log("예매번호가 틀렸다고 모달띄우기");
	}
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
			console.log(e.target);
		}
	});

	//예매번호 조회 
	$(function () {
		let getHypen = (target_number) => {
			let target = String(target_number);
			let dot = /\B(?=(\d{5})+(?!\d))/g;
			return target.replace(dot, "-");
		};
		let number = "";
		let Numresult = document.querySelector('.Numresult');
		$(".mkeybord").on('click', function (e) {
			if ( //숫자 버튼을 눌렀을때
				$('.Numresult').html().length < 10 &&
				e.target.id != $('#resetMnum') &&
				e.target.id != $('#backSpace') &&
				e.target.innerHTML != "확인"
			) {
				number += e.target.innerHTML;
				$(".Numresult").html(getHypen(number));
			} else if (
				$(".Numresult").html().length < 10 &&
				e.target.id == $('#resetMnum') &&
				e.target.id != $('#backSpace') &&
				e.target.innerHTML != "확인"
			) {
				Numresult.innerHTML = "";
			}
		});
		$("#resetMnum").on('click', function (e) {

			number = "";
			Numresult.innerHTML = "";
		});
		$("#backSpace").on("click", () => {
			Numresult.innerHTML = Numresult.innerHTML.slice(0, -1);
			number = Numresult.innerHTML;
			console.log(Numresult);
			console.log(number);
		});
		$("#homeBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});

		$("#previousBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});

		$("#ticketsumit").on("click", () => {
			if (Numresult.innerHTML.length == 10) {
				const userTicket = Numresult.innerHTML;
				location.href = `${window.location.pathname}?page=110&number=${userTicket}`;
			}
		});
	});
}