import React from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
	componentDidMount(){
		const script = document.createElement('script');
		script.async = true;
		document.head.appendChild(script);
		script.src = './js/functions.js';
	}

	render() {
		return (
			<div>
				{/* Wrapper */}
				<div id="wrapper">
					{/* Header */}
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
									<button className="lines-button x"><span className="lines" /></button>
								</div>
								{/*end: Navigation Resposnive Trigger*/}
								{/*Navigation*/}
								<div id="mainMenu" className="light">
									<div className="container">
										<nav>
											<ul>
												<li><a href="#slider" className="scroll-to">Home</a></li>
												<li><Link to="/about">About US</Link></li>
												<li><a href="#section4" className="scroll-to">Facts</a></li>
												<li><a href="#section5" className="scroll-to">Gallery</a></li>
												<li><a href="#section3" className="scroll-to">Services</a></li>
												<li><a href="#section6" className="scroll-to">Contact</a></li>
											</ul>
										</nav>
									</div>
								</div>
								{/*end: Navigation*/}
							</div>
						</div>
					</header>
					{/* end: Header */}
					{/* Inspiro Slider */}
					<div id="slider" className="inspiro-slider arrows-large arrows-creative dots-creative" data-height-xs={360}>
						{/* Slide 1 */}
						<div className="slide background-overlay-gradient background-image" style={{ backgroundImage: 'url("homepages/corporate-v7/images/1.jpg")' }}>
							<div className="container">
								<div className="slide-captions text-center text-light">
									{/* Captions */}
									<span className="strong" data-caption-animation="zoom-out"><a href="#" className="business"><span className="business">NUTECH CANCER BIOMARKERS</span></a>
									</span>
									<h2>Welcome to NUTECH CANCER BIOMARKERS INDIA PRIVATE LIMITED</h2>
									<div data-caption-animation="zoom-out">
										<a href="#modalYoutube" data-lightbox="inline" className="btn btn-rounded"><i className="fa fa-play" /> View our
                Work</a>
									</div>
									<div id="modalYoutube" className="modal" data-delay={3000} style={{ maxWidth: '700px', minHeight: '380px' }}>
										<h5>Check out our latest Video</h5>
										<div className="iframe-wrap m-b-20">
											<iframe id="youtube" width={560} height={315} src="https://www.youtube.com/embed/u0v1hgXfLhQ" frameBorder={0} allowFullScreen />
										</div>
									</div>
									{/* end: Captions */}
								</div>
							</div>
						</div>
						{/* end: Slide 1 */}
						{/* Slide 2 */}
						<div className="slide background-overlay-gradient kenburns background-image" style={{ backgroundImage: 'url("homepages/corporate-v7/images/2.jpg")' }}>
							<div className="container">
								<div className="slide-captions text-left text-light">
									{/* Captions */}
									<span className="strong"><a href="#" className="business"><span className="business">NUTECH CANCER
                  BIOMARKERS</span></a>
									</span>
									<h2>Dedicated to investing in your prostate health.</h2>
									<a type="button" href="#section2" className="btn btn-default scroll-to"><span className="btn-label"><i className="fa fa-check" /></span>Explore more</a>
									<a type="button" href="#section6" className="btn btn-light scroll-to">Contact</a>
									{/* end: Captions */}
								</div>
							</div>
						</div>
						{/* end: Slide 2 */}
					</div>
					{/*end: Inspiro Slider */}
					{/* About us */}
					<section id="section2">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12 text-left">
									<h2 className="text-left">Our Health Mission</h2>
									<h3 className="m-b-20 text-left">Nutech Cancer Biomarkers India Pvt. Ltd. is a recognized Start-up by the
										Department of
              Industrial Policy and Promotion, Government of India.</h3>
									<p className="lead text-left">Prostate (present under the urinary bladder) is only found in men and there are
										a total of
										12-13 crore (age ≈40-65) Indian males based upon the 2011 Census data. The age specific
										incidence of
										Prostate Cancer (PCa) increases after age 60, and in 2 years, Indian Council of Medical
										Research has
										observed an alarming increase in prostate cancer incidence. Currently, there is no adequate
										monitoring or
										screening for EARLY PCa detection in India. If this increased PCa incidences is not
										addressed urgently; it
										will eventually cause a huge economic burden to both; the individual with PCa as well as to
										the healthcare
										system in India. The cost for prostate cancer treatments goes in lacs of rupees and no
										guarantee of cure.
										Therefore, our company strongly believes that prevention is cheaper, affordable and the
										cancer easily
										manageable if caught early. Our SeroMark-1 India test is the only early prostate cancer
										finding test that
										fulfills that urgent unmet need to address this unforeseen devastating health problem in
										Indian males.
										IT'S WORTH INVESTING IN YOURSELF"
            </p>
									<Link to="/about" className="btn btn-dark btn-outline btn-rounded">Read More</Link>
								</div>
								{/* end features box */}
							</div>
						</div>
					</section>
					{/* end: About us */}
					{/* Call to action */}
					<section className="background-grey text-center">
						<div className="container">
							<div className="col-md-12">
								<h3 style={{ fontWeight: 100 }}>We’re Just Getting Started! Explore the possibilities...</h3>
								<br />
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">Find risk early</a>
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">Eliminate costly treatment for
            prostate cancer</a>
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">At home service</a>
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">Reduce risk of
            spreading/developing prostate cancer</a>
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">Ayurvedic treatment for
            cancer</a>
								<a type="button" href="#section6" className="btn btn-default btn-rounded scroll-to">First blood test in India</a>
							</div>
						</div>
					</section>
					{/* end: Call to action */}
					{/* Services */}
					<section id="section4" className="parallax background-overlay-dark p-t-100 p-b-100" data-stellar-background-ratio="0.7">
						<div className="container xs-text-center sm-text-center text-light text-left">
							<div className="row">
								<div className="col-md-8 p-b-60">
									<h2 className="m-b-20">A Company helping Physicians Who Care</h2>
									<p className="lead">A Self-ordered test via phone or web-site is also available to the following:
										Physicians/doctors, Government and Corporate supported healthcare for financially
										underprivileged, servicemen, volunteers, public servants e.t.c, Blood collection centers,
										Health camps, Hospitals, Private healthcare providers, Large companies providing healthcare
              packages and health insurance companies.</p>
									<p className="lead">Not only will NUTECH's SeroMark-1 test help you and your doctors work together
										to address your existing prostate condition early, they will also strive to help you improve
										your quality of life, achieve your wellness goals, and heal your body to live your best life
              possible. </p>
									<a href="http://www.freepatentsonline.com/9903878.html" target="”_blank”" className="btn btn-light btn-outline btn-rounded">Patent Recognized by Govt. of India</a>
								</div>
								<div className="col-md-4">
									<div className="col-md-12">
										<div className="text-center">
											<div className="counter text-large"> <span data-speed={3000} data-refresh-interval={30} data-to={10} data-from={0} data-seperator="true" /> </div>
											<div className="seperator seperator-small" />
											<p>YEARS</p>
										</div>
									</div>
									<div className="col-md-12">
										<div className="text-center">
											<div className="counter text-large"> <span data-speed={4550} data-refresh-interval={30} data-to={254} data-from={50} data-seperator="true" /> </div>
											<div className="seperator seperator-small" />
											<p>LIVES SAVED</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Our Work */}
					<section id="section5">
						<div className="container">
							<div className="row">
								<div className="col-md-7">
									<div className="heading section-title text-left">
										<h2>NUTECH Gallery</h2>
										<p>Glimpse of success of NUTECH CANCER BIOMARKERS INDIA PRIVATE LIMITED.</p>
									</div>
								</div>
								<div className="col-md-2  col-md-offset-3 p-t-60">
									<a href="#section6" className="btn btn-light btn-shadow btn-rounded btn-reveal btn-reveal-left scroll-to"><span>
										Contact </span><i className="fa fa-long-arrow-right" /></a>
								</div>
							</div>
							{/* Portfolio */}
							<div id="portfolio" className="grid-layout portfolio-3-columns" data-margin={0}>
								{/* portfolio item */}
								<div className="portfolio-item no-overlay pf-illustrations pf-media pf-icons pf-Media pf-graphics">
									<div className="portfolio-item-wrap">
										<div className="portfolio-slider">
											<div className="carousel dots-inside dots-dark arrows-dark" data-items={1} data-loop="true" data-autoplay="true" data-animate-in="fadeIn" data-animate-out="fadeOut" data-autoplay-timeout={1500}>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/1.jpg"><img src="images/portfolio/1.jpg" alt="" /></a>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/1_1.jpg"><img src="images/portfolio/1_1.jpg" alt="" /></a>
											</div>
										</div>
									</div>
								</div>
								{/* end: portfolio item */}
								{/* portfolio item */}
								<div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
									<div className="portfolio-item-wrap">
										<div className="portfolio-image">
											<a href="#"><img src="images/portfolio/2.jpg" alt="" /></a>
										</div>
										<div className="portfolio-description">
											<a title="Tracomo module" data-lightbox="image" href="images/portfolio/2.jpg"><i className="fa fa-expand" /></a>
										</div>
									</div>
								</div>
								{/* end: portfolio item */}
								{/* portfolio item */}
								<div className="portfolio-item large-width  img-zoom pf-illustrations pf-media pf-icons pf-Media">
									<div className="portfolio-item-wrap">
										<div className="portfolio-image">
											<a href="#"><img src="images/portfolio/3.jpg" alt="" /></a>
										</div>
										<div className="portfolio-description">
											<a title="Tracomo module" data-lightbox="image" href="images/portfolio/3.jpg">
												<h3>Let's Go Outside</h3>
												<span>Outdoor Tracomos</span>
											</a>
										</div>
									</div>
								</div>
								{/* end: portfolio item */}
								{/* portfolio item */}
								<div className="portfolio-item overlay-light img-zoom pf-illustrations pf-media pf-icons pf-Media pf-graphics">
									<div className="portfolio-item-wrap">
										<div className="portfolio-slider">
											<div className="carousel dots-inside arrows-dark dots-dark" data-items={1} data-loop="true" data-autoplay="true" data-autoplay-timeout={1800}>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/4.jpg"><img src="images/portfolio/4.jpg" alt="" /></a>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/5.jpg"><img src="images/portfolio/5.jpg" alt="" /></a>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/6.jpg"><img src="images/portfolio/6.jpg" alt="" /></a>
											</div>
										</div>
										<div className="portfolio-description" data-lightbox="gallery">
											<a title="Tracomo module" data-lightbox="gallery-item" href="images/portfolio/4.jpg">
												<h3>Awards Collection</h3>
												<span>International Awards Won</span>
											</a>
											<a title="Tracomo Awards" data-lightbox="gallery-item" href="images/portfolio/5.jpg" className="hidden" />
											<a title="Tracomo Awards" data-lightbox="gallery-item" href="images/portfolio/6.jpg" className="hidden" />
										</div>
									</div>
								</div>
								{/* end: portfolio item */}
								{/* portfolio item */}
								<div className="portfolio-item no-overlay pf-illustrations pf-media pf-icons pf-Media pf-graphics">
									<div className="portfolio-item-wrap">
										<div className="portfolio-slider">
											<div className="carousel dots-inside dots-dark arrows-dark" data-items={1} data-loop="true" data-autoplay="true" data-animate-in="fadeIn" data-animate-out="fadeOut" data-autoplay-timeout={1500}>
												<a title="Tracomo camera module" data-lightbox="image" href="images/portfolio/7.jpg"><img src="images/portfolio/7.jpg" alt="" /></a>
												<a title="Tracomo module" data-lightbox="image" href="images/portfolio/8.jpg"><img src="images/portfolio/8.jpg" alt="" /></a>
											</div>
										</div>
									</div>
								</div>
								{/* end: portfolio item */}
							</div>
							{/* end: Portfolio */}
							{/* end: Portfolio */}
						</div>
					</section>
					{/* end: Our Work */}
					{/* Post item quote*/}
					<div className="container text-left">
						<div className="post-item quote">
							<div className="post-item-wrap">
								<div className="post-quote-img">
									<a href="blog.html" target="_blank">
										<img src="images/quote.png" />
									</a>
									<span className="post-meta-category"><a href="blog.html">Blog</a></span>
								</div>
								<div className="post-item-description">
									<span className="post-meta-date"><i className="fa fa-calendar-o" />Apr 24, 2019</span>
									<h2><a href="blog.html" target="_blank">Let’s Shake off Complacency and Create a Sense of Urgency</a></h2>
									<p>Monitoring for Prostate Cancer (पौरुष ग्रंथि (प्रोस्टेट) कैंसर) in India Introducing SeroMark-1.
										SeroMark-1 testing which is accurate than any known biomarkers for detecting prostate cancer will be
										offered in India for only Rs. 4000/test (90% OFF from what it costs in USA) for early detection of
              prostate cancer from serum ...</p>
									<a href="blog.html" target="_blank" className="item-link">Read More <i className="fa fa-arrow-right" /></a>
								</div>
							</div>
						</div>
						{/* end: Post item*/}
					</div>
					{/* end: Post item*/}
					{/* end: Know more */}
					<section id="section3" className="p-t-120 p-b-120">
						<div className="container">
							<div className="row">
								<div className="col-md-7">
									<div className="heading section-title text-left">
										<h2>Our popular tests</h2>
										<p>These are the most popular tests at NUTECH CANCER BIOMARKERS INDIA PVT. LTD. However, you will get more
                options when you register.</p>
									</div>
								</div>
								<div className="col-md-2  col-md-offset-3 p-t-60">
									<a href="#section6" className="btn btn-light btn-shadow btn-rounded btn-reveal btn-reveal-left scroll-to"><span>
										Register </span><i className="fa fa-long-arrow-right" /></a>
								</div>
							</div>
							<div className="row">
								<div className="pricing-table">
									<div className="col-md-4 col-sm-12 col-xs-12">
										<div className="plan">
											<div className="plan-header">
												<h4>SeroMark-1 Test only</h4>
												<p className="text-muted">SeroMark-1 Test only</p>
												<div className="plan-price"><sup>₹</sup>3000</div>
											</div>
											<div className="plan-list">
												<ul>
													<li><i className="fa fa-check" /> bundle test- Discounted 50%</li>
													<li><i className="fa fa-check" />get PSA Tests FREE</li>
												</ul>
												<div className="plan-button">
													<Link to="/login" className="btn btn-light">Register Now</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-12 col-xs-12">
										<div className="plan featured">
											<div className="plan-header">
												<h4>SeroMark-1 Screening Test</h4>
												<p className="text-muted">Bundle Test</p>
												<div className="plan-price"><sup>₹</sup>4000</div>
											</div>
											<div className="plan-list">
												<ul>
													<li><i className="fa fa-check" /> bundle test- Discounted 50%</li>
													<li><i className="fa fa-check" />get PSA Tests FREE</li>
												</ul>
												<div className="plan-button">
													<a href="#" className="btn">Register Now</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-12 col-xs-12">
										<div className="plan">
											<div className="plan-header">
												<h4>Total PSA-tPSA Test</h4>
												<p className="text-muted">get PSA Tests FREE</p>
												<div className="plan-price"><sup>₹</sup>5000</div>
											</div>
											<div className="plan-list">
												<ul>
													<li><i className="fa fa-check" /> bundle test- Discounted 50%</li>
													<li><i className="fa fa-check" />get PSA Tests FREE</li>
												</ul>
												<div className="plan-button">
													<a href="#" className="btn btn-light">Register Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Contact */}
					<section id="section6" className="p-t-150 p-b-200" style={{ backgroundImage: 'url(homepages/branding/images/background-4.png)', backgroundPosition: '71% 22%' }}>
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="row text-left">
										<div className="col-md-12">
											<h2 className="m-b-10">Get in Touch with Us</h2>
											<p className="lead">Our Headquarters are in Mumbai, India. </p>
										</div>
										<div className="col-md-6 m-b-30">
											<address>
												<strong>Headquarters:</strong><br />
												Office#4, Green Meadows 5F,<br />
												Lokhandwala Township,<br />
												Kandivali(E), Mumbai-400101
                </address>
											<abbr><strong>Phone:</strong></abbr> +91 88986-64466
                <br />
											<abbr><strong>Fax:</strong></abbr> +91-22-2966 3990
                <br />
											<abbr><strong>Email:</strong></abbr> tushar@ncbiprivatelimited.com
              </div>
										<div className="col-md-12">
											<h4>We are social</h4>
											<div className="social-icons social-icons-light social-icons-colored-hover">
												<ul>
													<li className="social-facebook"><a href="https://www.facebook.com/nutechbiomarkers/"><i className="fa fa-facebook" /></a></li>
													<li className="social-youtube"><a href="https://www.youtube.com/user/kelavkar"><i className="fa fa-youtube" /></a></li>
													<li className="social-linkedin"><a href="https://www.linkedin.com/company/nutechcancerbiomarkers/"><i className="fa fa-linkedin" /></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5 col-md-offset-1 text-left">
									<form className="widget-contact-form" action="include/contact-form.php" role="form" method="post">
										<div className="row">
											<div className="form-group col-sm-6">
												<label htmlFor="name">Name</label>
												<input type="text" aria-required="true" name="widget-contact-form-name" className="form-control required name" placeholder="Enter your Name" />
											</div>
											<div className="form-group col-sm-6">
												<label htmlFor="email">Email</label>
												<input type="email" aria-required="true" name="widget-contact-form-email" className="form-control required email" placeholder="Enter your Email" />
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="message">Message</label>
											<textarea type="text" name="widget-contact-form-message" rows={9} className="form-control required" placeholder="Enter your Message" defaultValue={""} />
										</div>
										<div className="form-group">
											<button className="btn btn-light" type="submit" id="form-submit"><i className="fa fa-paper-plane" />&nbsp;Send
                  message</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					{/* end: Contact */}
					<div>
						<iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31252.240593704253!2d72.86903232064425!3d19.194584905496093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3612caeddd197c5!2sApplied%20Bioscience%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1570398044777!5m2!1sen!2sus" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
					</div>
					{/* Footer */}
					<footer id="footer" className="footer-light">
						<div className="footer-content">
							<div className="container">
								<div className="row text-left">
									<div className="col-md-4">
										{/* Footer widget area 1 */}
										<div className="widget clearfix widget-contact-us" style={{ backgroundImage: 'url("images/world-map-dark.png")', backgroundPosition: '50% 20px', backgroundRepeat: 'no-repeat' }}>
											<h4>About NUTECH CANCER BIOMARKERS</h4>
											<ul className="list-icon">
												<li><i className="fa fa-map-marker" /> Office#4, Green Meadows 5F,
                    <br /> Lokhandwala Township,
                    <br /> Kandivali(E), Mumbai-400101</li>
												<li><i className="fa fa-phone" /> +91 88986-64466</li>
												<li><i className="fa fa-fax" />+91-22-2966 3990</li>
												<li><i className="fa fa-envelope" /> <a href="mailto:tushar@ncbiprivatelimited.com">tushar@ncbiprivatelimited.com</a>
												</li>
												<li>
													<br /><i className="fa fa-clock-o" />Monday - Friday: <strong>09:00 - 17:00</strong>
													<br />Saturday - Sunday: <strong>Closed</strong>
												</li>
											</ul>
											{/* Social icons */}
											<div className="social-icons social-icons-border float-left m-t-20">
												<ul>
													<li className="social-facebook"><a href="https://www.facebook.com/nutechbiomarkers/"><i className="fa fa-facebook" /></a></li>
													<li className="social-youtube"><a href="https://www.youtube.com/user/kelavkar"><i className="fa fa-youtube" /></a></li>
													<li className="social-linkedin"><a href="https://www.linkedin.com/company/nutechcancerbiomarkers/"><i className="fa fa-linkedin" /></a></li>
												</ul>
											</div>
											{/* end: Social icons */}
										</div>
										{/* end: Footer widget area 1 */}
									</div>
									<div className="col-md-2">
										{/* Footer widget area 2 */}
										<div className="widget">
											<h4>Quick LInks</h4>
											<ul className="list-icon list-icon-arrow">
												<li><a href="#">Home</a></li>
												<li><Link to="/about" className="scroll-to">About</Link></li>
												<li><a href="#section3" className="scroll-to">Services</a></li>
												<li><a href="#section4" className="scroll-to">Facts</a></li>
												<li><a href="#section5" className="scroll-to">Gallery</a></li>
												<li><a href="#section6" className="scroll-to">Contact</a></li>
											</ul>
										</div>
										{/* end: Footer widget area 2 */}
									</div>
								</div>
							</div>
						</div>
						<div className="copyright-content">
							<div className="container">
								<div className="copyright-text text-center">© 2019 NUTECH CANCER BIOMARKERS INDIA PRIVATE LIMITED.
									All Rights
            Reserved.</div>
							</div>
						</div>
					</footer>
					{/* end: Footer */}
				</div>
				{/* end: Wrapper */}
				{/* Go to top button */}
				<a id="goToTop"><i className="fa fa-angle-up top-icon" /><i className="fa fa-angle-up" /></a>
			</div>

		);
	}
}

export default HomeComponent;