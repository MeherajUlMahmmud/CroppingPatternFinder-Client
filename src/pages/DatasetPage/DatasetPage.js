import React, { useEffect, useState } from "react";
import "./datasetPage.scss";
import districtData from "../../database/ds_district.js";
import cpFrequenct from "../../database/cp_frequency.js";
import { croppingPatternData } from "./../../data";
import ChartRow from "./ChartRow";

const DatasetPage = () => {
    const [uniqueDistrict, setUniqueDistrict] = useState([]);
    const [selectedCp, setSelectedCp] = useState("");
    //sort districtData columns by "count" value

    //find theunique "dis" in the districtData
    useEffect(() => {
        const uniqueDistrict = [
            ...new Set(districtData.map((item) => item.dis)),
        ];
        setUniqueDistrict(uniqueDistrict);
    }, [districtData]);

    //for each district, find all "cp" and "count"
    const [districtCpCount, setDistrictCpCount] = useState([]);
    useEffect(() => {
        const districtCpCount = [];
        uniqueDistrict.forEach((district) => {
            const cpCount = {
                dis: district,
                cp: [],
                count: [],
            };
            districtData.forEach((item) => {
                if (item.dis === district) {
                    cpCount.cp.push(item.cp);
                    cpCount.count.push(item.count);
                }
            });
            districtCpCount.push(cpCount);
        });
        setDistrictCpCount(districtCpCount);
    }, [uniqueDistrict, districtData]);

    // map every cp in districtCpCount to a list of cpin the croppingPatternData
    const [districtCp, setDistrictCp] = useState([]);
    useEffect(() => {
        const districtCp = [];
        districtCpCount.forEach((item) => {
            const cp = {
                dis: item.dis,
                cp: [],
                count: item.count,
            };
            item.cp.forEach((cpItem) => {
                croppingPatternData.forEach((cpData) => {
                    if (parseInt(cpItem) === parseInt(cpData.id)) {
                        cp.cp.push(cpData.cp);
                    }
                });
            });

            districtCp.push(cp);
        });
        setDistrictCp(districtCp);
    }, [districtCpCount, croppingPatternData]);

    // map every Cropping_Pattern in cpFrequenct to a list of cp in the croppingPatternData
    const [cpFrequency, setCpFrequency] = useState([]);
    useEffect(() => {
        const cpFrequency = [];
        cpFrequenct.forEach((item) => {
            const cp = {
                cp: [],
                Frequency: item.Frequency,
            };
            croppingPatternData.forEach((cpData) => {
                if (parseInt(item.Cropping_Pattern) === parseInt(cpData.id)) {
                    cp.cp.push(cpData.cp);
                }
            });
            cpFrequency.push(cp);
        });
        setCpFrequency(cpFrequency);
    }, [cpFrequenct, croppingPatternData]);

    return (
        <div className="DatasetPageContainer">
            <p className="headerText">
                District Wise Croping pattenr frequency
            </p>
            <input
                type="text"
                className="searchInput"
                placeholder="🔎 Search District "
                onChange={(e) => setSelectedCp(e.target.value)}
            />
            <div className="DisWiseChartContainer">
                {districtCp.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.dis.includes(selectedCp) && (
                                <>
                                    <p>{item.dis}</p>
                                    <ChartRow item={item} />
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="headerText">
                Cropping Pattern Frequency Destribution
            </p>
            <div className="CpFrequencyContainer">
                {/* {JSON.stringify(cpFrequency)} */}
                {cpFrequency.map((item, index) => {
                    return (
                        <div key={index} className="CpFrequencyContainerRow">
                            <div className="lebel">
                                {((item.Frequency / 751) * 100).toFixed(2)}%-
                                {item.cp}
                            </div>
                            <div
                                className="row"
                                style={{
                                    width: `${item.Frequency * 7}px`,
                                }}
                            >
                                {item.Frequency}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DatasetPage;
