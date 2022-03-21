window.onload=()=>{
  const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');

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


	$("#homeBtn").on("click", function () {
		console.log("a");
		location.href = `/forec?page=20`;
	});

	$("#previousBtn").on("click", function () {
		location.href = `/forec?page=10`;
	});
}