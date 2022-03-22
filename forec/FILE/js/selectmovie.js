window.onload = () => {

	let clocktitle = document.querySelector('#time');
	let userDataArray = [];
	//[0]: 영화제목, [1]: 시간, [2]: 영화관(A,B), [3]: 성인, [4]: 청소년, [5]: 장애인, [6]: 노약자

	const cutbtn = document.querySelectorAll('.cutbtn');

	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
	};
	let init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

	let parseData = (userData) => {
		if (/^no/.test(userData)) {
			userDataArray[0] = userData;
		} else if (typeof (userData) == 'string') {
			let usertime = [];
			usertime = userData.split('<br>');
			userDataArray[1] = usertime[0];
			userDataArray[2] = (usertime[1][0] == 'A') ? 'A' : 'B'
			console.log(userDataArray);
		}
	}

	let parseData_user = (adult_user, jonior_user, Disabled_user, old_user) => {
		userDataArray[3] = adult_user;
		userDataArray[4] = jonior_user;
		userDataArray[5] = Disabled_user;
		userDataArray[6] = old_user;
		console.log(userDataArray);
	}

	// 동작들 제이쿼리
	$(document).on({
		click: (e) => {
			// console.log(e.target);
			switch (e.target.id) {
				case 'cutBtn':
					if (true) {
						const check = document.querySelectorAll('.check');
						//최대 선택 갯수 확인
						let checkNum = 0;
						check.forEach((e, i, v) => {
							checkNum += Number(e.innerHTML);
						});
						if (checkNum > 6) {
							e.target.classList.toggle('check');
							e.target.classList.toggle('backColor');
							console.log("초과되었습니다.");
						}
					}
					const check = document.querySelectorAll('.check');
					//인원선택
					let adult_user = 0;
					let jonior_user = 0;
					let Disabled_user = 0;
					let old_user = 0;

					//같은 종류의 인원을 선택 했을때
					let doubleClick = 0;

					check.forEach((e, i, v) => {
						switch (e.className) {
							case 'adultpeoplecounter cutbtn check':
								adult_user = Number(e.innerHTML) * 1
								break;
							case 'joniorpeplecounter cutbtn check':
								jonior_user = Number(e.innerHTML) * 1
								// console.log("청소년");
								break;
							case 'Disabledpeplecounter cutbtn check':
								Disabled_user = Number(e.innerHTML) * 1
								// console.log("장애인");
								break;
							case 'oldplecounter cutbtn check':
								old_user = Number(e.innerHTML) * 1
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
		}
	});

	cutbtn.forEach((value, index, array) => {
		value.addEventListener('click', (e) => {
			e.target.classList.toggle('check');
			e.target.classList.toggle('backColor');
		});
	});




	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});
	$("#submitperson").on("click", function () {
		if ($(".check").length == 0) {
			//모달 인원을 선택해주세요
		} else {
			location.href = `${window.location.pathname}?page=30&title=${userDataArray[0]}&time=${userDataArray[1]}&gan=${userDataArray[2]}&adult=${userDataArray[3]}&jonior=${userDataArray[4]}&Disabled=${userDataArray[5]}&old=${userDataArray[6]}`;

		}
	});


}