import logo from "./logo.svg";
import "./App.css";
import { data, croppingPatternData } from "./data.js";
import React, { useState } from "react";

function App() {
    const [filteredCroppingPatternData, setFilteredCroppingPatternData] =
        useState(croppingPatternData);

    //filter cropping pattern with user input with - and special characters

    const filterCroppingPattern = (e) => {
        const filterValue = e.target.value;
        const filteredCroppingPatternData = croppingPatternData.filter(
            (item) =>
                item.cp.toUpperCase().includes(filterValue.toUpperCase()) ||
                item.id.toUpperCase().includes(filterValue.toUpperCase())
        );
        setFilteredCroppingPatternData(filteredCroppingPatternData);
    };

    return (
        <div className="App">
            <div className="app_header">CSE 400 Cropping Patterns</div>
            <div
                className="App flooting "
                style={{
                    backgroundColor: "white",
                }}
            >
                <input
                    type="text"
                    onChange={filterCroppingPattern}
                    className="filter_input flooting"
                    placeholder="🔍 Filter Cropping Pattern"
                />

                <div className="dataset_row flooting">
                    <div className="numeric_data">ID</div>
                    <div className="catagorical_data">Cropping pattern</div>
                    <div className="numeric_data">Area(ha)</div>
                    <div className="numeric_data">%of NAC</div>
                    <div className="numeric_data">No. of district</div>
                    <div className="numeric_data">No of upazila</div>
                </div>
            </div>

            <div className="dataset_container">
                {filteredCroppingPatternData.map((item, index) => {
                    return (
                        <div className="dataset_row" key={index}>
                            <div className="numeric_data">{item.id}</div>
                            <div className="catagorical_data">{item.cp}</div>
                            <div className="numeric_data">
                                {item["area(ha)"]}
                            </div>
                            <div className="numeric_data">
                                {item["%of NAC"]}
                            </div>
                            <div className="numeric_data">
                                {item["No. of district"]}
                            </div>
                            <div className="numeric_data">
                                {item["No of upazila"]}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="app_footer">footer</div>
        </div>
    );
}

export default App;
