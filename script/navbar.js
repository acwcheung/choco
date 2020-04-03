const navbar = `
	<nav class="sm-screen">			
		<div class="menu-wrap">
			<input type="checkbox" class="toggler">
			<div class="hamburger">
				<div></div>
			</div>
			<div class="menu">
				<ul>
					<li><a href="shop.html">shop</a></li>
					<li><a href="experience.html">experience</a></li>
					<li><a href="#">visit</a></li>
					<li><a href="about.html">about</a>
					<li><a href="">more</a></li>
				</ul>
			</div>
		</div>
		<a href="index.html">craft choco</a>
		<div></div>
	</nav>

	<nav class="lg-screen">
		<ul>
			<li><a href="index.html">craft choco</a></li>
			<li><a href="shop.html">shop</a></li>
			<li><a href="experience.html">experience</a></li>
			<li><a href="#">visit</a></li>
			<li><a href="about.html">about</a>
				<ul>
					<li><a href="">overview</a></li>
					<li><a href="">process</a></li>
					<li><a href="">our beans and sugar</a></li>
					<li><a href="">contact us</a></li>
				</ul>
			</li>

			<li><a href="">more</a>
				<ul>
					<li><a href="">retailer</a></li>
					<li><a href="">wholesale</a></li>
					<li><a href="">private event</a></li>
					<li><a href="">jobs</a></li>	
				</ul>
			</li>
		</ul>
	</nav>
`

const header = document.querySelector('header');
header.innerHTML = navbar;