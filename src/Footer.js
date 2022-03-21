import React from 'react'

function Footer() {
    return (
    <footer id="footer-container">
		<div className="footer">
			<div className="description">Copyright &copy;</div>
		</div>
		<a href="https://www.facebook.com/" aria-label="Facebook" className="Facebook"> <i className="fab fa-facebook-square fa-2x"></i></a>
		<a href="https://www.instagram.com/" aria-label="Instagram" className="Instagram"> <i className="fab fa-instagram-square fa-2x"></i> </a>
		<a href="https://twitter.com/" aria-label="Twitter" className="Twitter"> <i className="fab fa-twitter-square fa-2x"></i> </a>
	</footer>
    )
}

export default Footer