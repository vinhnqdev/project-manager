document.addEventListener('DOMContentLoaded',function(){
	let button = document.querySelector('.nq-toggler');
	let right = document.querySelector('.right');
	let btn_right = document.querySelector('.right button');
	button.addEventListener('click',function(){
		
		right.classList.add('chuyendong');
		button.classList.add('dis-none');
	})
})