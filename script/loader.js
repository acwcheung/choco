const loader = document.querySelector('.loader-wrapper');

window.addEventListener('load', () => {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';						
	}, 1500)	
}); 

