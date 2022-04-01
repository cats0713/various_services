window.onload = () => {
	$('.reCeiptBody').css({ 'top': '40%', 'opacity': '1' });
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

	(() => {
		const newUrl = window.location.search;
		const RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*-?\d*/g;
		userDataArray = newUrl.match(RegExp);
		for (let i = 0; i < userDataArray.length; i++) { //url데이터 파싱
			userDataArray[i] = userDataArray[i].replace('=', '');
		}
		// console.log(userDataArray);
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		let day = date.getDay();
		const dday = date.getDate();
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
		$("#clockText").html(`${year}년 ${month + 1}월 ${dday}일 ${day}요일`);
		$("#priceText").html(`총 ${Number(userDataArray[10]).toLocaleString('en')}원`);
		$("#numberText").html(`${userDataArray[9]}`);


	})();

	getTime();

	setTimeout(() => {
			// console.log("인쇄하기페이지? 모달?");
			$('.receipt2modal').toggleClass('opacityscroll');
			setTimeout(() => {
				$(".printingtitle").html("인쇄가 완료되었습니다");
				$('.printingtitle').css({ animation: 'none', opacity: '1' });
				$('.printingbody').css({ animation: 'none' });
			}, 7000);
			setTimeout(() => {
				location.href = `${window.location.pathname}`;
			}, 12000);
	}, 3000);

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

};
