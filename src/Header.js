import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
<header>
		<p id="Fitlife">FitLife</p>
		<nav id="navbar">
			<section className="container">
				<ul>
					<li><Link to="/Contact">Contact</Link></li>
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/Home">Home</Link></li>
				</ul>
			</section>
		</nav>
	</header>
    )
}

export default Header