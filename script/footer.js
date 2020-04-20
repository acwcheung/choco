const footer = `
	<div class="container">
		<ul>
			<li><a href="index.html">Craft Choco</a></li>
			<li><a href="index.html">home</a>
				<ul>
					<li><a href="shop.html">shop</a></li>
					<li><a href="experience.html">experience</a></li>
					<li><a href="visit.html">visit</a></li>
				</ul>
			</li>				
			<li><a href="about.html">about</a>
				<ul>
					<li><a href="#">overview</a></li>
					<li><a href="#">process</a></li>
					<li><a href="#">our beans and sugar</a></li>
					<li><a href="#">contact us</a></li>
				</ul>
			</li>
			<li><a href="">more</a>
				<ul>
					<li><a href="#">retailer</a></li>
					<li><a href="#">wholesaler</a></li>
					<li><a href="#">private event</a></li>
					<li><a href="#">jobs</a></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><a href=""><i class="fab fa-facebook-square"></i></a></li>
					<li><a href=""><i class="fab fa-twitter-square"></i></a></li>
					<li><a href=""><i class="fab fa-instagram"></i></a></li>
					<li><a href=""><i class="far fa-envelope"></i></a></li>
				</ul>
			</li>
		</ul>
		<p>©Photo and info by Dandelion Chocolate</p>
	</div>
`

const footerContainer = document.querySelector('footer');

footerContainer.innerHTML = footer;