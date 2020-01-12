import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';

class AboutComponent extends React.Component {
  componentDidMount() {
    window.updateUIAfterReact();
  }
  render() {
    return (
      <div>
        <Nav />
        <div id="whoweare" className="inspiro-slider arrows-large arrows-creative dots-creative" data-height-xs={360}>
          {/* Slide 2 */}
          <div className="slide background-overlay-dark kenburns">
            <div className="container">
              <div className="slide-captions text-center text-light">
                {/* Captions */}
                <span className="strong">Who we are</span>
                <h1>About the company</h1>
                {/* end: Captions */}
                <h4>Let’s invest in your prostate health</h4>
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        {/*end: Inspiro Slider */}
        <section style={{ padding: '50px' }}>
          <div className="row">
            <div className="col-md-3">
              <div className="heading heading text-left">
                <h2>Experience and Professionalism at NUTECH</h2>
                <h4>"Managing prostate health is your savings account. Let us help you guard your principal assets early."</h4>
              </div>
            </div>
            <div className="col-md-9 text-left">
              <div className="col-md-6">With years of experience, our medical team will assess you and create a custom recovery
								plan that's right for you. We understand the importance of educating you on the most effective ways to take
            care of your body, so that you can heal quickly. <br /> <br />
                <p><b><i>Uddhav P. Kelavkar, Ph.D, MBA, (Founding member,
                  Managing Director)</i></b> founded NuTech Cancer Biomarkers India Pvt. Ltd in 2017. He has led the
								translational
								research programs in Urology at several institutions including Emory University, University of Pittsburgh
								and Mercer University particularly in Prostate and Bladder cancers. Dr. Kelavkar received his Doctor of
								Philosophy degree in Microbiology from the Maharaja Sayajirao University of Baroda, India and MBA degree
								from Stetson School of Business, Mercer University, USA. He completed postdoctoral training at the
								University of Louisville School of Medicine in Kentucky, Clark Atlanta University in Georgia, and at the
								Michigan Genome Center. Dr. Kelavkar was Assistant Professor at Emory University, Atlanta before moving to
								the University of Pittsburgh, School of Medicine. He came to Savannah from the University of Pittsburgh,
								School of Medicine where he served as Assistant Professor of Hematology/Oncology in the Prostate and
								Urologic Cancer Center. He has published more than 40 published papers in peer-reviewed research journals
								and written two book chapters. He has been invited to lecture at several national and international
								conferences. His research has been funded by the American Cancer Society, the Department of Defense
								Prostate
								Cancer Research Program, and the National Cancer Institute, National Institutes of Health (NIH). He also
								served on numerous national and international study sections including NIH and the Department of Defense
              Prostate Cancer Research Programs. He has a patent for the SeroMark-1 technology.</p>
              </div>
              <div className="col-md-6">
                <p><b><i>Kalpana Patel Kelavkar, BA (Founding Member and Director)</i></b> Before joining NuTech in 2017 as
									a
									Director, she served as managing partner of Sun and Sea Enterprises, LLC, as well as Managing Broker of
									KPHotelbrokerage, LLC since 2005. She is a second-generation hotelier with a Business Associates degree
									from
									TriCounty Technical College in Pendleton, S.C., and has been certified by Cornell University as Hotel
									Broker
									(CHB). She also has earned International Property Specialist certification from the National Association
									of
									Realtors and a Financial Service Representative certification from the United Jersey Bank. Kalpana has
									been
              a Lifetime member of AAHOA and served as a member on its board.</p><br />
                <p><b><i>Tushar Barad, MS, BA (Director)</i></b> He is the Chief Managing Director and Founder of
									Applied Bioscience India Private Limited and has a Master’s degree in Microbiology with over 30 years of
              experience in distribution and sales.</p>
              </div>
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0088841" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-outline btn-rounded scroll-to">Find out More</a>
            </div>
          </div>
        </section>


        {/* Team Start */}
        <section id="team" className="background-grey p-t-60 p-b-60">
        <div className="container">
          <h2>Our Team</h2>
          <div className="row team-members team-members-shadow m-b-40">
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-image">
                  <img src="/images/team/druddhav.jpeg" alt='Dr. Uddhav Kelavkar' />
                </div>
                <div className="team-desc">
                  <h3>Dr. Uddhav Kelavkar</h3>
                  <span>Managing Director</span>
                  <p> </p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="mailto:uddhav@ncbiprivatelimited.com" data-width={80}>
                      <i className="fa fa-envelope" />
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-image">
                  <img src="/images/team/kalpana.jpg" alt='Kalpana Patel Kelavkar' />
                </div>
                <div className="team-desc">
                  <h3>Kalpana Patel Kelavkar</h3>
                  <span>Director</span>
                  <p> </p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="mailto:kalpana@ncbiprivatelimited.com" data-width={80}>
                      <i className="fa fa-envelope" />
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-image">
                  <img src="/images/team/tushar.jpg" alt='Tushar Barad'/>
                </div>
                <div className="team-desc">
                  <h3>Tushar Barad</h3>
                  <span>Director</span>
                  <p> </p>
                  <div className="align-center">
                    <a className="btn btn-xs btn-slide btn-light" href="mailto:tushar@ncbiprivatelimited.com" data-width={80}>
                      <i className="fa fa-envelope" />
                      <span>Mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="./downloads/Business_Organization_2019.tif">
            <button type="button" className="btn btn-outline"><i className="fa fa-download" /> Business Organization</button>
          </a>
        </div>
        </section>
        {/* Team End */}

        <section className="box-fancy section-fullwidth text-light p-b-0 p-t-0 text-left">
          <div className="row">
            <div style={{ backgroundColor: '#917d5d' }} className="col-md-4">
              <h1 className="text-large text-uppercase">01.</h1>
              <h3>Value we deliver</h3>
              <span>The cost of prostate cancer treatment in India can add up to lakhs of rupees and no guarantee of 100%
								cure! INSTEAD What would you pay to find out early and avoid or eliminate unnecessary treatments and the
								threat of prostate cancer? SeroMark-1 test costs only Rs. 4000. Can't go wrong!</span>
            </div>
            <div style={{ backgroundColor: '#a08c6c' }} className="col-md-4">
              <h1 className="text-large text-uppercase">02.</h1>
              <h3>What is SeroMark-1 test?</h3>
              <span>SeroMark-1 test is a patented technology that examines unique biomarkers in human blood (serum). An
								independent University research study as well as an independent study conducted in India suggests that the
                biomarkers may serve as early predictive serum markers for the presence or absence of PCa. </span>
            </div>
            <div style={{ backgroundColor: '#ad9979' }} className="col-md-4">
              <h1 className="text-large text-uppercase">03.</h1>
              <h3>Problems we solve</h3>
              <span><b>Question: </b>My physician performed a routine Digital Rectal Exam (DRE) to examine my prostate,
								examined my borderline
								PSA values and wants me to take a biopsy to test for cancer. Can I wait until I am
                absolutely sure about it? <b>Answer: </b>Yes, you can! "Our SeroMark-1 test WILL give you
                that power to decide."</span>
            </div>
          </div>
        </section>
        <section id="faqs" className="background-grey text-left">
          <div className="container">
            <div className="heading heading-center">
              <h2>WHY IS SEROMARK-1 SCREENING TESTING IMPORTANT?</h2>
              <span className="lead">Frequently asked questions.</span>
            </div>
            <div className="row team-members team-members-shadow m-b-40">
              <div className="col-md-12">
                <div className="accordion toggle fancy radius clean">
                  <div className="ac-item ac-active">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />Should I agree or wait for a painful REPEAT
                  prostate biopsy to keep finding if I have cancer?</h5>
                    <div className="ac-content">• If SeroMark-1 test result is normal it is unlikely you have prostate cancer
                  and there may be NO need of a painful repeat biopsy. <br />
                      • If SeroMark-1 is abnormal (independent of your PSA result), there is a high likelihood you may have
											cancer, and are strongly encouraged to consult your health-care provider immediately for further
                  evaluation!!<br />
                      • The PSA test result you will already have in addition to SeroMark-1 test, will help you make a firm
											decision for alternative evaluations and further steps discussed with your Urologist as necessary.
                  prostate cancer symptoms signs of prostate cancer</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />Why should I consider having a SeroMark-1 and
                  PSA Test?</h5>
                    <div style={{ display: 'none' }} className="ac-content">SeroMark-1 test is designed to work in conjunction with
											Prostate specific antigen (PSA) tests to help physicians and their patients make the most informed
											decision on the need for invasive testing. PSA tests aren't foolproof and there is no known
                  "normal"(<a href="http://www.webmd.com">http://www.webmd.com</a>). It's possible for your PSA levels
                      to be elevated when cancer isn't
                      present, and to not be elevated when cancer is present. Neither the PSA test nor the rectal
                      examination (DRE) is 100% accurate and can give an abnormal result even when cancer is not present
                      (known as a false positive result). In addition, normal results can occur even when cancer is present
                      (false negative). The results with PSA test results may help to find prostate cancer early even before
                      there are symptoms. Many small prostate cancers detected by PSA would never develop enough to cause
                      any symptoms. Even if your PSA level is raised, this could be for reasons other than prostate cancer
                      and you may have unnecessary stress. This is very important since the results of PSA and DRE
                  screenings lead to both under and over treatment of prostate cancer (PCa).<br />
                      SeroMark-1 Test offers several potential advantages to these uncertainties:<br />
                      1. This test is a physician recommended/or self-ordered, is easy and results obtained within 1
                  business week.<br /><br />
                      2. With a high PSA level you may need further tests such as a biopsy, which can be painful and lead to
											blood in urine, semen or stools. Occasionally having a biopsy can lead to infection of the prostate
											gland, which can be difficult to treat. The SeroMark-1 test may help give more information before you
                  make the decision for biopsy or no biopsy.<br /><br />
                      3. In a small number of men, a biopsy may not always detect a significant cancer even when it is
											present. The SeroMark-1 test may give you additional information to pursue additional testing to
                  discover a significant cancer after a negative biopsy.</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />What are the benefits of SeroMark-1 testing?
                </h5>
                    <div style={{ display: 'none' }} className="ac-content">Because prostate cancer often grows very slowly, some men
											(especially those who are older or have other serious health problems) might never need treatment for
											their prostate cancer. Instead, their doctors may recommend approaches known as expectant management,
											watchful waiting, observation, or active surveillance. Some doctors use these terms to mean the same
											thing. Active surveillance is often used to mean monitoring the cancer closely with PSA blood tests,
											DREs, and ultrasounds at regular intervals to see if the cancer is growing. Prostate biopsies may be
											done as well to see if the cancer is becoming more aggressive. If there is a change in your test
                      results, your doctor would then talk to you about treatment options. <br />With active surveillance, your
                      cancer will be monitored carefully. Usually this approach includes a doctor visit with a PSA blood
                      test, DRE and SeroMark-1 test about every 3 to 6 months. Trans-rectal ultrasound-guided prostate
                      biopsies may be done every year as well. Treatment can be started if the cancer seems to be growing or
                      getting worse, based on abnormal SeroMark-1 test, a rising PSA level or a change in the DRE,
                      ultrasound findings, or biopsy results. On biopsies, an increase in the Gleason score or extent of
                      tumor (based on the number of biopsy samples containing tumor) are both signals to start treatment
                      (usually surgery or radiation therapy). In active surveillance, only men whose cancer are rapidly
                      growing (and therefore have a more serious form of cancer) are treated. This lets men with less
                      serious cancer take control of their health decisions and quality of life thereby avoiding the side
                      effects of a treatment that might not have helped them live longer.</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />What is a normal SeroMark-1 test result?</h5>
                    <div style={{ display: 'none' }} className="ac-content">The test is proprietary. Alterations in biomarkers will
                  determine whether or not test is normal.</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />What if a screening test shows that SeroMark-1
                  test is not normal?</h5>
                    <div style={{ display: 'none' }} className="ac-content">That will suggest that you are strongly encouraged to
                  consult your physician immediately along with your PSA results for alternative evaluation.</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />What are some of the limitations and potential
                  harms of the SeroMark-1 test for prostate cancer screening?</h5>
                    <div style={{ display: 'none' }} className="ac-content">We may not foresee any potential harm in performing this
                  test. However, you will need to seriously consult your physician if:<br />
                      1. SeroMark-1 is abnormal and PSA is lower than 3 ng/dL, or<br />
                      2. SeroMark-1 is abnormal and PSA is higher than 3 ng/dL.<br />
                      The benefits of using SeroMark-1 test to derive additional prostate cancer screening information offer
											forward-looking views. These views, recommendations and statements in the test results are neither
											claims nor historical facts, and are subject to risks and uncertainties which could cause actual
											results and the timing of certain events to differ materially from those set forth in or implied
											herein including, without limitation, risks associated with clinical development and services,
											regulatory approvals, product commercialization, intellectual property claims litigation and other
                  risks associated with the NuTech's proposed activities.</div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title"><i className="fa fa-question-circle" />What research has been done to study
                  SeroMark-1 screening?</h5>
                    <div style={{ display: 'none' }} className="ac-content">The SeroMark-1 testing service discussed by NuTech Cancer
											Biomarkers India Pvt. Ltd. is based both; on a University based clinical research study, as well as
											validation studies conducted in India, and does not take the place of either you or your physician's
                  independent assessment and of appropriate treatment options for individuals and/or patients.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="heading text-center">Resources Information &amp; Brochure</h2>
            <p className="lead text-center">Below are some of the useful information/ downloads/ resources about the organization.
        </p>
            {/* Testimonials */}
            <a href="./downloads/PROSTATE_HEALTH_AWARENESS-EASILY_UNDERSTANDABLE.pdf">
              <div role="alert" className="alert alert-info text-left"><i className="fa fa-download" /> <strong>PROSTATE_HEALTH AWARENESS-EASILY UNDERSTANDABLE</strong></div>
            </a>
            <a href="./downloads/Prostate_Health_in_Hindi.pdf">
              <div role="alert" className="alert alert-info text-left"><i className="fa fa-download" /> <strong>Prostate Health in Hindi</strong> </div>
            </a>
            <a href="./downloads/Brochure_July_1_2019.pdf">
              <div className="alert alert-info text-left"><i className="fa fa-download" /> <strong>Brochure July 1, 2019</strong></div>
            </a>
            <a href="./downloads/Brochure_May_1_2019.pdf">
              <div className="alert alert-info text-left"><i className="fa fa-download" /> <strong>Brochure May 1, 2019</strong> </div>
            </a>
            <a href="./downloads/Brochure_March_1_2019.pdf">
              <div className="alert alert-info text-left"><i className="fa fa-download" /> <strong>Brochure March 1, 2019</strong> </div>
            </a>
            {/* end: Testimonials */}
          </div>
        </section>
        {/* Footer */}
        <FooterComponent />
        {/* end: Footer */}
        <a href="foo" id="goToTop"><i className="fa fa-angle-up top-icon" /><i className="fa fa-angle-up" /></a>
        {/*Plugins*/}
        {/*Template functions*/}
      </div>
    );
  }
}

export default AboutComponent;