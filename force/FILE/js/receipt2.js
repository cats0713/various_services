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
	const clocktitle = document.querySelector('#time');

	const getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds
			}`;
			setTimeout(getTime, 1000);
	};

	getTime();


	$(document).on({
		click: (e) => {
			countTime = 0;
			$('.cwrningwapper').addClass('opacityscroll');
			document.cookie = `userCookie=120`;
		}
	});


	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$(".printBtn").on("click",()=>{
		// console.log("인쇄하기페이지? 모달?");
		$('.receipt2modal').toggleClass('opacityscroll');
		setTimeout(()=>{
			$(".printingtitle").html("인쇄가 완료되었습니다");
			$('.printingtitle').css({animation:'none',opacity:'1'});
			$('.printingbody').css({animation:'none'});
		},7000);
		setTimeout(()=>{
			location.href = `${window.location.pathname}`;	
		},12000);
	});


};
$(document).ready(function () {
	$('.reCeiptBody').css({ 'top': '40%', 'opacity': '1' })
});