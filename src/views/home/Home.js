import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const m1style = { width: "85%" };
    const m2style = { width: "80%" };
    const m3style = { width: "40%" };
    const m4style = { width: "70%" };
    const m5style = { width: "75%" };
    return (
      <div>
        <h1>Home Page of Chicken</h1>
        {/* <!-- start banner Area --> */}
        <section className="banner-area" id="home">
          {/* <!-- Start Header Area --> */}
          <header className="default-header">
            <nav className="navbar navbar-expand-lg  navbar-light">
              <div className="container">
                <a className="navbar-brand" href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="text-white lnr lnr-menu"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {/* <!-- End Header Area -->*/}
          <div className="container">
            <div className="row justify-content-start align-items-center">
              <div className="col-lg-6 col-md-12 no-padding banner-right">
                <img className="img-fluid" src="img/header-img.jpg" alt="" />
              </div>
              <div className="col-lg-6 col-md-12 banner-left">
                <h1 className="text-white">
                  Hi, I’m <br />
                  <span>Nguyen Canh Duc Due</span> <br />
                  Developer
						</h1>
                <p className="mx-auto text-white  mt-20 mb-40">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp <br /> or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
						</p>
                <a href="#" className="text-uppercase header-btn"><span>Let Us Talk</span></a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}

        {/* <!-- Start service Area --> */}
        <section className="service-area section-gap" id="service">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Have a Look at my Services</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="single-service col-lg-6 col-md-6 mb-30">
                <div className="icon">
                  <img src="img/s1.png" alt="" />
                </div>
                <div className="dec">
                  <h4 className="mt-30"><a href="#">Frontend developer</a></h4>
                  <p className="mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
								</p>
                </div>
              </div>
              <div className="single-service col-lg-6 col-md-6 mb-30">
                <div className="icon">
                  <img src="img/s2.png" alt="" />
                </div>
                <div className="dec">
                  <h4 className="mt-30"><a href="#">Backend developer</a></h4>
                  <p className="mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
								</p>
                </div>
              </div>
              <div className="single-service col-lg-6 col-md-6">
                <div className="icon">
                  <img src="img/s3.png" alt="" />
                </div>
                <div className="dec">
                  <h4 className="mt-30"><a href="#">Application developer</a></h4>
                  <p className="mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
								</p>
                </div>
              </div>
              <div className="single-service col-lg-6 col-md-6">
                <div className="icon">
                  <img src="img/s4.png" alt="" />
                </div>
                <div className="dec">
                  <h4 className="mt-30"><a href="#">Interaction Design</a></h4>
                  <p className="mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
								</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End service Area --> */}

        {/* <!-- Start about Area --> */}
        <section className="about-area section-gap" id="about">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">About Myself</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 about-left">
                <p>
                  It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale.
							</p>
                <h4 className="pb-40">Tools Expertness</h4>
                <div className="skillbar" data-percent="85%">
                  <div className="skill-bar-percent">After Effects 85%</div>
                  <div className="skillwrap">
                    <div className="skillbar-bar" style={m1style}></div>
                  </div>
                </div>

                <div className="skillbar" data-percent="80%">
                  <div className="skill-bar-percent">Photoshop 80%</div>
                  <div className="skillwrap">
                    <div className="skillbar-bar" style={m2style}></div>
                  </div>
                </div>

                <div className="skillbar" data-percent="40%">
                  <div className="skill-bar-percent">Illustrator 40%</div>
                  <div className="skillwrap">
                    <div className="skillbar-bar" style={m3style}></div>
                  </div>
                </div>

                <div className="skillbar" data-percent="70%">
                  <div className="skill-bar-percent">Sublime 70%</div>
                  <div className="skillwrap">
                    <div className="skillbar-bar" style={m4style}></div>
                  </div>
                </div>

                <div className="skillbar" data-percent="75%">
                  <div className="skill-bar-percent">Sketch 75%</div>
                  <div className="skillwrap">
                    <div className="skillbar-bar" style={m5style}></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-right justify-content-end d-flex">
                <div className="myself-wrap">
                  <img className="img-fluid" src="img/about-img.jpg" alt="" />
                  <div className="desc">
                    <h4>Nguyen Canh Duc Due</h4>
                    <p className="pb-10">Web application developer</p>
                    <p><span className="lnr lnr-phone"></span> (+84) 98 191 8628</p>
                    <p><span className="lnr lnr-envelope"></span> duencdd4tin@gmail.com</p>
                    <a className="mt-30 text-uppercase talk-btn" href="#"><span>Hire Me</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End about Area --> */}

        {/* <!-- Start qualification Area --> */}
        <section className="qualification-area pt-100 pb-80">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-20 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">My Qualifications</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 qty-left">
                <div className="single-qly">
                  <h3 className="text-uppercase">Spondonit</h3>
                  <p>July 2015 to Present</p>
                  <h4 className="pt-20 pb-20">Creative Content Developer</h4>
                  <p>
                    All users on MySpace will know that there are millions of <br />people out there. Every day besides.
								</p>
                </div>
                <div className="btm-border d-block mx-auto"></div>
                <div className="single-qly">
                  <h3 className="text-uppercase">Codepixar</h3>
                  <p>May 2013 to Present</p>
                  <h4 className="pt-20 pb-20">UI/UX Designer</h4>
                  <p>
                    All users on MySpace will know that there are millions of <br />people out there. Every day besides.
								</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 qty-right">
                <div className="single-qly">
                  <h4 className="pb-20">Masters in Graphics & Fine Arts</h4>
                  <p><b>Session</b>: 2010-11</p>
                  <p><b>Result</b>:  3.78 (In the Scale of 4.00)</p>
                </div>
                <div className="btm-border d-block mx-auto"></div>
                <div className="single-qly">
                  <h4 className="pb-20">Bachelor in Graphics & UI/UX</h4>
                  <p><b>Session</b>: 2006-09</p>
                  <p><b>Result</b>:  3.40 (In the Scale of 4.00)</p>
                </div>
                <div className="btm-border d-block mx-auto"></div>
                <div className="single-qly">
                  <h4 className="pb-20">Diploma in Fine Arts & Printing</h4>
                  <p><b>Session</b>: 2003-06</p>
                  <p><b>Result</b>:  4.94 (In the Scale of 5.00)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End qualification Area --> */}

        {/* <!-- Start project Area --> */}
        <section className="project-area section-gap" id="project">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Latest Done Projects</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 project-left">
                <div className="single-project pb-100">
                  <img className="img-fluid" src="img/l1.jpg" alt="" />
                  <h4 className="pt-100 pb-30"><a href="#">Panda Illustration</a></h4>
                  <p>
                    It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological.
								</p>
                </div>
                <div className="single-project">
                  <img className="img-fluid" src="img/l3.jpg" alt="" />
                  <h4 className="pt-100 pb-30"><a href="#">Panda Illustration</a></h4>
                  <p>
                    It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological.
								</p>
                </div>
              </div>
              <div className="col-lg-6 project-right">
                <div className="single-project">
                  <h4 className="pt-30 pb-30"><a href="#">Panda Illustration</a></h4>
                  <p className=" pb-100">
                    It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological.
								</p>
                  <img className="img-fluid" src="img/l2.jpg" alt="" />
                </div>
                <div className="single-project">
                  <h4 className="pt-100 pb-30"><a href="#">Panda Illustration</a></h4>
                  <p className=" pb-30">
                    It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological.
								</p>
                  <img className="img-fluid" src="img/l4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End project Area --> */}

        {/* <!-- Start feature Area --> */}
        <section className="feature-area pt-100">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Some Features that Made us Unique</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature mb-30">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-user"></span>
                    <h4><a href="#">Expert Technicians</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature mb-30">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-license"></span>
                    <h4><a href="#">Professional Service</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature mb-30">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-phone"></span>
                    <h4><a href="#">Great Support</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-rocket"></span>
                    <h4><a href="#">Technical Skills</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-diamond"></span>
                    <h4><a href="#">Highly Recomended</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-feature">
                  <div className="title d-flex flex-row pb-20">
                    <span className="lnr lnr-bubble"></span>
                    <h4><a href="#">Positive Reviews</a></h4>
                  </div>
                  <p>
                    Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End feature Area --> */}

        {/* <!-- start contact Area -->	*/}
        <section className="contact-area section-gap" id="contact">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-20 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">If you need, Just drop us a line</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>
            <form className="form-area mt-60" id="myForm" action="mail.php" method="post" className="contact-form text-right">
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input name="name" placeholder="Enter your name"
                    className="common-input mb-20 form-control" required="" type="text" />

                  <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    className="common-input mb-20 form-control" required="" type="email" />

                  <input name="subject" placeholder="Enter your subject"
                    className="common-input mb-20 form-control" required="" type="text" />
                </div>
                <div className="col-lg-6 form-group">
                  <textarea className="common-textarea mt-10 form-control" name="message" placeholder="Messege" required=""></textarea>
                  <button className="primary-btn mt-20">Send Message<span className="lnr lnr-arrow-right"></span></button>
                  <div className="alert-msg">
                  </div>
                </div></div>
            </form>

          </div>
        </section>
        {/* <!-- end contact Area --> */}

        {/* <!-- start footer Area -->		 */}
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-5  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>About Us</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
								</p>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  <p className="footer-text">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </div>
              </div>
              <div className="col-lg-5  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>Newsletter</h6>
                  <p>Stay update with our latest</p>
                  <div className="" id="mc_embed_signup">

                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                      method="get" className="form-inline">

                      <div className="d-flex flex-row">

                        <input className="form-control" name="EMAIL" placeholder="Enter Email" required="" type="email" />
                        <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        <div style="position: absolute; left: -5000px;">
                          <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                        </div>

                        <div className="col-lg-4 col-md-4">
                          <button className="bb-btn btn"><span className="lnr lnr-arrow-right"></span></button>
                        </div>
                      </div>
                      <div className="info"></div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                <div className="single-footer-widget">
                  <h6>Follow Us</h6>
                  <p>Let us be social</p>
                  <div className="footer-social d-flex align-items-center">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End footer Area --> */}


      </div>
    );
  }
}