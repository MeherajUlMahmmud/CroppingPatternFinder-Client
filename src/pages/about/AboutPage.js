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
                        <a href="#Contributors">Contributors</a>
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
                {/* 
                <div className="top_image">
                    <img
                        src={require("../../media/ai_brain.gif")}
                        alt="cropping pattern"
                    />
                </div> */}
            </div>

            <div className="body_container">
                <div className="about_us_container">
                    <h2>About Crops production and dataset</h2>
                    <div id="About_Crops">
                        <Collapsible trigger="🖱️ Agricultural seasons">
                            There are mainly three agricultural seasons in
                            Bangladesh.
                            <p>☁️ Robi (November to February)</p>
                            <p>☁️ Kharif 1 (March to May)</p>
                            <p>☁️ Kharif 2 (June to October).</p>
                        </Collapsible>
                        <Collapsible trigger="🖱️ Data characteristics">
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
                                <Collapsible trigger="Soil Texture">
                                    <ul>
                                        <li>Sandy</li>
                                        <li> Sandy Loam </li>
                                        <li> Loam </li>
                                        <li> Clay Loam </li>
                                        <li>Clay </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Soil Consistency">
                                    <ul>
                                        <li> Loose </li>
                                        <li>Friable</li>
                                        <li> Firm</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Available Soil Moisture">
                                    <ul>
                                        <li>Low</li>
                                        <li>Medium</li>
                                        <li>High</li>
                                        <li>Very High</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Soil Reaction (pH)">
                                    <ul>
                                        <li>
                                            {" Very Strongly Acidic (pH < 4.5)"}
                                        </li>
                                        <li>
                                            {" Strongly Acidic (pH 4.5 - 5.5)"}
                                        </li>
                                        <li>
                                            {" Slightly Acidic (pH 5.6 - 6.5)"}
                                        </li>
                                        <li>{" Neutral (pH 6.6 - 7.3)"}</li>
                                        <li>
                                            {
                                                " Slightly Alkaline (pH 7.4 - 8.4)"
                                            }
                                        </li>
                                        <li>
                                            {
                                                " Strongly Alkaline (pH 8.5 - 9.0)"
                                            }
                                        </li>
                                        <li>
                                            {
                                                " Very Strongly Alkaline (pH > 9.0)"
                                            }
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Soil Salinity">
                                    <ul>
                                        <li>{" Non Saline (< 2 dS/m)"}</li>
                                        <li>
                                            {
                                                " Very Slightly Saline (2 – 4 dS/m)"
                                            }
                                        </li>
                                        <li>
                                            {" Slightly Saline (4 - 8 	dS/m)"}
                                        </li>
                                        <li>
                                            {" Moderately Saline (8 – 12 dS/m)"}
                                        </li>
                                        <li>
                                            {" Strongly Saline (12 -15 dS/m)"}
                                        </li>
                                        <li>
                                            {
                                                " Very Strongly Saline (> 15 dS/m)"
                                            }
                                        </li>
                                    </ul>
                                </Collapsible>
                            </div>

                            <h3>
                                Natural crop production without irrigation and
                                fertilizer use depends on some more soil and
                                climatic factors
                            </h3>

                            <Collapsible trigger="Organic Matter Content">
                                <ul>
                                    <li>Very Low (1.0%) </li>
                                    <li>Low (1.0% - 1.7%) </li>
                                    <li>Medium (1.7% - 3.4%) </li>
                                    <li>High (3.4% - 5.5%) </li>
                                    <li>{"Very High (> 5.5%)"} </li>
                                </ul>
                            </Collapsible>
                            <Collapsible trigger="Cultivation Method">
                                <ul>
                                    <li> Upland</li>
                                    <li>Wetland</li>
                                    <li> Upland & Wetland</li>
                                </ul>
                            </Collapsible>
                            <Collapsible trigger="Soil Color">
                                <ul>
                                    <li>Gray</li>
                                    <li>Dark Gray</li>
                                    <li>Black</li>
                                    <li>Pale Brown</li>
                                    <li>Brown</li>
                                    <li>Dark Brown</li>
                                    <li>Red</li>
                                    <li>Green Gray</li>
                                    <li>White</li>
                                    <li>Mixed Color</li>
                                </ul>
                            </Collapsible>
                            <Collapsible trigger="Rainfall">
                                <p>Average Rainfall</p>
                            </Collapsible>
                            <Collapsible trigger="Temperature">
                                <p>Average Temperature in Degree Celcius </p>
                            </Collapsible>
                        </Collapsible>
                    </div>
                </div>
                <div className="about_us_container">
                    <h1>References</h1>
                    <Collapsible trigger="Papers, Links & References">
                        <ol>
                            <li>
                                Food and Agriculture Organization (FAO) of the
                                United Nations,
                                https://www.fao.org/asiapacific/perspectives/agricultural-statistics/global-strategy/results-in-the-region/bangladesh/en/?fbclid=IwAR3AZ-M1up61pCvJzDo3-wkpCUE7te9iIdpnt3tnvHdnadfkJBHNepHSoPc,
                                Accessed: Feb 13, 2021.d
                            </li>
                            <li>
                                P. Patil, V. Panpatil, and S. Kokate, “Crop
                                Prediction System using Machine Learning
                                Algorithms,” Int. Res. J. Eng. Technol., 2020,
                                Accessed: Feb. 07, 2022. [Online]. Available:
                                www.irjet.net.
                            </li>
                            <li>
                                Land and Soil Recourses Usage Guideline
                                (Renewed): Bhandaria Upazil, Pirozpur District
                                (in Bangla). Soil Resources Development
                                Institute, Ministry of Agriculture, Bangladesh,
                                yyyy.
                            </li>
                            <li>
                                Land and Soil Recourses Usage Guideline
                                (Renewed): Tarakanda Upazil, Mymenshingh
                                District (in Bangla). Soil Resources Development
                                Institute, Ministry of Agriculture, Bangladesh,
                                2016.
                            </li>
                            <li>
                                M. Nasim, S. M. Shahidullah, A. Saha, M. A.
                                Muttaleb, T. L. Aditya, M. A. Ali, and M. S.
                                Kabir, “Distribution of Crops and Cropping
                                Patterns in Bangladesh,” Bangladesh Rice J.,
                                vol. 21, no. 2, pp. 1 - 55, 2017. DOI:
                                10.3329/BRJ.V21I2.38195.
                            </li>
                            <li>
                                S. Shahidullah, M. Talukder, M. Kabir, A. Khan,
                                and N.-E. Elahi, “Cropping Patterns in the South
                                East Coastal Region of Bangladesh,” J. Agric.
                                Rural Dev., vol. 4, no. 1, pp. 53–60, Jan. 1970.
                                DOI: 10.3329/JARD.V4I1.768.
                            </li>
                            <li>
                                M. K. Quais, H. Rashid, S. M. Shahidullah, and
                                M. Nasim, “Crops and Cropping Sequences in the
                                Chittagong Hill Tracts,” Bangladesh Rice J.,
                                vol. 21, no. 2, pp. 17 - 184, 2017. DOI:
                                10.3329/brj.v21i2.38204
                            </li>
                        </ol>
                    </Collapsible>
                </div>
                <div className="about_us_container">
                    <h1>Codebase</h1>
                    <Collapsible trigger="🖱️ Codebase">
                        Work in progress
                    </Collapsible>
                    <h1>Api</h1>
                    <Collapsible trigger="🖱️ Api">Work in progress</Collapsible>
                </div>
                <div id="Contributors" className="about_us_container">
                    <h1>Contributors</h1>
                    <Collapsible trigger="🖱️ Contributors">
                        <h5>Project Supervisor</h5>
                        <p>
                            🎓 Prof. Dr. Md. Mozammel Huq Azad Khan, CSE
                            Department, East West University
                            <a href="https://scholar.google.com/citations?hl=en&user=9K0sw1AAAAAJ">
                                {" "}
                                🔗
                            </a>
                        </p>
                        <h5>Students</h5>
                        <p>👨‍🎓 Shamima Yesmin (2018-2-60-008)</p>
                        <p>👨‍🎓 Lata Rani Saha (2018-2-60-013)</p>
                        <p>👨‍🎓 Sabbir Ahmed (2018-2-60-100)</p>
                        <p>👨‍🎓 A K.M. Sadat (2018-2-60-127)</p>
                    </Collapsible>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
