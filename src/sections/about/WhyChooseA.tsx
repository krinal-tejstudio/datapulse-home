import React from "react";

// ✅ Import all your local image assets here
import img1 from "../../assets/images/custom/why-choose1.webp";
import img2 from "../../assets/images/custom/why-chose2.webp";
import imgShape1 from "../../assets/images/shapes/why-choose-four-img-shape-1.png";
import icon1 from "../../assets/images/icon/why-choose-four-single-icon-1-1.png";
import icon2 from "../../assets/images/icon/why-choose-four-single-icon-1-2.png";
import icon3 from "../../assets/images/icon/why-choose-four-single-icon-1-3.png";
import icon4 from "../../assets/images/icon/why-choose-four-single-icon-1-4.png"; 

const WhyChooseA: React.FC = () => {
  return (
    <section className="why-choose-four">
      <div className="container">
        <div className="row"> 
          <div className="col-xl-6">
            <div
              className="why-choose-four__left"
              data-aos="slide-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="section-title-two text-left sec-title-animation animation-style2">
                <div className="section-title-two__tagline-box">
                  <div className="section-title-two__tagline-icon-box">
                    <div className="section-title-two__tagline-icon-1"></div>
                    <div className="section-title-two__tagline-icon-2"></div>
                  </div>
                  <span className="section-title-two__tagline">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="section-title-two__title title-animation">
                  Why Businesses Trust Data Pulse <br />
                   <span>for Recruitment & Workforce</span>
                </h2>
              </div>

              <p className="why-choose-four__text">
              DataPulse Technologies provides reliable recruitment, Labour Market Testing (LMT), 
              and workforce consulting services across Australia. We help businesses hire skilled 
              professionals, ensure compliance with employment standards, and build strong teams 
              that drive long-term growth and operational success.
              </p>

              {/* Images */}
              <div className="why-choose-four__img-box">
                <div className="why-choose-four__img">
                  <img src={img1} alt="Why Choose Us" />
                </div>
                <div className="why-choose-four__img-shape-1 img-bounce">
                  <img src={imgShape1} alt="Decorative Shape" />
                </div>
                <div className="why-choose-four__img-2">
                  <img src={img2} alt="Team Collaboration" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6">
            <div className="why-choose-four__right">
              <h2 className="why-choose-four__right-title">
                100% SUCCESS RATE
              </h2>

              <div className="row">
                {/* Single Feature */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="why-choose-four__single">
                    <div className="why-choose-four__icon">
                      <img src={icon1} alt="Analytics Icon" />
                    </div>
                    <h3>Labour Market Testing Experts</h3>
                    <p>
                      We provide accurate and compliant Labour Market Testing (LMT)
                      services to help Australian businesses meet visa and labour recruitment <br />
                      requirements efficiently and confidently.
                    </p>
                  </div>
                </div>

                {/* Single Feature */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="why-choose-four__single">
                    <div className="why-choose-four__icon">
                      <img src={icon2} alt="Integration Icon" />
                    </div>
                    <h3>Smart Recruitment Solutions</h3>
                    <p>
                      Our recruitment process connects businesses with skilled and
                      reliable professionals, ensuring the right talent for long-term <br />
                      business success.
                    </p>
                  </div>
                </div>

                {/* Single Feature */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="why-choose-four__single">
                    <div className="why-choose-four__icon">
                      <img src={icon3} alt="Data Icon" />
                    </div>
                    <h3>Compliance & Documentation Support</h3>
                    <p>
                      We handle documentation, reporting, and compliance requirements
                      to ensure your hiring and labour market processes follow Australian
                      government regulations.
                    </p>
                  </div>
                </div>

                {/* Single Feature */}
                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="why-choose-four__single">
                    <div className="why-choose-four__icon"> 
                      <img src={icon4} alt="Support Icon" />
                    </div>
                    <h3>Trusted Workforce Partner</h3>
                    <p>
                      DataPulse Technologies works closely with businesses to provide
                      reliable workforce solutions, fast hiring processes, and ongoing
                      support for sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseA;
