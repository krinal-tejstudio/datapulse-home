import React from 'react';
import { Link } from 'react-router';
import { servicesOneData } from '../../contents/service/service';
import type { ServiceOneItem } from '../../contents/service/type';

function splitServiceTitle(title: string): string[] {
    const separators = [' | ', ' & ', ' - ', ' — ', ': '];
    for (const sep of separators) {
        if (title.includes(sep)) {
            const parts = title.split(sep).map((p) => p.trim()).filter(Boolean);
            if (parts.length >= 2) return [parts[0], parts.slice(1).join(sep.trim())];
        }
    }

    const words = title.split(/\s+/).filter(Boolean);
    if (words.length <= 4) return [title];
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')].filter(Boolean);
}

function wowDelayMs(id?: number): string {
    const safe = typeof id === 'number' && Number.isFinite(id) ? id : 1;
    return `${Math.min(8, Math.max(1, safe)) * 100}ms`;
}

const ServiseInner: React.FC = () => {
    return (
        <section className="services-one">
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
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                    Recruitment & Labour Market <br />
                    <span>Solutions for Australian Businesses</span>
                    </h2>
                </div>
                <div className="row">

                    {servicesOneData.map((service: ServiceOneItem) => (
                        <div
                            key={service.id}
                            className="col-xl-3 col-lg-4 col-md-6 mb-4 wow fadeInUp d-flex"
                            data-wow-delay={wowDelayMs(service.id)}
                        >
                            <Link
                                to={service.link}
                                className="services-one__single w-100"
                                style={{
                                    textDecoration: "none",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    borderRadius: 16,
                                    padding: 26,
                                    background: "#fff",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >

                                {/* ICON */}
                                <div style={{ textAlign: "center", marginBottom: 20 }}>
                                    <div
                                        style={{
                                            width: 84,
                                            height: 84,
                                            margin: "0 auto",
                                            borderRadius: "50%",
                                            background: "black",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img
                                            src={service.icon}
                                            alt=""
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </div>

                                {/* TITLE */}
                                <h3
                                    style={{
                                        textAlign: "center",
                                        color: "#00C2A8",
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }}
                                >
                                    {splitServiceTitle(service.title).map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {idx > 0 && <br />}
                                            {line}
                                        </React.Fragment>
                                    ))}
                                </h3>

                                {/* LINE */}
                                <div
                                    style={{
                                        height: 1,
                                        background: "#e5e5e5",
                                        marginBottom: 15,
                                    }}
                                />

                                {/* DESCRIPTION */}
                                <p
                                    style={{
                                        color: "#000",
                                        textAlign: "center",
                                        marginBottom: 15,
                                        fontSize: 14,
                                    }}
                                >
                                    {service.description}
                                </p>

                                {/* INCLUDE LIST */}
                                <ul
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        listStyle: "none",
                                        marginTop: "auto",
                                    }}
                                >
                                    {(service.include ?? []).map((point, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                marginBottom: 8,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: 18,
                                                    height: 18,
                                                    borderRadius: "50%",
                                                    background: "#00C2A8",
                                                    color: "#fff",
                                                    fontSize: 12,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                ✓
                                            </span>

                                            <span style={{ fontSize: 14, color: "#000" }}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServiseInner;