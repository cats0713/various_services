// 시간띄우는 함수
const clockContainer = document.querySelector('.head__infor');
// 시간 들어갈 wapper
let clocktitle = document.querySelector('#time');
getTime = () => {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
};

init = () => {
	getTime();
	setInterval(getTime, 1000);
};
init();

// 규식이형. 받아온 입력시 받은 값을 넘겨줄때 적용해줘야함
priceToString = (price) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// 동작들 제이쿼리
$(document).on({
	click: (e) => {
		console.log(e.target);
		switch (e.target.className) {
			case 'movieUlLicontainer':
				$('.modalwapper').toggleClass('opacityscroll');
				break;
			case 'fa-solid fa-x modalclosebtn':
				$('.modalwapper').toggleClass('opacityscroll');
				break;
			case 'goselectPerson':
				$('.modalwapper').toggleClass('opacityscroll');
				$('.countermodalwapper').toggleClass('opacityscroll');
				break;
			case 'geticket':
				$(e.target).css({
					color: '#ffba00',
					boxShadow: '0.2rem 0.8rem 3rem #ffbb0065',
					background: '#ffe277',
					textShadow: 'none',
				});
				$(e.target).text('완료');
				break;
			case "membershipsumit Mbtn":
				//블라블라 조건문
				$('.membershipModal').toggleClass('opacityscroll')
				break;
			}
	},

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
	$(".mkeybord").on('click', function(e) {
		if(
		$('.Numresult').html().length < 9 &&
		e.target.id != $('#resetMnum') && 
		e.target.innerHTML != "확인"
	) { 
		number += e.target.innerHTML;
		$(".Numresult").html(getHypen(number));
	} else if (
		$(".Numresult").html().length < 9 &&
		e.target.id == $('#resetMnum') && 
		e.target.innerHTML != "확인")
	{
		userNum.innerHTML = "";
	}
});
$("#resetMnum").on('click', function (e) {
	number = "";
	userNum.innerHTML ="";
});
});

//좌석선택 //
