import React, { useState } from 'react';
// import userImg from '../../assets/images/resources/cta-three-user-img-1.jpg';
import bgShape from '../../assets/images/shapes/cta-three-left-content-shape-bg.png';

const ContactInner: React.FC = () => { 
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const inquiry = formData.get("inquiry");
        const details = formData.get("details");

        const subject = `New Inquiry from DataPulse Website`;
        const body = `
Name: ${name}
Email: ${email}
Inquiry: ${inquiry}
Details: ${details}
        `;

        const mailtoLink = `mailto:admin@datapulsetech.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setLoading(true);

        setTimeout(() => {
            window.location.href = mailtoLink;
            setLoading(false);
            form.reset();
        }, 500);
    };

    return (
        <section className="cta-three">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-xl-5 col-lg-6">
                        <div className="cta-three__left">
                            <div className="cta-three__left-content">
                                <div
                                    className="cta-three__left-content-shape-bg"
                                    style={{ backgroundImage: `url(${bgShape})` }}
                                ></div>

                                <div className="cta-three__title-box">
                                    <div className="cta-three__title-tagline-box">
                                        <div className="cta-three__title-tagline-icon-box">
                                            <div className="cta-three__title-tagline-icon-1"></div>
                                            <div className="cta-three__title-tagline-icon-2"></div>
                                        </div>
                                        <span className="cta-three__title-tagline">Contact DataPulse</span>
                                    </div>
                                    <h2 className="cta-three__title">
                                    Let's Build Your Workforce <br />
                                    With The Right Talent
                                    </h2>
                                </div>

                                <p className="cta-three__text">
                                    We provide Talent Acquisition, Staffing Solutions,
                                    Labour Market Testing, and Specialized Tech Talent
                                    to help businesses grow with confidence.
                                </p>

                                {/* <div className="cta-three__user">
                                    <div className="cta-three__user-img">
                                        <img src={userImg} alt="Project Manager" />
                                    </div>
                                    <div className="cta-three__user-content">
                                        <p className="cta-three__user-name">Thomas Alison</p>
                                        <span className="cta-three__user-sub-title">Project Manager</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-xl-7 col-lg-6">
                        <div className="cta-three__right">
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form-validated cta-three__form"
                            >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="inquiry"
                                                placeholder="Inquiry About"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="cta-three__input-box text-message-box">
                                            <textarea
                                                name="details"
                                                placeholder="Write Details"
                                                rows={4}
                                            ></textarea>
                                        </div>

                                        <div className="cta-three__btn-box">
                                            <button
                                                type="submit"
                                                className="cta-three__btn thm-btn thm-btn-two"
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Send Inquiry"}
                                                {/* <span className="icon-right"></span> Send Message */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInner;
