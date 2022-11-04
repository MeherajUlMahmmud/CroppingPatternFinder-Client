import React, { useState } from "react";
import CpList from "./pages/CpList.js";
import HomePage from "./pages/Home/HomePage.js";
import "./app.scss";
import AboutPage from "./pages/About/AboutPage.js";
import DatasetPage from "./pages/DatasetPage/DatasetPage.js";

const App = () => {
    const [page, setPage] = useState("#home");
    const [language, setLanguage] = useState("en");

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="AppContainer">
            <div className="Navigator">
                <div className="Header">
                    {language === "en"
                        ? "Cropping Pattern Prediction System"
                        : `ক্রপিং প্যাটার্ন পূর্বাভাস সিস্টেম`}
                </div>
                <div
                    className={
                        page === "#home"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#home")}
                >
                    {language === "en"
                        ? "CP Prediction"
                        : "ক্রপিং প্যাটার্ন পূর্বাভাস "}
                </div>
                <div
                    className={
                        page === "#dataset"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#dataset")}
                >
                    {language === "en" ? "Dataset" : "ডেটাসেট"}
                </div>

                <div
                    className={
                        page === "#cpList"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#cpList")}
                >
                    {language === "en" ? "CP List" : "ক্রপিং তালিকা"}
                </div>

                <div
                    className={
                        page === "#about"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#about")}
                >
                    {language === "en" ? "About" : "সম্পর্কে"}
                </div>

                <div
                    className="navigationBtn"
                    style={{
                        backgroundColor: "#252533",
                    }}
                >
                    <select
                        className="select"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option className="option" value="en">
                            English
                        </option>
                        <option className="option" value="bn">
                            বাংলা
                        </option>
                    </select>
                </div>
            </div>
            <div className="Window">
                {page === "#home" && <HomePage language={language} />}
                {page === "#cpList" && <CpList language={language} />}
                {page === "#about" && <AboutPage language={language} />}
                {page === "#dataset" && <DatasetPage language={language} />}
            </div>
        </div>
    );
};

export default App;
