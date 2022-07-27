import React from "react";
import "./aboutPage.scss";

const AboutPage = () => {
    return (
        <div>
            <div className="header">
                Welcome to Cropping Pattern Prediction System website
            </div>

            <img
                src="https://lottiefiles.com/68363-ai-big-data"
                alt="cropping pattern"
                className="croppingPattern"
            />
            <div className="about_container">
                <div className="about_us_container">About us</div>
                <div className="about_us_container">About Dataset</div>
                <div className="about_us_container">References</div>
                <div className="about_us_container">Codebase </div>
            </div>
        </div>
    );
};

export default AboutPage;
