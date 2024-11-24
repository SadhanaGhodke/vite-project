import React from 'react';
import '../styles.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-box">
                <div className="about-text">
                    <h3>About Us</h3>
                    <h1>Why Choose Us</h1>
                </div>
                <div className="choices">
                    <div className="choice-box">
                        <div className="about-title">
                            <h3>Dedicated Issue Management Portal</h3>
                        </div>
                        <div className="about-des">
                            <p>
                                Our platform goes beyond standard data collection by offering precision analysis and
                                proactive alerts, ensuring that no issue goes unnoticed. We streamline monitoring and
                                troubleshooting, reducing downtime and improving resource management efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="choice-box">
                        <div className="about-title">
                            <h3>User-Centric Design and Easy Navigation</h3>
                        </div>
                        <div className="about-des">
                            <p>
                                Designed with simplicity and functionality in mind, our platform allows personnel to
                                access, interpret, and act on data quickly. Whether it's tracking issues or analyzing
                                groundwater trends, our user-friendly interface empowers you to manage tasks
                                effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="choice-box">
                        <div className="about-title">
                            <h3>Comprehensive Support and Continuous Improvement</h3>
                        </div>
                        <div className="about-des">
                            <p>
                                Our platform is backed by dedicated support and a commitment to continuous improvement.
                                We provide ongoing assistance and continuous training of models which help ensure that
                                the system evolves with your needs, enhancing functionality and addressing any emerging
                                challenges to keep your groundwater management efficient and effective.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
