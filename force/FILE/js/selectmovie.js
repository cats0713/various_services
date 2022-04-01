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

	const clocktitle = document.querySelector('#time');
	let userDataArray = [];
	//[0]: 영화제목, [1]: 시간, [2]: 영화관(A,B), [3]: 성인, [4]: 청소년, [5]: 장애인, [6]: 노약자

	const cutbtn = document.querySelectorAll('.cutbtn');
	
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

	const parseData = (userData) => {
		if (/^no/.test(userData)) {
			userDataArray[0] = userData;
		} else if (typeof userData == 'string') {
			let usertime = [];
			usertime = userData.split('<br>');
			userDataArray[1] = usertime[0];
			userDataArray[2] = usertime[1][0] == 'A' ? 'A' : 'B';
			// console.log(userDataArray);
		}
	};

	const parseData_user = (adult_user, jonior_user, Disabled_user, old_user) => {
		userDataArray[3] = adult_user;
		userDataArray[4] = jonior_user;
		userDataArray[5] = Disabled_user;
		userDataArray[6] = old_user;
		//console.log(userDataArray);
	};
	
	const userGetTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${
			seconds < 10 ? `0${seconds}` : seconds
		}`;
		setTimeout(userGetTime, 1000);
	};

	userGetTime();

	// 동작들 제이쿼리
	$(document).on({
		click: (e) => {
			const mymodal = document.querySelector('.cwrningwapper');
			countTime = 0;
			mymodal.classList.add('opacityscroll');
			document.cookie = `userCookie=120`;
			switch (e.target.id){
				case 'submitperson':
					const checkd = document.querySelectorAll('.check');
					if(checkd.length == 0) {
						const mymodal = document.querySelector('.cwrningwapper');
						modalAboutPersonNumChoice(`관람인원을`, `선택해주세요.`, mymodal);
						setTimeout(function () {
						document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
						}
						,1800)
						setTimeout(function () {
						mymodal.classList.add('opacityscroll');
						}, 2000);
					}
						else {
						location.href = `${window.location.pathname}?page=30&title=${userDataArray[0]}&time=${userDataArray[1]}&gan=${userDataArray[2]}&adult=${userDataArray[3]}&jonior=${userDataArray[4]}&Disabled=${userDataArray[5]}&old=${userDataArray[6]}`;				
					}
					break;

				case 'cutBtn':
					if(e.target.classList[2] =='check'){
						e.target.classList.toggle('check');
						e.target.classList.toggle('backColor');
						break;
					}
					switch (e.target.classList[0]) {
						case 'adultpeoplecounter':
							const adultpeoplecounter = document.querySelectorAll(".adultpeoplecounter");
							adultpeoplecounter.forEach((v,i,a)=>{
							v.classList.remove('check');
							v.classList.add('backColor');
							});
							e.target.classList.toggle('check');
							e.target.classList.toggle('backColor');
							break;
						case 'joniorpeplecounter':
							const joniorpeplecounter = document.querySelectorAll(".joniorpeplecounter");
							joniorpeplecounter.forEach((v,i,a)=>{
							v.classList.remove('check');
							v.classList.add('backColor');
							});
							e.target.classList.toggle('check');
							e.target.classList.toggle('backColor');
							break;
						case 'Disabledpeplecounter':
							const Disabledpeplecounter = document.querySelectorAll(".Disabledpeplecounter");
							Disabledpeplecounter.forEach((v,i,a)=>{
							v.classList.remove('check');
							v.classList.add('backColor');
							});
							e.target.classList.toggle('check');
							e.target.classList.toggle('backColor');
							break;
						case 'oldplecounter':
							const oldplecounter = document.querySelectorAll(".oldplecounter");
							oldplecounter.forEach((v,i,a)=>{
							v.classList.remove('check');
							v.classList.add('backColor');
							});
							e.target.classList.toggle('check');
							e.target.classList.toggle('backColor');
							break;
					}
					if (true) {
						const check = document.querySelectorAll('.check');
						//최대 선택 갯수 확인
						let checkNum = 0;

						check.forEach((e, i, v) => {
							checkNum += Number(e.innerHTML);
						});

						if (checkNum > 6) {
							e.target.classList.remove('check');
							e.target.classList.add('backColor');
							// console.log("초과되었습니다.");
							const mymodal = document.querySelector('.cwrningwapper');
								modalAboutPersonNumChoice(`관람인원이`, `초과 되었습니다`, mymodal);
								setTimeout(function () {
									document.querySelector('.modalhat').style.transform = 'translate(-2rem, -8rem) rotate(0deg)';
								}, 1800);
								setTimeout(function () {
									mymodal.classList.add('opacityscroll');
								}, 2000);
							break;
						}
					}
					
					const check = document.querySelectorAll('.check');
					//인원선택
					let adult_user = 0;
					let jonior_user = 0;
					let Disabled_user = 0;
					let old_user = 0;

					check.forEach((e, i, v) => {
						switch (e.className) {
							case 'adultpeoplecounter cutbtn check':
								adult_user = Number(e.innerHTML);
								break;
							case 'joniorpeplecounter cutbtn check':
								jonior_user = Number(e.innerHTML);
								// console.log("청소년");
								break;
							case 'Disabledpeplecounter cutbtn check':
								Disabled_user = Number(e.innerHTML);
								// console.log("장애인");
								break;
							case 'oldplecounter cutbtn check':
								old_user = Number(e.innerHTML);
								// console.log("노약자");
								break;
						}
					});
					parseData_user(adult_user, jonior_user, Disabled_user, old_user);
					break;
				
			}

			switch (e.target.className) {
				case 'movieUlLicontainer':
					$('.modalwapper').toggleClass('opacityscroll');
					//영화 시간 나누기
					userDataArray = [];
					parseData(e.target.value);
					parseData(e.target.innerHTML);
					break;
				case 'goselectPerson':
					$('.modalwapper').toggleClass('opacityscroll');
					$('.countermodalwapper').toggleClass('opacityscroll');
					break;
			}
			modalclosebtn = document.querySelector('#modalclosebtn');
			modalclosebtn.addEventListener('click', ()=>{
				$('.modalwapper').toggleClass('opacityscroll');
		})},
	});


	$('#homeBtn').on('click', function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$('#previousBtn').on('click', function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$('#prevperson').on('click', function() {
		location.reload();
	})
};
