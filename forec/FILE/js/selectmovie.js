window.onload = () => {
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
	
	let userDataArray = []; 


	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
	};
	init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

	// 규식이형. 받아온 입력시 받은 값을 넘겨줄때 적용해줘야함
	// priceToString = (price) => {
	// 	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	// };

	let parseData = (userData) =>{
		if(typeof(userData) == 'string'){
			//영화 시간, 영화관 선택
			//userDataArray[0] = userData.split();
			userDataArray = [];
			userDataArray = userData.split('<br>');
		}else{
			
		}
	}
	// 동작들 제이쿼리
	$(document).on({
		click: (e) => {
			switch (e.target.id){
				case 'cutbtn':
					console.log(e.target.value);
					console.log(e.target.innerHTML);
					break;
			}
			console.log(e.target);

			switch (e.target.className) {
				case 'movieUlLicontainer':
					$('.modalwapper').toggleClass('opacityscroll');
					parseData(e.target.innerHTML);
					break;
				case 'goselectPerson':
					$('.modalwapper').toggleClass('opacityscroll');
					$('.countermodalwapper').toggleClass('opacityscroll');
					break;
			}
		}
	});
	const cutbtn = document.querySelectorAll('.cutbtn');

	cutbtn.forEach((value, index, array) => {
		value.addEventListener('click', (e) => {
			e.target.classList.toggle('check');
			e.target.classList.toggle('backColor');
		});
	});
	// resultNum = (mybtnValue) => {
	// 	console.log(mybtnValue);
	// 	const pricetitle = document.querySelector('#Pricetitle');
	// 	pricetitle.innerHTML = mybtnValue;
	// };


	$("#homeBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});
	$("#submitperson").on("click", function () {
		location.href = `/forec?page=30`;
	});


}