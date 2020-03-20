const products = document.querySelector('ul.products');
const beans = document.querySelector('div.beans');


products.addEventListener('mouseover', () => {
	beans.style.backgroundBlendMode = 'overlay';
		
})

products.addEventListener('mouseout', () => {
	beans.style.backgroundBlendMode = 'normal';
	
})