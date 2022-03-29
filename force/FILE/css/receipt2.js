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

	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');


	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds
			}`;
			setTimeout(getTime, 1000);
	};

	getTime();


	$(document).on({
		click: (e) => {
			document.cookie = `userCookie=120`;	
		}
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#printBtn").on("click",()=>{
		console.log("인쇄하기페이지? 모달?");
		$('.receipt2modal').toggleClass('opacityscroll');
	});

};
$(document).ready(function () {
	$('.reCeiptBody').css({ 'top': '40%', 'opacity': '1' })
});