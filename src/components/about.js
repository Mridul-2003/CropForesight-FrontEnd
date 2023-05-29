import React from "react";
import './about.css';
import './nav.css'
import logo from '../assets/earth.png';
import aboutPic from '../assets/about.png';
import { useNavigate, Link } from 'react-router-dom';


const About = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact'); // Replace '/other-page' with the desired URL of the page you want to navigate to
    };
    return (
        <>
            {/* nav bar */}
            <div className='nav'>
                <header>
                    <nav>
                        <div class="left" style={{ color: "red" }}>
                            <Link to="/"><img src={logo} /></Link>
                        </div>
                        <div class="right">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact" >Contact</Link></li>

                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

            {/* main section */}
            <div className="aboutMain">
                <h1 className="about"> What Is CropForesight❓ </h1>
                <div className="content">
                    <div className="left">
                        <p>CropForesight is a powerful crop recommendation website that helps farmers and agriculture enthusiasts make informed decisions about the best crop to cultivate on a given land.<br />
                            By utilizing machine learning algorithms and various environmental parameters such as nitrogen value of soil, phosphorus value, rainfall, pH, potassium, humidity, and temperature. CropForesight predicts the optimal crop choice, maximizing productivity and yield.</p>

                        <ul className="feature">
                            <h3>Salient Features</h3>
                            <li>
                                Intelligent crop recommendation</li>
                            <li>
                                User-friendly interface </li>
                            <li>Efficient ML model leveraging Gaussian Naïve Bayes algorithm.</li>
                            <li>
                                Scalable backend powered by FastAPI for quick data processing.</li>
                        </ul>

                        <button className="abt" onClick={handleClick} >Get In Touch</button>

                    </div>
                    <div className="right">
                        <img src={aboutPic} alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
