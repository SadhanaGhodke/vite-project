import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                {/* Logo Section */}
                <div className="logo-sec">
                    <img src="/photos/logo.png" alt="Logo" className="logo" />
                    <h1 className="brand-name">JalDarpan</h1>
                </div>

                {/* Menu Section */}
                <div className="menu-section">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/reading">Reading</Link>
                    <Link to="/report">Report</Link>
                    <Link to="/tutorial">Tutorial</Link>
                    <Link to="/about">About Us</Link>
                </div>

                {/* Right Section with Login and Signup */}
                <div className="icon-section">
                    <Link to="/login" className="auth-link">
                        <i className="bx bx-log-in"></i> Login
                    </Link>
                    <Link to="/signup" className="auth-link">
                        <i className="bx bx-user-plus"></i> Signup
                    </Link>
                </div>
            </nav>
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
