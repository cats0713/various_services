window.onload = () => {
	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
	//찐으로 들어갈 곳

	getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds
			}`;
	};

	init = () => {
		getTime();
		setInterval(getTime, 1000);
	};
	init();

	//하단 버튼 조작
	$("#homeBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});
	$("#previousBtn").on("click", function () {
		location.href = `/forec?page=20`;
	});

}