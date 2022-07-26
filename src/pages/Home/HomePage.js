import React, { useState } from "react";
import axios from "axios";
import "./homePage.scss";
import {
    land_types,
    topography,
    water_recession,
    drainage_condition,
    soil_texture,
    soil_consistency_moist,
    soil_moisture,
    soil_reaction,
    soil_salinity,
    organic_matter,
    farming_method,
    soil_color,
} from "../../database/uniqueData.js";

const HomePage = () => {
    const [formData, setFormData] = useState({
        land_type: "1",
        topography: "0",
        water_recession: "1",
        drainage_condition: "5",
        soil_texture: "2",
        soil_consistency_moist: "1",
        soil_moisture: "2",
        soil_reaction: "3",
        soil_salinity: "4",
        organic_matter: "1",
        farming_method: "3",
        soil_color: "3",
        Temp_Robi: 21.83,
        Temp_Kharif1: 27.75,
        Temp_Kharif2: 28.41,
        Rain_Rabi: 69.08,
        Rain_Kharif1: 475.0,
        Rain_Kharif2: 1596.25,
        model_number: "1",
    });
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios({
            method: "post",
            url: "https://cropping-api.herokuapp.com/api/predict",
            data: formData,
        })
            .then((res) => {
                console.log(res.data);
                setPrediction(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="HomePage_container">
            <div className="HomePage_Header">
                <h1
                    style={{
                        textAlign: "center",
                    }}
                >
                    Cropping Pattern Prediction Form
                </h1>
                {/* <div>{formData.land_type}</div>
                <div>{formData.topography}</div>
                <div>{formData.water_recession}</div>
                <div>{formData.drainage_condition}</div>
                <div>{formData.soil_texture}</div>
                <div>{formData.soil_consistency_moist}</div>
                <div>{formData.soil_moisture}</div>
                <div>{formData.soil_reaction}</div>
                <div>{formData.soil_salinity}</div>
                <div>{formData.organic_matter}</div>
                <div>{formData.farming_method}</div>
                <div>{formData.soil_color}</div>
                <div>{formData.Temp_Robi}</div>
                <div>{formData.Temp_Kharif1}</div>
                <div>{formData.Temp_Kharif2}</div>
                <div>{formData.Rain_Rabi}</div>
                <div>{formData.Rain_Kharif1}</div>
                <div>{formData.Rain_Kharif2}</div> */}
            </div>

            <div className="form_input_container_top">
                <div>
                    <label className="dropdownLabel">Land Type</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="land_type"
                    >
                        {land_types.map((land_type) => (
                            <option
                                key={land_type.value}
                                value={land_type.value}
                            >
                                {land_type.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Land Topography</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="topography"
                    >
                        {topography.map((topography) => (
                            <option
                                key={topography.value}
                                value={topography.value}
                            >
                                {topography.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Water Recession</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="water_recession"
                    >
                        {water_recession.map((water_recession) => (
                            <option
                                key={water_recession.value}
                                value={water_recession.value}
                            >
                                {water_recession.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="dropdownLabel">Drainage Condition</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="drainage_condition"
                    >
                        {drainage_condition.map((drainage_condition) => (
                            <option
                                key={drainage_condition.value}
                                value={drainage_condition.value}
                            >
                                {drainage_condition.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="dropdownLabel">Soil Texture</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_texture"
                    >
                        {soil_texture.map((soil_texture) => (
                            <option
                                key={soil_texture.value}
                                value={soil_texture.value}
                            >
                                {soil_texture.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Soil Consistency</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_consistency_moist"
                    >
                        {soil_consistency_moist.map(
                            (soil_consistency_moist) => (
                                <option
                                    key={soil_consistency_moist.value}
                                    value={soil_consistency_moist.value}
                                >
                                    {soil_consistency_moist.name}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Soil Moisture</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_moisture"
                    >
                        {soil_moisture.map((soil_moisture) => (
                            <option
                                key={soil_moisture.value}
                                value={soil_moisture.value}
                            >
                                {soil_moisture.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Soil Reaction</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_reaction"
                    >
                        {soil_reaction.map((soil_reaction) => (
                            <option
                                key={soil_reaction.value}
                                value={soil_reaction.value}
                            >
                                {soil_reaction.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Soil Salinity</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_salinity"
                    >
                        {soil_salinity.map((soil_salinity) => (
                            <option
                                key={soil_salinity.value}
                                value={soil_salinity.value}
                            >
                                {soil_salinity.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <h3>
                Natural crop production without irrigationCp prediction form Cp
                prediction form
            </h3>
            <div className="form_input_container_top">
                <div>
                    <label className="dropdownLabel">Organic Matter</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="organic_matter"
                    >
                        {organic_matter.map((organic_matter) => (
                            <option
                                key={organic_matter.value}
                                value={organic_matter.value}
                            >
                                {organic_matter.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Farming Method</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="farming_method"
                    >
                        {farming_method.map((farming_method) => (
                            <option
                                key={farming_method.value}
                                value={farming_method.value}
                            >
                                {farming_method.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="dropdownLabel">Soil Color</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="soil_color"
                    >
                        {soil_color.map((soil_color) => (
                            <option
                                key={soil_color.value}
                                value={soil_color.value}
                            >
                                {soil_color.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="dropdownLabel">Temp Robi</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        name="Temp_Robi"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                    />
                </div>
                <div>
                    <label className="dropdownLabel">Temp Kharif1</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="Temp_Kharif1"
                    />
                </div>
                <div>
                    <label className="dropdownLabel">Temp Kharif 2</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="Temp_Kharif2"
                    />
                </div>
                <div>
                    <label className="dropdownLabel">Rain Robi</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        name="Rain_Rabi"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label className="dropdownLabel">Rain Kharif1</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(e) => handleChange(e)}
                        name="Rain_Kharif1"
                    />
                </div>
                <div>
                    <label className="dropdownLabel">Rain Kharif2</label>
                    <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(e) => handleChange(e)}
                        name="Rain_Kharif2"
                    />
                </div>
            </div>

            <h3>Model Selection</h3>
            <div className="form_input_container_top">
                <div>
                    <label className="dropdownLabel">Model Number</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="model_number"
                    >
                        <option value="1">Decision Tree</option>
                        <option value="2">Random Forest Classifier</option>
                        <option value="3">K-nearest Neighbours</option>
                    </select>
                </div>
            </div>
            <button className="submit_button" onClick={handleSubmit}>
                Predict Cropping Pattern
            </button>

            <div className="prediction_container">Result: {prediction}</div>
        </div>
    );
};

export default HomePage;
