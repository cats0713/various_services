window.onload = () => {

	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
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

	setTimeout(()=>{
		location.href = window.location.pathname;
	},10000);


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

	//누르면 결제창
	receiptBtn.addEventListener('click', () => {
		receiptModal.classList.toggle('opacityscroll');
	});

};
$(document).ready(function () {
	$('.reCeiptBody').css({ 'top': '40%', 'opacity': '1' });
});