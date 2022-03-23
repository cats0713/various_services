window.onload = () => {
	let clocktitle = document.querySelector('#time');

	const seat = document.querySelectorAll('.seat');
	const geticket = document.querySelector('#geticket');
	let userDataArray = [];	
	//[1]: 영화제목, [2]: 시간, [3]: 영화관(A,B), [4]: 성인, [5]: 청소년, [6]: 장애인, [7]: 노약자
	let newUrl = window.location.search;
	let RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*/g;
	userDataArray = newUrl.match(RegExp);
	for (let i = 0; i < userDataArray.length; i++) { //url데이터 파싱
		userDataArray[i] = userDataArray[i].replace('=', '');
	}
	let countNum = Number(userDataArray[4]) + Number(userDataArray[5]) + Number(userDataArray[6]) + Number(userDataArray[7]);

	//가격
	let displayPrice = () => {	
		let totalprice = (Number(userDataArray[4]) * 13000) + (Number(userDataArray[5]) * 10000) + (Number(userDataArray[6]) * 13000) + (Number(userDataArray[7]) * 9000);
		let Pricetitle = document.querySelector("#Pricetitle");
		Pricetitle.innerHTML = `총 ${totalprice.toLocaleString()}원`;	
	}
	
	//시간
	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
	};
	let init = () => {
		getTime();
		setInterval(getTime, 1000);
	};

	displayPrice();
	init();

	$(document).on({
		click: (e) => {
			switch (e.target.className) {
				case 'seat check': // 체크가 되었을때
					const check = document.querySelectorAll('.check');
					let selectCart = document.querySelector('#selectCart');
					if (check.length > countNum) {
						e.target.classList.toggle('check');
						console.log('초과되었습니다.');
					}else{
						selectCart.innerHTML += `<li class="cartList">
						<div class="movie"><i class="fa-solid fa-circle-minus" id="removeselectseat"></i><span
								class="BoxName">${userDataArray[3]}관</span><span class="seatNum">${e.target.id}</span><span
								class="typeofPerson">성인</span><span class="oneofprice">9000</span></div>
					</li>`;
					}
					break;
			}
			switch (e.target.id){
				case 'Seatreset':
					let selectCart = document.querySelector('#selectCart');
					let seatSet = document.querySelectorAll(".check");
					selectCart.innerHTML = ``;
					seatSet.forEach((v,i,a)=>{
						v.className = 'seat';
						console.log(v);
					});
					break;
			}
		}
	});

	seat.forEach((value, index, array) => { //seat 버튼이 눌리면
		value.addEventListener('click', (e) => {
			e.target.classList.toggle('check');
		});
	});

	$("#homeBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=10`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `${window.location.pathname}?page=20`;
	});

	geticket.addEventListener("click", () => { //결제하기 버튼이 눌리면

		let seadUrl = `${window.location.pathname}?page=40&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}`;
		let checkSeat = document.querySelectorAll(".check");
		let userSeat = '';
		checkSeat.forEach((e, i, a) => {
			userSeat +=  e.id;
		});
		if(userSeat == ''){ //좌석을 선택하지 않았다면
			console.log("좌석을 선택하여 주십시오");
		}else if(checkSeat.length == countNum){
			seadUrl += `&seat=${userSeat}`;
			location.href = seadUrl;
		}else{
			console.log("남은 좌석을 마저 선택하십시오");
		}
	});
}