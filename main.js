const products = document.querySelector('ul.products');
const beans = document.querySelector('div.beans');
const prev = document.querySelector('div.slide-wrapper > a.prev');
const next = document.querySelector('div.slide-wrapper > a.next');
const slides = document.querySelector('ul.slide-container');
const steps = document.querySelectorAll('ol.description > li');
let slideCount = 1;

// hero section
products.addEventListener('mouseover', () => {
	beans.style.backgroundBlendMode = 'overlay';
})

products.addEventListener('mouseout', () => {
	beans.style.backgroundBlendMode = 'normal';
})

// bean to bar process
prev.addEventListener('click', () => {
	if(slideCount > 1) {
		n = slideCount - 2;
		slides.style.transform = `translate(${-35*n}vw ,0)`; 
		slideCount--;
		showStep(slideCount);
	}	
})

next.addEventListener('click', () => {
	if(slideCount < 8) {
		n = slideCount;
		slides.style.transform = `translate(${-35*n}vw ,0)`; 
		slideCount++; 
		showStep(slideCount);
	}	
})

function showStep(n) {
	steps.forEach(step => step.style.display = 'none');
	const index = n - 1;
	steps[index].style.display = 'block';
}

