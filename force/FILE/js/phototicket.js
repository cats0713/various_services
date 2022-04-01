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

	const modalAboutPersonNumChoice = (innervalue, innervalue_2, mymodal) => {
		mymodal.classList.toggle('opacityscroll');
		for (let i = 0; i < 2; i++) {
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
				<p class="cunnum">${2 - i}초 뒤에</p>
				자동으로 창이 닫힙니다.
				</figcaption>
				</figure>
				</section>`;
			}, i * 1000);
		}
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
	// 시간띄우는 함수 	// 시간 들어갈 wapper
	const clocktitle = document.querySelector('#time');
	const newUrl = window.location.search;
	const RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;
	userDataArray = newUrl.match(RegExp);

	const getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds
			}`;
		setTimeout(getTime, 1000);
	};
	getTime();

	$(".PhotoTicket__li").on("click",()=>{
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

		$("#homeBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});

		$("#previousBtn").on("click", function () {
			location.href = `${window.location.pathname}?page=10`;
		});
}