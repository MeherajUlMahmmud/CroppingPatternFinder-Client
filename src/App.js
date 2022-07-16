import React, { useState } from "react";
import CpList from "./pages/CpList.js";
import HomePage from "./pages/Home/HomePage.js";
import "./app.scss";
import AboutPage from "./pages/about/AboutPage.js";
import DatasetPage from "./pages/DatasetPage/DatasetPage.js";

const App = () => {
    const [page, setPage] = useState("#home");

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="AppContainer">
            <div className="Navigator">
                <div className="Header">Cropping Pattern Prediction System</div>
                <div
                    className={
                        page === "#home"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#home")}
                >
                    CP Prediction
                </div>
                <div
                    className={
                        page === "#dataset"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#dataset")}
                >
                    Dataset
                </div>

                <div
                    className={
                        page === "#cpList"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#cpList")}
                >
                    CP List
                </div>

                <div
                    className={
                        page === "#about"
                            ? "navigationBtn active"
                            : "navigationBtn"
                    }
                    onClick={() => handlePageChange("#about")}
                >
                    About
                </div>
            </div>
            <div className="Window">
                {page === "#home" && <HomePage />}
                {page === "#cpList" && <CpList />}
                {page === "#about" && <AboutPage />}
                {page === "#dataset" && <DatasetPage />}
            </div>
        </div>
    );
};

export default App;
