
window.onload =()=> {

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
		}
	}
});

//modal~~~~~~~~~~~~~~~~~~~~~ // 
const geticket = document.querySelector('#submitperson');
const mymodal = document.querySelector('.coutnWrningModal');

geticket.addEventListener('click', (e)=>{
	modalAboutPersonNumChoice(`인원은 최대 6명까지`, `선택 가능합니다`);
	setTimeout(function () {
		mymodal.classList.add('opacityscroll');
		},3000);
		return modalAboutPersonNumChoice; 
})

modalAboutPersonNumChoice =(innervalue, innervalue_2)=> {
	mymodal.classList.toggle('opacityscroll');
	mymodal.innerHTML = `<header class="coutnWrningModalheader">
	<h1 class="coutnWrningModalheadertitle">
		${innervalue}
		<p class="enterkey">${innervalue_2}</p>
		<i class="fa-solid fa-triangle-exclamation"></i>
	</h1>
</header>
<figure class="modalinfomation">
	<figcaption class="modalinfomation_inner">
		<p class="cunnum">3초</p>
		뒤에 자동으로 창이 닫힙니다.
	</figcaption>
</figure>`
}
	};