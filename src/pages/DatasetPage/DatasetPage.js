import React, { useEffect, useState } from "react";
import "./datasetPage.scss";
import districtData from "../../database/ds_district.js";
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

    // sort districtCp by "count" value

    return (
        <div className="DatasetPageContainer">
            <p>District Wise Croping pattenr frequency</p>

            <input
                type="text"
                className="searchInput"
                placeholder="Search"
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
        </div>
    );
};

export default DatasetPage;
