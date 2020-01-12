import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import config from './../config';
import AuthService from './../auth/AuthService';
import { ReCaptcha } from 'react-recaptcha-v3';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      email: '',
      comment: '',
      status: null,
      message: '',
      isLoadingSubmit: false,
      checkBoxMsg1: false,
      checkBoxMsg2: false,
      checkBoxMsg3: false,
      checkBoxMsg4: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.Auth = new AuthService();
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log("hello")
  }
  componentDidMount() {
    window.updateUIAfterReact();
  }

  handleCheckbox(arg, event) {
    if(arg === 'a' ) this.setState({ checkBoxMsg1: !this.state.checkBoxMsg1 });
    else if(arg === 'b' ) this.setState({ checkBoxMsg2: !this.state.checkBoxMsg2 });
    else if(arg === 'c' ) this.setState({ checkBoxMsg3: !this.state.checkBoxMsg3 });
    else if(arg === 'd' ) this.setState({ checkBoxMsg4: !this.state.checkBoxMsg4 });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoadingSubmit: true,
      message: ''
    });
    try {
      let message = '';
      if (this.state.checkBoxMsg1) message = message + 'Checkbox1: I am a family or specialist doctor and I would like to offer the Seromark1®-Prostate Cancer Screening test to my patients \n\n';
      if (this.state.checkBoxMsg2) message = message + 'Checkbox2: I would like to become an independent provider / distributor of the Seromark1®-Prostate Cancer Screening test outside the US(In India) \n\n';
      if (this.state.checkBoxMsg3) message = message + 'Checkbox3: I am a patient interested in the Seromark1®-Prostate Cancer Screening test \n\n';
      if (this.state.checkBoxMsg4) message = message + 'Checkbox4: I would like to join the mailing list and be kept informed about Seromark1®-Prostate Cancer Screening and Nutech Cancer Biomarkers. \n\n';
      message = message + 'Custom Message: ' + this.state.comment;
      let res = await this.Auth.contactUs(this.state.name, this.state.email, this.state.contact, message);
      if (res.status === 200){
        return this.setState({
          isLoadingSubmit: false,
          name: '',
          contact: '',
          email: '',
          comment: '',
          status: res.status,
          message: res.message
        });
      }
      return this.setState({
        isLoadingSubmit: false,
        name: '',
        contact: '',
        email: '',
        comment: '',
        status: 400,
        message: 'Something went wrong! please try again after some time.'
      })
    } catch (e) {
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="modalYoutube1" className="modal modal-auto-open" data-delay={1000} style={{maxWidth: '700px', minHeight: '380px'}}>
          <div className="text-center">
            <h5>All about Nutech Cancer Biomarkers</h5>
            <div className="iframe-wrap m-b-20">
              <iframe title="nutechanimation" id="youtube" width={560} height={315} src="https://www.youtube.com/embed/H524NGstHrQ" frameBorder={0} allowFullScreen />
            </div>
          </div>
        </div>

        {/* Inspiro Slider */}
        <div id="slider" className="inspiro-slider arrows-large arrows-creative dots-creative" data-height-xs={360}>
          {/* Slide 1 */}
          <div className="slide background-overlay-gradient background-image" style={{ backgroundImage: 'url("/images/banner/1.jpg")' }}>
            <div className="container">
              <div className="slide-captions text-center text-light">
                {/* Captions */}
                <span className="strong" data-caption-animation="zoom-out"><h4 className="business"><span className="business">NUTECH CANCER BIOMARKERS</span></h4>
                </span>
                <h2>Welcome to Nutech Cancer Biomarkers India Pvt. Ltd.</h2>
                <h4>Let’s invest in your prostate health</h4>
                <div data-caption-animation="zoom-out">
                  <button href="#modalYoutube" data-lightbox="inline" className="btn btn-rounded"><i className="fa fa-play" /> All about us</button>
                </div>
                <div id="modalYoutube" className="modal" data-delay={3000} style={{ maxWidth: '700px', minHeight: '380px' }}>
                  <h5>Check out our latest Video</h5>
                  <div className="iframe-wrap m-b-20">
                    <iframe title="youtubetitle" id="youtube" width={560} height={315} src="https://www.youtube.com/embed/H524NGstHrQ" frameBorder={0} allowFullScreen />
                  </div>
                </div>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 1 */}
          {/* Slide 2 */}
          <div className="slide background-overlay-gradient kenburns background-image" style={{ backgroundImage: 'url("/images/banner/2.jpg")' }}>
            <div className="container">
              <div className="slide-captions text-left text-light">
                {/* Captions */}
                <span className="strong"><h4 className="business"><span className="business">NUTECH CANCER
                  BIOMARKERS</span></h4>
                </span>
                <h2>Dedicated to investing in your prostate health.</h2>
                <a type="button" href="#mission" className="btn btn-default scroll-to"><span className="btn-label"><i className="fa fa-check" /></span>Explore more</a>
                <a type="button" href="#contact" className="btn btn-light scroll-to">Contact</a>
                <div data-caption-animation="zoom-out">
                  <button href="#modalYoutube2" data-lightbox="inline" className="btn btn-rounded"><i className="fa fa-play" /> Video</button>
                </div>
                <div id="modalYoutube2" className="modal" data-delay={3000} style={{ maxWidth: '700px', minHeight: '380px' }}>
                  <h5>Check out our latest Video</h5>
                  <div className="iframe-wrap m-b-20">
                    <iframe title="youtubetitle" id="youtube" width={560} height={315} src="https://www.youtube.com/embed/u0v1hgXfLhQ" frameBorder={0} allowFullScreen />
                  </div>
                </div>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        {/*end: Inspiro Slider */}
        {/* About us */}
        <section id="mission">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-left">
                <h2 className="text-left">Our Health Mission</h2>
                <h3 className="m-b-20 text-left">Nutech Cancer Biomarkers India Pvt. Ltd. is a Start-up recognised  by the Department of Industrial Policy and Promotion, Government of India.</h3>
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
                <Link to="/about#whoweare" className="btn btn-dark btn-outline btn-rounded">Read More</Link>
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
              <a type="button" href="#contact" className="btn btn-default btn-rounded scroll-to">Find risk early</a>
              <a type="button" href="#contact" className="btn btn-default btn-rounded scroll-to">Eliminate costly cancer treatment</a>
              <a type="button" href="#contact" className="btn btn-default btn-rounded scroll-to">At home service</a>
              <a type="button" href="#contact" className="btn btn-default btn-rounded scroll-to">Stop
            developing prostate cancer</a>
              <a type="button" href="#ayurvedic" className="btn btn-default btn-rounded scroll-to">Ayurvedic treatment for
            cancer</a>
              <a type="button" href="#contact" className="btn btn-default btn-rounded scroll-to">First blood test in India</a>
            </div>
          </div>
        </section>
        <section id="ayurvedic">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-left">
                <h2 className="text-left">Ayurvedic treatment by Dr. Swathi Giri</h2>
                <h3 className="m-b-20 text-left">Ayurvedic treatment can stop further spread of prostate cancer.</h3>
                <p className="lead text-left">Dr. Swathi Giri is one of the celebrated Ayurvedic physicians in India,
                and practiced Ayurvedic medicine for several years. Dr. Swathi's clinic was established in 2001,
                and since then, she has drawn scores of patients, including cancer patients. She is proficient in identifying,
                diagnosing (nadi pariksha) various health issues and treating them successfully by Ayurved.
                </p>
                <p className="lead text-left">Dr. Giri is an expert in identifying diverse set of health ailments and conditions including cancers and can treat them early.
                Particularly, if detected early, via available tests such as <Link to="/book"><u>SeroMark-1</u></Link>,
                her expertise in Ayurvedic treatment can stop further spread of prostate cancer.
                </p>
                <p className="lead text-left">Dr. Giri’s clinic  is located in Manish Nagar, Nagpur, Maharashtra - 440015.
                Please visit website: <a href="http://drswathi.in" target="_blank" rel="noopener noreferrer"><u>www.drswathi.in</u></a> for more information.
                </p>
                
                <div data-caption-animation="zoom-out">
                  <a href="http://drswathi.in" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-outline btn-rounded">Website</a>
                  <button href="#modalYoutube3" data-lightbox="inline" className="btn btn-rounded"><i className="fa fa-play" /> Video</button>
                </div>
                <div id="modalYoutube3" className="modal" data-delay={3000} style={{ maxWidth: '700px', minHeight: '380px' }}>
                  <h5>A few words from Dr. Swathi Giri</h5>
                  <div className="iframe-wrSwathi Giriap m-b-20">
                    <iframe title="youtubetitle" id="youtube" width={560} height={315} src="https://www.youtube.com/embed/v6F-GWGKWQw" frameBorder={0} allowFullScreen />
                  </div>
                </div>
              </div>
              {/* end features box */}
            </div>
          </div>
        </section>
        {/* end: Call to action */}
        {/* Services */}
        <section id="facts" className="parallax background-overlay-dark p-t-100 p-b-100" data-stellar-background-ratio="0.7">
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
                <a href="http://www.freepatentsonline.com/9903878.html" target="”_blank”" className="btn btn-light btn-outline btn-rounded">Patent</a>
              </div>
              <div className="col-md-4">
                <div className="col-md-12">
                  <div className="text-center">
                    <div className="counter text-large"> <span data-speed={4000} data-refresh-interval={30} data-to={1} data-from={0} data-seperator="true" /> </div>
                    <div className="seperator seperator-small" />
                    <p>YEAR</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="text-center">
                    <div className="counter text-large"> <span data-speed={4550} data-refresh-interval={30} data-to={254} data-from={100} data-seperator="true" /> </div>
                    <div className="seperator seperator-small" />
                    <p>LIVES SAVED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Work */}
        <section id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="heading section-title text-left">
                  <h2>NUTECH Gallery</h2>
                  <p>Happy moments and some useful information.</p>
                </div>
              </div>
              <div className="col-md-2  col-md-offset-3 p-t-60">
                <a href="#contact" className="btn btn-light btn-shadow btn-rounded btn-reveal btn-reveal-left scroll-to"><span>
                  Contact </span><i className="fa fa-long-arrow-right" /></a>
              </div>
            </div>
            {/* Portfolio */}
            {/* portfolio item */}
            <div className="row">
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/1.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/1.jpg"><i className="fa fa-expand" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* end: portfolio item */}
              {/* portfolio item */}
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/2.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/2.jpg"><i className="fa fa-expand" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/3.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/3.jpg"><i className="fa fa-expand" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: portfolio item */}
            <div className="row">
              {/* portfolio item */}
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/4.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/4.jpg"><i className="fa fa-expand" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-item overlay-light img-zoom pf-illustrations pf-media pf-icons pf-Media pf-graphics">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-slider">
                      <div className="carousel dots-inside arrows-dark dots-dark" data-items={1} data-loop="true" data-autoplay="true" data-autoplay-timeout={1800}>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/about.jpg"><img src="/images/portfolio/about.jpg" alt="" /></a>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/about3.jpg"><img src="/images/portfolio/about3.jpg" alt="" /></a>
                      </div>
                    </div>
                    <div className="portfolio-description" data-lightbox="gallery">
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/about.jpg">
                        <h3>NUTECH Promotions</h3>
                        <span>know more</span>
                      </a>
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/about3.jpg" className="hidden">.</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-item overlay-light img-zoom pf-illustrations pf-media pf-icons pf-Media pf-graphics">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-slider">
                      <div className="carousel dots-inside arrows-dark dots-dark" data-items={1} data-loop="true" data-autoplay="true" data-autoplay-timeout={1800}>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/information.jpg"><img src="/images/portfolio/information.jpg" alt="" /></a>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/information1.jpg"><img src="/images/portfolio/information1.jpg" alt="" /></a>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/information2.jpg"><img src="/images/portfolio/information2.jpg" alt="" /></a>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/information2.jpg"><img src="/images/portfolio/information3.jpg" alt="" /></a>
                        <a title="NUTECH moments" data-lightbox="image" href="/images/portfolio/information2.jpg"><img src="/images/portfolio/information4.jpg" alt="" /></a>
                      </div>
                    </div>
                    <div className="portfolio-description" data-lightbox="gallery">
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/information.jpg">
                        <h3>Useful Information</h3>
                        <span>about prostate cancer</span>
                      </a>
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/information1.jpg" className="hidden">.</a>
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/information2.jpg" className="hidden">.</a>
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/information3.jpg" className="hidden">.</a>
                      <a title="NUTECH moments" data-lightbox="gallery-item" href="/images/portfolio/information4.jpg" className="hidden">.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Our Work */}
        {/* Post item quote*/}
        <div id="blog" className="container text-left">
          <div className="post-item quote">
            <div className="post-item-wrap">
              <div className="post-quote-img">
                <Link to="/blog" target="_blank">
                  <img src="/images/quote.png" alt="blog" />
                </Link>
                <Link to="/blog"><span className="post-meta-category">Blog</span></Link>
              </div>
              <div className="post-item-description">
                <span className="post-meta-date"><i className="fa fa-calendar-o" />Apr 24, 2019</span>
                <h2><Link to="/blog" target="_blank">Let’s Shake off Complacency and Create a Sense of Urgency</Link></h2>
                <p>Monitoring for Prostate Cancer (पौरुष ग्रंथि (प्रोस्टेट) कैंसर) in India Introducing SeroMark-1.
									SeroMark-1 testing which is accurate than any known biomarkers for detecting prostate cancer will be
									offered in India for only Rs. 4000/test (90% OFF from what it costs in USA) for early detection of
                  prostate cancer from serum ...</p>
                <Link to="/blog" target="_blank" className="item-link">Read More <i className="fa fa-arrow-right" /></Link>
              </div>
            </div>
          </div>
          {/* end: Post item*/}
        </div>
        {/* end: Post item*/}
        {/* end: Know more */}
        <section id="services" className="background-grey p-t-80 p-b-80">
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
                <a href="#contact" className="btn btn-light btn-shadow btn-rounded btn-reveal btn-reveal-left scroll-to"><span>
                  Contact Us </span><i className="fa fa-long-arrow-right" /></a>
              </div>
            </div>

            <div className="row">
              <div className="pricing-table">
              { config.services.map((item,index) => {
                  return (<div key={index} className="col-md-3 col-sm-12 col-xs-12">
                    <div className={index === Math.floor(config.services.length / 2)-1 ? "plan featured": "plan"}>
                      <div className="plan-header">
                        <h4>{item.testName}</h4>
                        <p className="text-muted">{item.description}</p>
                        <div className="plan-price"><sup>₹</sup>{item.testAmount}</div>
                      </div>
                      <div className="plan-list">
                        <ul>
                          {item.points.map((point, id) => {
                            return <li key={id}>{id===3 ? <span className="label label-default">NEW</span>: <i className="fa fa-check" />}{point}</li>
                          })}
                        </ul>
                        <div className="plan-button">
                          <Link to="/book" className="btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>)
                })
              }
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="p-t-80 p-b-80">
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
                      Kandivali (E), Mumbai-400101
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
                <h2>Drop us a line!</h2>
                <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <input type="text" name="name" className="form-control" placeholder="Enter your Name" value={this.state.name} onChange={(e) => this.handleChange(e)} required/>
                    </div>
                    <div className="form-group col-sm-6">
                      <input type="tel" pattern="[0-9]{10}" name="contact" className="form-control" placeholder="Phone No. (10 digits)" value={this.state.contact} onChange={(e) => this.handleChange(e)} required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Enter your Email" value={this.state.email} onChange={(e) => this.handleChange(e)} required/>
                  </div>
                  <div className="form-group m-b-0">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg1}
                          onChange={(event)=> this.handleCheckbox('a', event)}
                        />I am a family or specialist doctor and I would like to offer the Seromark1®-Prostate Cancer Screening test to my patients
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg2}
                          onChange={(event)=> this.handleCheckbox('b', event)}
                        />I would like to become an independent provider / distributor of the Seromark1®-Prostate Cancer Screening test outside the US(In India)
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg3}
                          onChange={(event)=> this.handleCheckbox('c', event)}
                        />I am a patient interested in the Seromark1®-Prostate Cancer Screening test
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg4}
                          onChange={(event)=> this.handleCheckbox('d', event)}
                        />I would like to join the mailing list and be kept informed about Seromark1®-Prostate Cancer Screening and Nutech Cancer Biomarkers.
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea type="text" name="comment" rows={4} className="form-control required" placeholder="Enter your Message" value={this.state.comment} onChange={(e) => this.handleChange(e)} required/>
                  </div>
                  <ReCaptcha
                    sitekey={config.sitekey}
                    action='login'
                    verifyCallback={this.verifyCallback}
                  />
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <button className="btn btn-light" type="submit"><i className="fa fa-paper-plane" />&nbsp;Send message</button>
                    </div>
                    {this.state.isLoadingSubmit && (<div className="text-center row loader-inner line-scale-pulse-out-rapid">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>)}
                  </div>
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible" : "alert alert-danger alert-dismissible"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end: Contact */}
        <div>
          <iframe title="contact-map" src="https://maps.google.com/maps?q=Green%20Meadows%2C%20Mira%20Road%20East%2C%20Lokhandwala%20Twp%2C%20Kandivali%2C%20Mumbai%2C%20Maharashtra%20400101%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
        </div>
        {/* Footer */}
        <FooterComponent />
        {/* end: Footer */}
        {/* end: Wrapper */}
        {/* Go to top button */}
        <a href="#home" id="goToTop"><i className="fa fa-angle-up top-icon" /><i className="fa fa-angle-up" /></a>
      </div>

    );
  }
}

export default HomeComponent;