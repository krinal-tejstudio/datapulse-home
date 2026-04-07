import React from "react";
import contactIcon from "../../assets/images/custom/favicon.jpg";

interface ContactItem {
    icon: string;
    title: string;
    text: string | React.ReactNode;
}

const contactInfo: ContactItem[] = [
    {
        icon: "icon-pin",
        title: "Our Address",
        text: "11/86 City Rd, Beenleigh QLD 4207",
    },
    {
        icon: "icon-user",
        title: "Contact Info",
        text: (
            <>
                <a href="tel:120034558900">+61 452 263 158</a>
            </>
        ),
    },
    {
        icon: "icon-live-chat",
        title: "Email",
        text:(
            <>
            <a href="mailto:dan@datapulsetech.com.au">dan@datapulsetech.com.au <br />
            <a href="mailto:admin@datapulsetech.com.au">admin@datapulsetech.com.au</a>
            </a>
            </>
        )
    },
    {
        icon: "icon-time",
        title: "Working Hour",
        text: (
            <>
                10:00 AM - 6:00 PM <br /> Monday - Friday
            </>
        ),
    },
];

const ContactMain: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert("Message sent successfully!");
    };


    return (
        <>
            {/* ================= Contact Page ================= */}
            <section className="contact-page" id='contact'>
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDE CONTACT INFO */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__left">
                                <div className="row">
                                    {contactInfo.map((item: ContactItem, i) => (
                                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__contact-single">
                                                <div className="contact-page__contact-icon">
                                                    <span className={item.icon}></span>
                                                    <div className="contact-page__contact-icon-shape"></div>
                                                </div>
                                                <h3 className="contact-page__contact-single-title">
                                                    {item.title}
                                                </h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__right">
                                <div className="contact-page__contact-form-title-box">
                                    <div className="contact-page__contact-form-title-icon">
                                        <img 
                                            src={contactIcon}
                                            alt="Contact Icon"
                                            style={{ width: "50px", height: "50px", objectFit: "contain" }}
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <h3 className="contact-page__contact-form-title">
                                        Send Us Message
                                    </h3>
                                </div>



                                <form
                                    className="contact-form-validated contact-page__form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>


                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-resume"></span>
                                                </div>
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-resume"></span>
                                                </div>
                                                <input type="text" name="contact" placeholder="Contact Number" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box text-message-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-write"></span>
                                                </div>
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="contact-page__btn-box">
                                                <button
                                                    type="submit"
                                                    className="thm-btn contact-page__btn"
                                                >
                                                    <span className="icon-right"></span> SEND MESSAGE
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

            {/* ================= Google Map ================= */}
            <section className="google-map-one">
                <div className="container">
                    <div className="google-map-one__inner">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29478.585980243584!2d153.18967600161707!3d-27.71757267809833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9141d584f0a227%3A0xdcb1e6f1e814f36f!2s11%2F86%20City%20Rd%2C%20Beenleigh%20QLD%204207%2C%20Australia!5e0!3m2!1sen!2sin!4v1775294090919!5m2!1sen!2sin"
                            className="google-map__one"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMain;
