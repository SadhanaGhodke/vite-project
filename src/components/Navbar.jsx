import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles.css';

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="logo-sec">
                    <img src="/photos/logo.png" alt="Logo" className="logo" />
                </div>
                <div className="menu-section">
                    <Link to="/">Home</Link>
                    {/* <ScrollLink to="services" smooth={true} duration={500}>
                        Services
                    </ScrollLink> */}
                    <Link to="/services">Services</Link>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About Us
                    </ScrollLink>
                    <Link to="/reading">Reading</Link>
                    <ScrollLink to="water" smooth={true} duration={500}>
                        Ticket Resolution
                    </ScrollLink>
                </div>
                <div className="icon">
                    <Link to="#">
                        <i className="bx bxs-user"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const Navbar = () => {
//     return (
//         <header>
//             <div className="navbar">
//                 <div className="logo-sec">
//                     <img src="/photos/logo.png" alt="Logo" className="logo" />
//                 </div>
//                 <div className="menu-section">
//                     <a href="#home">Home</a>
//                     <a href="#services">Services</a>
//                     <a href="#about">About Us</a>
//                     <a href="/reading">Reading</a>
//                     <a href="#water">Water Quality</a>
//                 </div>
//                 <div className="icon">
//                     <a href="#">
//                         <i className="bx bxs-user"></i>
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;
