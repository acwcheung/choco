const chocolateBars = [
	{
		name: 'hacienda azul',
		origin: 'costa rica - 70%',
		detail: 'golden caramel, ganache, and waffle cone',
		price: '$8.50',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
	{
		name: 'gola rainforest',
		origin: 'sirra leone - 70%',
		detail: 'flavors of molten chocolate cake, toffee, and cinnamon',
		price: '$10',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
	{
		name: 'tumaco',
		origin: 'colombia - 70%',
		detail: 'flavors of wildflower honey, malted hot cocoa, and whipped cream',
		price: '$10',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
	{
		name: 'wampu',
		origin: 'honduras - 70%',
		detail: 'classic dark chocolate, macadamia nut, and honeycomb',
		price: '$10',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
	{
		name: 'kokoa kamili',
		origin: 'tanzania - 70%',
		detail: 'notes of honey, fresh peach, and homemade fudge',
		price: '$8.5',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
	{
		name: 'costa esmeraldas',
		origin: 'ecuador - 70%',
		detail: 'notes of fudge brownie, brown sugar, and fresh milk',
		price: '$8.5',
		url: 'https://cdn.shopify.com/s/files/1/2434/0841/products/dandelion-chocolate-chocolate-bar-hacienda-azul-costa-rica-70-2018-single-origin-chocolate-bar-15439043068044_900x.png?v=1585847688'
	},
];

const treats = [
	{
		name: 'sea salt caramels',
		detail: 'vanilla bean caramel with handpicked Fleur De Sel',
		price: '$35',
		url: [
			'https://cdn.shopify.com/s/files/1/2434/0841/products/Sea_Salt_Caramels_-_Feve_-_2018.05_0_5x_1080x.png?v=1579115582',
			'https://cdn.shopify.com/s/files/1/2434/0841/products/feve-collaborator-sea-salt-caramels-14067851198604_1080x.png?v=1579115582'
			]		
	},
	{
		name: 'Chocolate-Covered Espresso Beans',
		detail: 'Yemani Udani beans in Camino Verde chocolate',
		price: '$28',
		url: [
			'https://cdn.shopify.com/s/files/1/2434/0841/products/port-of-mokha-collaborator-mokha-mocha-chocolate-covered-espresso-beans--3751001555032_1080x.png?v=1552081055',
			'https://cdn.shopify.com/s/files/1/2434/0841/products/port-of-mokha-collaborator-mokha-mocha-chocolate-covered-espresso-beans--3751029473368_1080x.png?v=1552081055'
			]		
	},
	{
		name: 'Bar with Hazelnuts, Almonds, and Caramel',
		detail: 'crispy hazelnuts and sea salt caramel',
		price: '$7',
		url: [
			'https://cdn.shopify.com/s/files/1/2434/0841/products/nuubia-collaborator-hazelnut-almond-caramel-bar-11838764318808_1080x.png?v=1561744652',
			'https://cdn.shopify.com/s/files/1/2434/0841/products/nuubia-collaborator-hazelnut-almond-caramel-bar--4506886176856_1080x.png?v=1561744652'
			]		
	},
]


const barContainer = document.querySelector('div.bar-container');
const treatContainer = document.querySelector('div.treat-container');

barContainer.innerHTML = chocolateBars.map(bar => {
	return `
		<div class="product" data-aos="zoom-in">
			<img src=${bar.url}>
			<h3>${bar.name}</h3>
			<p class="origin">${bar.origin}</p>
			<p class="detail">${bar.detail}</p>
			<p class="price">${bar.price}</p>
		</div>
	`
}).join('');

treatContainer.innerHTML = treats.map( treat => {
	return `
		<div class="product" data-aos="zoom-in">
			<div class="image-container">
				<img class="image-1" src=${treat.url[0]}>
				<img class="image-2" src=${treat.url[1]}>	
			</div>
			<h3>${treat.name}</h3>
			<p class="detail">${treat.detail}</p>
			<p class="price">${treat.price}</p>
		</div>
	`
}).join('');
