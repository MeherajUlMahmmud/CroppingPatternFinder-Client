import React from "react";
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
    const [formData, setFormData] = React.useState({
        land_type: "",
        topography: "",
        water_recession: "",
        drainage_condition: "",
        soil_texture: "",
        soil_consistency_moist: "",
        soil_moisture: "",
        soil_reaction: "",
        soil_salinity: "",
        organic_matter: "",
        farming_method: "",
        soil_color: "",
        Temp_Robi: 0,
        Temp_Kharif1: 0,
        Temp_Kharif2: 0,
        Rain_Rabi: 0,
        Rain_Kharif1: 0,
        Rain_Kharif2: 0,
    });

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
    };

    return (
        <div className="HomePage_container">
            <div className="HomePage_Header">
                <h1>Cp prediction form</h1>
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
                {" "}
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
            <button className="submit_button">Predict CP</button>
        </div>
    );
};

export default HomePage;
