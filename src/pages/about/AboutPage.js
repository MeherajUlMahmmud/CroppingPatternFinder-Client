import React from "react";
import "./aboutPage.scss";
import Collapsible from "react-collapsible";

const AboutPage = () => {
    return (
        <div className="about_page">
            <div className="container_navigator_top">
                <div>
                    <li>
                        <a href="#header">header</a>
                    </li>
                    <li>
                        <a href="#About_Crops">Crops & dataset </a>
                    </li>
                    <li>
                        <a href="#third">Third</a>
                    </li>
                </div>
            </div>
            <div id="header" className="header">
                <div>
                    <div>
                        Welcome to Cropping Pattern Prediction System website
                    </div>
                    <p>
                        This is a Website that can predict cropping patterns for
                        robi,Kharif 1 and kharif 2 cropping season in
                        Bangladesh. We have created dataset from 54 different
                        upazilas in Bangladesh.Its an ongoing process to
                        intigrate all 495 upazilas of Bangladesh in our database
                        so that users can get better results.
                    </p>
                </div>

                <div className="top_image">
                    <img
                        src={require("../../media/ai_brain.gif")}
                        alt="cropping pattern"
                    />
                </div>
            </div>

            <div className="body_container">
                <div className="about_us_container">
                    About Crops production and dataset
                    <div id="About_Crops">
                        <Collapsible trigger="Agricultural seasons">
                            There are mainly three agricultural seasons in
                            Bangladesh.
                            <p>☁️ Robi (November to February)</p>
                            <p>☁️ Kharif 1 (March to May)</p>
                            <p>☁️ Kharif 2 (June to October).</p>
                        </Collapsible>
                        <Collapsible trigger="Data characteristics">
                            <p>
                                Suitable crops and agricultural season-wise
                                probable cropping patterns in Bangladesh largely
                                depend on land and soil characteristics.
                            </p>

                            <div className="inner_gid_collapsible">
                                <Collapsible trigger="Land Types">
                                    <ul>
                                        <li>Highland</li>
                                        <li>Medium Highland</li>
                                        <li>Medium Lowland </li>
                                        <li>Lowland</li>
                                        <li>Very Lowland</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Land Topography">
                                    <ul>
                                        <li>Level</li>

                                        <li>Undulating</li>
                                        <li>Sloping</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Water Recession from Land Surface">
                                    <ul>
                                        <li>Very Early </li>

                                        <li>Early</li>
                                        <li>Normal</li>
                                        <li>Late</li>
                                        <li>Very Late</li>

                                        <li>Missing</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Drainage Condition">
                                    <ul>
                                        <li> Well Drained </li>
                                        <li> Moderately Well Drained </li>
                                        <li> Imperfectly Drained </li>
                                        <li> Poorly Drained </li>
                                        <li> Very Poorly Drained </li>
                                    </ul>
                                </Collapsible>
                            </div>
                        </Collapsible>
                    </div>
                </div>
                <div className="about_us_container">References</div>
                <div className="about_us_container">Codebase </div>
                <div className="about_us_container">Contributors</div>
            </div>
        </div>
    );
};

export default AboutPage;
