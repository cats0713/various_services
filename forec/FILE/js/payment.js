window.onload = () => {

	let newUrl = window.location.search;
	let RegExp = /=\w+(:)?\d*(~)?\d*(:)?\d*-?\d?\d?\d?\d?\d?/g;
	userDataArray = newUrl.match(RegExp);
	for (let i = 0; i < userDataArray.length; i++) {
		userDataArray[i] = userDataArray[i].replace('=', '');
	}
	console.log(userDataArray);

	// 시간띄우는 함수
	const clockContainer = document.querySelector('.head__infor');
	// 시간 들어갈 wapper
	let clocktitle = document.querySelector('#time');
	let getTime = () => {
		const date = new Date();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const seconds = date.getSeconds();
		clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${minutes < 10 ? `0${minutes}` : minutes}: ${
			seconds < 10 ? `0${seconds}` : seconds
		}`;
		setTimeout(getTime, 1000);
	};
	getTime();

	const paymodal = document.querySelector('.paymodal');
	const creditCard = document.querySelector('#realcard');
	const pointpayment = document.querySelector('#realpoint');
	const receiptModal = document.querySelector('.receiptModal');
	const paymentModal = () => {
		paymodal.classList.toggle('opacityscroll');
	};

	creditCard.addEventListener('click', (e) => {
		paymentModal();
		setTimeout(()=> {
			const realcard = document.querySelector('.realcard');
			const paymentcardmtitle = document.querySelector('.paymentcardmtitle');
			realcard.style.animation = 'none';
			paymentcardmtitle.innerText = `결제중입니다`;
		}, 3000);

		setTimeout(()=>{
			let seadUrl = `${window.location.pathname}?page=60&title=${userDataArray[1]}&time=${userDataArray[2]}&gan=${userDataArray[3]}&adult=${userDataArray[4]}&jonior=${userDataArray[5]}&Disabled=${userDataArray[6]}&old=${userDataArray[7]}&seat=${userDataArray[8]}&number=${userDataArray[9]}&price=${userDataArray[10]}`;
			location.href = seadUrl;
		}, 5000);

		return paymentModal;
	});
	
	pointpayment.addEventListener('click', (e)=>{
		receiptModal.classList.toggle('opacityscroll');
	})

};
