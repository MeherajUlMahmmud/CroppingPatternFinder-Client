import React, { useState } from "react";
import CpList from "./pages/CpList.js";
import HomePage from "./pages/Home/HomePage.js";
import "./app.scss";

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
                    HomePage
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
            </div>
            <div className="Window">
                <HomePage />
                <CpList />
            </div>
        </div>
    );
};

export default App;
