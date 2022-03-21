import React from 'react'

function Home() {
    return(
        <section id="showcase1">
		<div className="showcasetext">
			<h1>It starts with you.</h1> </div>
            <div id="slide-container">
                <span id="slider-image-1"></span>
                <span id="slider-image-2"></span>
                <span id="slider-image-3"></span>
                <div id="image-container">
                    <img src="images/quote1.png" id="slider-image" alt="slideImg1"/>
                    <img src="images/quote2.png" id="slider-image" alt="slideImg2"/>
                    <img src="images/quote3.png" id="slider-image" alt="slideImg3"/>
                </div>
                <div id="button-container">
                    <a href="#slider-image-1" id="slider-button" aria-label="btn1"></a>
                    <a href="#slider-image-2" id="slider-button" aria-label="btn2"></a>
                    <a href="#slider-image-3" id="slider-button" aria-label="btn3"></a>
                </div>
</div>
	</section>
    
    )
}

export default Home