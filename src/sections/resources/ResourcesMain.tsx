import React from 'react';
import {
    lmtExampleCards,
    lmtTopics,
    recruitmentTopics,
    usefulLinks,
} from '../../contents/resources/resourcesContent';

const wowDelay = (i: number) => `${Math.min(8, Math.max(1, i)) * 100}ms`;

/** SVG imports are URLs; recruitment topics may use icon font class names (e.g. ri-*). */
const ResourceTopicIcon: React.FC<{ icon: string }> = ({ icon }) => {
    if (icon.startsWith('ri-')) {
        return <span className={`resources-page__topic-icon ${icon}`} aria-hidden="true" />;
    }
    return (
        <span className="resources-page__topic-icon resources-page__topic-icon--img" aria-hidden="true">
            <img src={icon} alt="" width={40} height={40} />
        </span>
    );
};

const ResourcesMain: React.FC = () => {
    return (
        <div className="resources-page">
            {/* LMT Resources */}
            <section className="resources-page__section resources-page__section--lmt services-one">
                <div className="services-one__shape-1"></div>
                <div className="services-one__shape-2"></div>
                <div className="services-one__shape-3"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-icon-box">
                                <div className="section-title__tagline-icon-1"></div>
                                <div className="section-title__tagline-icon-2"></div>
                            </div>
                            <span className="section-title__tagline">Labour Market Testing</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Labour Market Testing (LMT) <span>Resources</span>
                        </h2>
                    </div>

                    <div className="row resources-page__grid">
                        {lmtTopics.map((item, idx) => (
                            <div
                                key={item.title}
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={wowDelay(idx + 1)}
                            >
                                <div className="resources-page__topic-card">
                                    <ResourceTopicIcon icon={item.icon} />
                                    <h3 className="resources-page__topic-title">{item.title}</h3>
                                    <p className="resources-page__topic-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="resources-page__subheading text-center">Featured guides</h3>
                    <div className="row resources-page__grid resources-page__grid--tight">
                        {lmtExampleCards.map((card, idx) => (
                            <div
                                key={card.id}
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={wowDelay(idx + 1)}
                            >
                                <div className="resources-page__feature-card">
                                    <div className="resources-page__feature-accent" />
                                    <h4 className="resources-page__feature-title">{card.title}</h4>
                                    <p className="resources-page__feature-blurb">{card.blurb}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment */}
            <section className="resources-page__section resources-page__section--alt">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-icon-box">
                                <div className="section-title__tagline-icon-1"></div>
                                <div className="section-title__tagline-icon-2"></div>
                            </div>
                            <span className="section-title__tagline">Workforce</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Recruitment &amp; Workforce <span>Insights</span>
                        </h2>
                    </div>
                    <div className="row resources-page__grid">
                        {recruitmentTopics.map((item, idx) => (
                            <div
                                key={item.id}
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={wowDelay(idx + 1)}
                            >
                                <div className="resources-page__insight-card">
                                    <span className="resources-page__insight-icon">
                                        <span className="icon-check" aria-hidden="true"></span>
                                    </span>
                                    <h3 className="resources-page__insight-title">{item.title}</h3>
                                    <p className="resources-page__insight-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloads */}
            {/* <section className="resources-page__section resources-page__section--downloads services-one">
                <div className="services-one__shape-1"></div>
                <div className="services-one__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-icon-box">
                                <div className="section-title__tagline-icon-1"></div>
                                <div className="section-title__tagline-icon-2"></div>
                            </div>
                            <span className="section-title__tagline">Downloads</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Download <span>Resources</span>
                        </h2>
                        <p className="resources-page__section-lead">
                            Request templates and guides — our team can share the latest versions tailored to your sector.
                        </p>
                    </div>
                    <div className="row resources-page__grid resources-page__grid--tight">
                        {downloads.map((d, idx) => (
                            <div
                                key={d.id}
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={wowDelay(idx + 1)}
                            >
                                <div className="resources-page__download-card">
                                    <span className="resources-page__download-badge">{d.kind}</span>
                                    <h4 className="resources-page__download-title">{d.title}</h4>
                                    <div className="resources-page__download-actions">
                                        <Link to="/contact" className="thm-btn thm-btn-two resources-page__btn resources-page__btn--primary">
                                            Download PDF
                                        </Link>
                                        <Link to="/contact" className="resources-page__btn resources-page__btn--ghost">
                                            View Guide
                                        </Link>
                                        <Link to="/contact" className="resources-page__text-link resources-page__text-link--inline">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Articles */}
            {/* <section className="blog-two resources-page__blog">
                <div className="blog-two__shape-1 rotate-me">
                    <img src={shape1} alt="" />
                </div>
                <div className="blog-two__shape-2 float-bob-x">
                    <img src={shape2} alt="" />
                </div>
                <div className="container">
                    <div className="section-title-two text-center sec-title-animation animation-style1">
                        <div className="section-title-two__tagline-box justify-content-center">
                            <div className="section-title-two__tagline-icon-box">
                                <div className="section-title-two__tagline-icon-1"></div>
                                <div className="section-title-two__tagline-icon-2"></div>
                            </div>
                            <span className="section-title-two__tagline">Insights</span>
                        </div>
                        <h2 className="section-title-two__title title-animation">
                            Latest <span style={{ color: 'var(--finris-base)' }}>Articles</span>
                        </h2>
                    </div>
                    <div className="row">
                        {articles.map((post) => (
                            <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className="blog-two__single resources-page__article-card">
                                    <div className="blog-two__img">
                                        <img src={post.image} alt={post.title} />
                                        <div className="blog-two__plus">
                                            <Link to="/contact">
                                                <span className="icon-plus"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <div className="blog-two__content-inner">
                                            <ul className="list-unstyled blog-two__tag">
                                                <li>
                                                    <p>{post.tag}</p>
                                                </li>
                                            </ul>
                                            <h3 className="blog-two__title">
                                                <Link to="/contact">{post.title}</Link>
                                            </h3>
                                            <p className="blog-two__text">{post.excerpt}</p>
                                        </div>
                                        <div className="blog-two__read-more">
                                            <div className="blog-two__read-more-line"></div>
                                            <Link to="/contact" className="blog-two__read-more-text">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Links */}
            <section className="resources-page__section resources-page__section--links">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-icon-box">
                                <div className="section-title__tagline-icon-1"></div>
                                <div className="section-title__tagline-icon-2"></div>
                            </div>
                            <span className="section-title__tagline">References</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Useful <span>Links</span>
                        </h2>
                        <p className="resources-page__section-lead">
                            Government and industry sources for LMT, migration, and employment compliance.
                        </p>
                    </div>
                    <ul className="resources-page__link-list list-unstyled">
                        {usefulLinks.map((item) => (
                            <li key={item.id} className="resources-page__link-item wow fadeInUp" data-wow-delay="100ms">
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="resources-page__external-link">
                                    <span className="resources-page__link-label">{item.label}</span>
                                    <span className="resources-page__link-arrow icon-right-arrow-1" aria-hidden="true"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ResourcesMain;
