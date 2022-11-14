import React from "react";
import "./aboutPage.scss";
import Collapsible from "react-collapsible";

const AboutPage = ({ language }) => {
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
                    <div className="headerText">
                        {language === "en" ? (
                            <h1>
                                Welcome to Cropping Pattern Prediction System
                                website
                            </h1>
                        ) : (
                            //bn
                            <h1>
                                ক্রপিং প্যাটার্ন প্রেডিকশন সিস্টেম ওয়েবসাইটে
                                স্বাগতম
                            </h1>
                        )}
                    </div>
                    <p>
                        {language === "en" ? (
                            <p>
                                {" "}
                                This is a Website that can predict cropping
                                patterns for robi,Kharif 1 and kharif 2 cropping
                                season in Bangladesh. We have created dataset
                                from 54 different upazilas in Bangladesh.Its an
                                ongoing process to intigrate all 495 upazilas of
                                Bangladesh in our database so that users can get
                                better results.
                            </p>
                        ) : (
                            //bn
                            <p>
                                এটি এমন একটি ওয়েবসাইট যা বাংলাদেশে রবি, খরিফ 1
                                এবং খরিফ 2 ফসলের ঋতুর ফসলের ধরণ সম্পর্কে
                                পূর্বাভাস দিতে পারে। আমরা বাংলাদেশের 54টি
                                বিভিন্ন উপজেলা থেকে ডেটাসেট তৈরি করেছি৷ এটি
                                বাংলাদেশের সমস্ত 495টি উপজেলাকে আমাদের ডাটাবেসে
                                সংহত করার একটি চলমান প্রক্রিয়া যাতে
                                ব্যবহারকারীরা আরও ভাল ফলাফল পেতে পারেন৷
                            </p>
                        )}
                    </p>
                </div>
            </div>
            <div className="body_container">
                <div className="about_us_container">
                    {language === "en" ? (
                        <h2>About Crops production and dataset</h2>
                    ) : (
                        //bn
                        <h2>ফসল উৎপাদন এবং ডেটাসেট সম্পর্কে</h2>
                    )}

                    <div id="About_Crops">
                        <Collapsible trigger="🖱️ Agricultural seasons">
                            {language === "en" ? (
                                <p>
                                    {" "}
                                    There are mainly three agricultural seasons
                                    in Bangladesh.
                                </p>
                            ) : (
                                <p> বাংলাদেশে প্রধানত তিনটি কৃষি ঋতু রয়েছে।</p>
                            )}

                            {language === "en" ? (
                                <p>☁️ Robi (November to February)</p>
                            ) : (
                                <p>☁️ রবি (নভেম্বর থেকে ফেব্রুয়ারি)</p>
                            )}
                            {language === "en" ? (
                                <p>☁️ Kharif 1 (March to May)</p>
                            ) : (
                                <p>☁️ খরিফ 1 (মার্চ থেকে মে)</p>
                            )}
                            {language === "en" ? (
                                <p>☁️ Kharif 2 (June to October)</p>
                            ) : (
                                <p>☁️ খরিফ 2 (জুন থেকে অক্টোবর)</p>
                            )}
                        </Collapsible>
                        <Collapsible trigger="🖱️ Data characteristics">
                            {language === "en" ? (
                                <p>
                                    Suitable crops and agricultural season-wise
                                    probable cropping patterns in Bangladesh
                                    largely depend on land and soil
                                    characteristics.
                                </p>
                            ) : (
                                <p>
                                    বাংলাদেশে উপযুক্ত ফসল এবং কৃষি ঋতু উপর
                                    নির্ভরশীল বেশিরভাগ ভূমি এবং ভূমির বৈশিষ্ট্য।
                                </p>
                            )}

                            <div className="inner_gid_collapsible">
                                <Collapsible
                                    trigger={
                                        language === "en"
                                            ? "Land characteristics"
                                            : "ভূমির বৈশিষ্ট্য"
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Highland</p>
                                            ) : (
                                                <p>উচ্চ ভূমি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Lowland</p>
                                            ) : (
                                                <p>নিম্ন ভূমি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Medium Lowland</p>
                                            ) : (
                                                <p>মাঝারি নিম্ন ভূমি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Lowland</p>
                                            ) : (
                                                <p>নিম্ন ভূমি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Very Lowland</p>
                                            ) : (
                                                <p>খুব নিম্ন ভূমি</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en"
                                            ? "Land Topography"
                                            : "ভূমির টপোগ্রাফি"
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Level</p>
                                            ) : (
                                                <p>স্তর</p>
                                            )}
                                        </li>

                                        <li>
                                            Undulating
                                            {language === "en" ? (
                                                <p>Undulating</p>
                                            ) : (
                                                <p>উপস্থাপিত</p>
                                            )}
                                        </li>
                                        <li>
                                            Sloping
                                            {language === "en" ? (
                                                <p>Sloping</p>
                                            ) : (
                                                <p>ঢালু</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>
                                                Water Recession from Land
                                                Surface
                                            </p>
                                        ) : (
                                            <p>
                                                ভূমির উপকারণ থেকে পানির প্রতিবেশ
                                            </p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Very Early</p>
                                            ) : (
                                                <p>খুব শীঘ্র</p>
                                            )}
                                        </li>

                                        <li>
                                            {language === "en" ? (
                                                <p>Early</p>
                                            ) : (
                                                <p>শীঘ্র</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Normal</p>
                                            ) : (
                                                <p>সাধারণ</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Late</p>
                                            ) : (
                                                <p>দেরী</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Very Late</p>
                                            ) : (
                                                <p>খুব দেরী</p>
                                            )}
                                        </li>

                                        <li>
                                            {language === "en" ? (
                                                <p>Missing</p>
                                            ) : (
                                                <p>অনুপস্থিত</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>

                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Drainage Condition</p>
                                        ) : (
                                            <p>ড্রেনেজ অবস্থা</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Well Drained</p>
                                            ) : (
                                                <p>ভাল ড্রেনেজ</p>
                                            )}
                                        </li>
                                        <li>
                                            {" "}
                                            {language === "en" ? (
                                                <p>Moderately Well Drained</p>
                                            ) : (
                                                <p>মাঝারি ভাল ড্রেনেজ</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Imperfectly Drained</p>
                                            ) : (
                                                <p>অসম্পূর্ণ ড্রেনেজ</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Poorly Drained</p>
                                            ) : (
                                                <p>খারাপ ড্রেনেজ</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Very Poorly Drained</p>
                                            ) : (
                                                <p>খুব খারাপ ড্রেনেজ</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Soil Texture</p>
                                        ) : (
                                            <p>ভূমির গঠনবিন্যাস</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Sandy</p>
                                            ) : (
                                                <p>বেলে</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Sandy Loam</p>
                                            ) : (
                                                <p>বেলে কাদামাটি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Loam</p>
                                            ) : (
                                                <p>কাদামাটি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Clay Loam</p>
                                            ) : (
                                                <p>মৃত্তিকা কাদামাটি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Clay</p>
                                            ) : (
                                                <p>মৃত্তিকা</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Soil Consistency</p>
                                        ) : (
                                            <p>ভূমির স্থিরতা</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Loose</p>
                                            ) : (
                                                <p>আলগা</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Friable</p>
                                            ) : (
                                                <p>ভঙ্গুর</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Firm</p>
                                            ) : (
                                                <p>দৃঢ়</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Available Soil Moisture</p>
                                        ) : (
                                            <p>মাটি আর্দ্রতা</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en" ? (
                                                <p>Low</p>
                                            ) : (
                                                <p>কম</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Medium</p>
                                            ) : (
                                                <p>মাঝারি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>High</p>
                                            ) : (
                                                <p>বেশি</p>
                                            )}
                                        </li>
                                        <li>
                                            {language === "en" ? (
                                                <p>Very High</p>
                                            ) : (
                                                <p>খুব বেশি</p>
                                            )}
                                        </li>
                                    </ul>
                                </Collapsible>
                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Soil Reaction (pH)</p>
                                        ) : (
                                            <p>ভূমির প্রতিক্রিয়া (pH)</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en"
                                                ? "Very Strongly Acidic (pH < 4.5)"
                                                : "খুব শক্তিশালী অ্যাসিডিক (pH <4.5)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Strongly Acidic (pH 4.5 - 5.5)"
                                                : "শক্তিশালী অ্যাসিডিক (pH 4.5 - 5.5)"}
                                        </li>
                                        <li>
                                            {" Slightly Acidic (pH 5.6 - 6.5)"}
                                            {language === "en"
                                                ? " Slightly Acidic (pH 5.6 - 6.5)"
                                                : "সামান্য অ্যাসিডিক (pH 5.6 - 6.5)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Neutral (pH 6.6 - 7.3)"
                                                : "নিরপেক্ষ (pH 6.6 - 7.3)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Slightly Alkaline (pH 7.4 - 8.4)"
                                                : "সামান্য অ্যালকালাইন (pH 7.4 - 8.4)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Strongly Alkaline (pH 8.5 - 9.0)"
                                                : "শক্তিশালী অ্যালকালাইন (pH 8.5 - 9.0)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Very Strongly Alkaline (pH > 9.0)"
                                                : "খুব শক্তিশালী অ্যালকালাইন (pH> 9.0)"}
                                        </li>
                                    </ul>
                                </Collapsible>

                                <Collapsible
                                    trigger={
                                        language === "en" ? (
                                            <p>Soil Salinity</p>
                                        ) : (
                                            <p>ভূমির লবণাক্ততা</p>
                                        )
                                    }
                                >
                                    <ul>
                                        <li>
                                            {language === "en"
                                                ? " Non Saline (< 2 dS/m)"
                                                : "নন স্যালাইন (< 2 dS / m)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Very Slightly Saline (2 – 4 dS/m)"
                                                : "খুব সামান্য স্যালাইন (2 - 4 dS / m)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Slightly Saline (4 - 8 	dS/m)"
                                                : "সামান্য স্যালাইন (4 - 8 dS / m)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Moderately Saline (8 – 12 dS/m)"
                                                : "মাঝারি স্যালাইন (8 - 12 dS / m)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Strongly Saline (12 -15 dS/m)"
                                                : "শক্তিশালী স্যালাইন (12 -15 dS / m)"}
                                        </li>
                                        <li>
                                            {language === "en"
                                                ? " Very Strongly Saline (> 15 dS/m)"
                                                : "খুব শক্তিশালী স্যালাইন (> 15 dS / m)"}
                                        </li>
                                    </ul>
                                </Collapsible>
                            </div>

                            {language === "en" ? (
                                <h3>
                                    Natural crop production without irrigation
                                    and fertilizer use depends on some more soil
                                    and climatic factors
                                </h3>
                            ) : (
                                <h3>
                                    সেচ ও সার ব্যবহার ব্যতীত প্রাকৃতিক ফসল
                                    উৎপাদন আরো কিছু মাটি এবং জলবায়ু বিষয়ক
                                    কারণের উপর নির্ভর করে
                                </h3>
                            )}

                            <Collapsible
                                trigger={
                                    language === "en" ? (
                                        <p>Organic Matter Content</p>
                                    ) : (
                                        <p>জৈব পদার্থ</p>
                                    )
                                }
                            >
                                <ul>
                                    <li>
                                        {language === "en" ? (
                                            <p>Very Low (1.0%)</p>
                                        ) : (
                                            <p>খুব কম (1.0%)</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Very Low (1.0%)</p>
                                        ) : (
                                            <p>খুব কম (1.0%)</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Medium (1.7% - 3.4%)</p>
                                        ) : (
                                            <p>মাঝারি (1.7% - 3.4%)</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>High (3.4% - 5.5%)</p>
                                        ) : (
                                            <p>উচ্চ (3.4% - 5.5%)</p>
                                        )}
                                    </li>
                                    <li>
                                        <p>
                                            {language === "en"
                                                ? `Very High (> 5.5%)`
                                                : ` খুব উচ্চ (> 5.5%)`}
                                        </p>
                                    </li>
                                </ul>
                            </Collapsible>
                            <Collapsible
                                trigger={
                                    language === "en" ? (
                                        <p>Cultivation Method</p>
                                    ) : (
                                        <p>উৎপাদন পদ্ধতি</p>
                                    )
                                }
                            >
                                <ul>
                                    <li>
                                        {language === "en" ? (
                                            <p>Upland</p>
                                        ) : (
                                            <p>উপল্যান্ড</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Wetland</p>
                                        ) : (
                                            <p>ওয়েটল্যান্ড</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Upland & Wetland</p>
                                        ) : (
                                            <p>উপল্যান্ড এবং ওয়েটল্যান্ড</p>
                                        )}
                                    </li>
                                </ul>
                            </Collapsible>
                            <Collapsible
                                trigger={
                                    language === "en" ? (
                                        <p>Soil Color</p>
                                    ) : (
                                        <p>মাটির রঙ</p>
                                    )
                                }
                            >
                                <ul>
                                    <li>
                                        {language === "en" ? (
                                            <p>Gray</p>
                                        ) : (
                                            <p>গ্রে</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Dark Gray</p>
                                        ) : (
                                            <p>গাঢ় ধূসর</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Black</p>
                                        ) : (
                                            <p>কালো</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Pale Brown</p>
                                        ) : (
                                            <p>সাদা বাদামী</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Brown</p>
                                        ) : (
                                            <p>বাদামী</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Very Low (1.0%)</p>
                                        ) : (
                                            <p>খুব কম (1.0%)</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Red</p>
                                        ) : (
                                            <p>লাল</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Green Gray</p>
                                        ) : (
                                            <p>সবুজ ধূসর</p>
                                        )}
                                    </li>
                                    <li>
                                        White
                                        {language === "en" ? (
                                            <p>White</p>
                                        ) : (
                                            <p>সাদা</p>
                                        )}
                                    </li>
                                    <li>
                                        {language === "en" ? (
                                            <p>Mixed Color</p>
                                        ) : (
                                            <p>মিশ্রিত রঙ</p>
                                        )}
                                    </li>
                                </ul>
                            </Collapsible>
                            <Collapsible
                                trigger={
                                    language === "en" ? (
                                        <p>Rainfall</p>
                                    ) : (
                                        <p>বৃষ্টিপাত</p>
                                    )
                                }
                            >
                                {language === "en" ? (
                                    <p>Average Rainfall</p>
                                ) : (
                                    <p>গড় বৃষ্টিপাত</p>
                                )}
                            </Collapsible>
                            <Collapsible
                                trigger={
                                    language === "en" ? (
                                        <p>Average Temperature</p>
                                    ) : (
                                        <p>গড় তাপমাত্রা</p>
                                    )
                                }
                            >
                                {language === "en" ? (
                                    <p>
                                        Average Temperature in Degree Celcius{" "}
                                    </p>
                                ) : (
                                    <p>ডিগ্রি সেলসিয়াসের গড় তাপমাত্রা</p>
                                )}
                            </Collapsible>
                        </Collapsible>
                    </div>
                </div>
                <div className="about_us_container">
                    {language === "en" ? (
                        <h1>References</h1>
                    ) : (
                        <h1>তথ্যসূত্র</h1>
                    )}

                    <Collapsible
                        trigger={
                            language === "en" ? (
                                <p>Papers, Links & References</p>
                            ) : (
                                <p>পত্র, লিংক এবং তথ্যসূত্র</p>
                            )
                        }
                    >
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
                    {language === "en" ? <h1>Codebase</h1> : <h1>কোডবেজ</h1>}
                    <Collapsible
                        trigger={
                            language === "en" ? (
                                <p>🖱️ Codebase</p>
                            ) : (
                                <p>🖱️ কোডবেজ</p>
                            )
                        }
                    >
                        <p>
                            Project Codebase is available on{" "}
                            <a
                                href="https://github.com/Sabbirmadman/cp-finder.git"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p
                                    style={{
                                        color: "#1e90ff",
                                        textDecoration: "underline",
                                        fontSize: "1.2rem",
                                    }}
                                >
                                    {" "}
                                    <i
                                        className="fa-brands fa-github"
                                        style={{
                                            padding: "0 0.5rem",
                                        }}
                                    ></i>
                                    {"   "}
                                    https://github.com/Sabbirmadman/cp-finder.git
                                </p>
                            </a>
                        </p>
                    </Collapsible>
                    <h1>Api</h1>
                    <Collapsible trigger="🖱️ Api">
                        <h3>
                            For Api call to the server to get Crops prediction
                            use this api link{" "}
                        </h3>
                        <div
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "10px",
                                padding: "10px",
                            }}
                        >
                            <p>
                                https://cropping-api.herokuapp.com/api/predict
                            </p>
                            <p>method : POST</p>
                            <p>
                                Input data :<br></br> data :{"{"}
                                <p
                                    style={{
                                        paddingLeft: "20px",
                                    }}
                                >
                                    land_type: catagorical (0-5),<br></br>
                                    topography: catagorical (0-5),<br></br>
                                    water_recession: catagorical (0-5),<br></br>
                                    drainage_condition: catagorical (0-5){" "}
                                    <br></br>
                                    soil_texture: catagorical (0-5),<br></br>
                                    soil_consistency_moist: catagorical (0-5),
                                    <br></br>
                                    soil_moisture: catagorical (0-5),<br></br>
                                    soil_reaction: catagorical (0-5),<br></br>
                                    soil_salinity: catagorical (0-5),<br></br>
                                    organic_matter: catagorical (0-5),<br></br>
                                    farming_method: catagorical (0-5),<br></br>
                                    soil_color: catagorical (0-5),<br></br>
                                    Temp_Robi: float,<br></br>
                                    Temp_Kharif1: float,<br></br>
                                    Temp_Kharif2: float,<br></br>
                                    Rain_Rabi: float,<br></br>
                                    Rain_Kharif1: float,<br></br>
                                    Rain_Kharif2: float,<br></br>
                                    model_number: catagorical (0-1)
                                </p>
                                {"}"}
                            </p>
                            <p>Response data : Cropping Pattern Id (integer)</p>
                        </div>
                    </Collapsible>
                </div>
                <div id="Contributors" className="about_us_container">
                    <h1>Contributors</h1>
                    <Collapsible trigger="🖱️ Contributors">
                        {language === "en" ? (
                            <h5>Project Supervisor</h5>
                        ) : (
                            <h5>প্রকল্প পরিদর্শক</h5>
                        )}
                        <p>
                            🎓 Prof. Dr. Md. Mozammel Huq Azad Khan, CSE
                            Department, East West University
                            <a href="https://scholar.google.com/citations?hl=en&user=9K0sw1AAAAAJ">
                                {" "}
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </p>
                        {language === "en" ? (
                            <h5>Students</h5>
                        ) : (
                            <h5>ছাত্রছাত্রী</h5>
                        )}
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
