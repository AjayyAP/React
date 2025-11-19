import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Indexx.css'


const Indexx = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <nav>
                {/* logo */}
                <NavLink to='/' className={"logo"}>
                    Vortex
                </NavLink>

                {/* hamburger menu icon */}
                <div className='menu-icon' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* nav links */}
                <ul className={menuOpen ? "show" : ""}>
                    {/* home */}
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>

                    {/* about */}
                    <li>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>

                    {/* contact */}
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='title-btn-container'>
                <div className='hero-title'>
                    <h1>FIND YOUR BEST <br /> CARS HERE...</h1>
                    <button>Learn More</button>
                </div>
            </div>

            {/* watches grid section */}
            <section className="watches-section">
                <div className="container-inner">
                    <h2>CARS</h2>

                    <div className="watches-grid">
                        <figure className="watch-card">
                            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfDF8MHx8fDA%3D" alt="Watch 1" loading="lazy" />
                            <figcaption> BENZ</figcaption>
                        </figure>

                        <figure className="watch-card">
                            <img src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHwxfDB8fHww" alt="Watch 2" loading="lazy" />
                            <figcaption>AUDI</figcaption>
                        </figure>

                        <figure className="watch-card">
                            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnN8ZW58MHwxfDB8fHww" alt="Watch 3" loading="lazy" />
                            <figcaption>BMW</figcaption>
                        </figure>

                        <figure className="watch-card">
                            <img src="https://images.unsplash.com/photo-1555353540-64580b51c258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfDF8MHx8fDA%3D" alt="Watch 4" loading="lazy" />
                            <figcaption>DODGE</figcaption>
                        </figure>


                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="footer-container">

                    {/* Left Section */}
                    <div className="footer-col">
                        <h2 className="footer-logo">Vortex</h2>
                        <p className="footer-text">Your trusted destination for luxury and high-performance cars..</p>
                    </div>

                    {/* Middle Section */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="footer-col">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Vortex. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Indexx
