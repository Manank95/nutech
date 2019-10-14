import React from 'react';
import { Link } from 'react-router-dom';

class BlogComponent extends React.Component {
	componentDidMount(){
		const script = document.createElement('script');
		script.async = true;
		document.head.appendChild(script);
		script.src = './js/functions.js';
	}
	render() {
		return (
			<div>
				<div id="wrapper">
					<header id="header" className="header-transparent header-fullwidth dark">
						<div id="header-wrap">
							<div className="container">
								{/*Logo*/}
								<div id="logo">
									<a href="index.html" className="logo" data-dark-logo="images/logo-dark.png">
										<img src="images/logo.png" alt="NUTECH Logo" />
									</a>
								</div>
								{/*End: Logo*/}
								{/*Header Extras*/}
								{/*end: Header Extras*/}
								{/*Navigation Resposnive Trigger*/}
								<div id="mainMenu-trigger">
									<button className="lines-button x"> <span className="lines" /> </button>
								</div>
								{/*end: Navigation Resposnive Trigger*/}
								{/*Navigation*/}
								<div id="mainMenu" className="light">
									<div className="container">
										<nav>
											<ul>
												<li><a href="index.html" className="scroll-to">Home</a></li>
												<li><a href="about.html" className="scroll-to">About US</a></li>
												<li><a href="index.html#section4" className="scroll-to">Facts</a></li>
												<li><a href="index.html#section5" className="scroll-to">Gallery</a></li>
												<li><a href="index.html#section3" className="scroll-to">Services</a></li>
												<li><a href="index.html#section6" className="scroll-to">Contact</a></li>
											</ul>
										</nav>
									</div>
								</div>
								{/*end: Navigation*/}
							</div>
						</div>
					</header>

					<section id="page-title" className="page-title-center text-light background-overlay-dark">
						<div className="container">
							<div className="page-title">
								<span className="post-meta-category">Health Awareness</span>
								<h1>Let’s Shake off Complacency and Create a Sense of Urgency</h1>
								<div className="small m-b-20">April 14, 2019 | by Dr. Uddhav Kelavkar</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default BlogComponent;