import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-box">
                    <div className="foot-box">
                        <div className="foot-title">
                            <h3>Water Data</h3>
                        </div>
                        <div className="items">
                            <ul>Reservoir</ul>
                            <ul>Studies</ul>
                            <ul>Surface Water Bodies</ul>
                            <ul>River Monitoring</ul>
                            <ul>Exploration</ul>
                        </div>
                    </div>
                    <div className="foot-box">
                        <div className="foot-title">
                            <h3>Utilities</h3>
                        </div>
                        <div className="items">
                            <ul>PMP Atlas</ul>
                            <ul>Geo Viewer</ul>
                            <ul>Data Availability</ul>
                            <ul>Meta Data</ul>
                        </div>
                    </div>
                    <div className="foot-box">
                        <div className="foot-title">
                            <h3>Creators</h3>
                        </div>
                        <div className="items">
                            <ul>Nishant</ul>
                            <ul>Vivek</ul>
                            <ul>Tanmay</ul>
                            <ul>Sanskar</ul>
                            <ul>Gayatri</ul>
                            <ul>Sadhana</ul>
                        </div>
                    </div>
                    <div className="foot-box">
                        <div className="foot-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="items">
                            <ul>Contact Details</ul>
                            <ul>External links</ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
