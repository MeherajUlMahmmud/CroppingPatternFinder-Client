import React, { useState } from "react";

import "./datasetPage.scss";

const ChartRow = ({ item }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="chartContainer">
            {item.cp.map((cp, index) => {
                return (
                    <div className="chartRows" key={index}>
                        {item.count[index]}

                        <div
                            className="barHeight"
                            style={{
                                height: `${item.count[index] * 20}px`,
                                //setup random color for each bar
                                backgroundColor: `rgb(
                                                    ${Math.floor(
                                                        ((item.count[index] *
                                                            100) %
                                                            255) +
                                                            1
                                                    )},
                                                    ${Math.floor(
                                                        ((item.count[index] *
                                                            112) %
                                                            255) +
                                                            1
                                                    )},
                                                    ${Math.floor(
                                                        ((item.count[index] *
                                                            300) %
                                                            255) +
                                                            1
                                                    )}
                                                )`,
                            }}
                        ></div>

                        <div className="lebel"> {cp} </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChartRow;
