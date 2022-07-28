import React, { useState } from "react";
import Slider from "react-input-slider";
import axios from "axios";
import { croppingPatternData } from "../../data";
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

    const [isLOading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setIsLoading(true);

        axios({
            method: "post",
            url: "https://cropping-api.herokuapp.com/api/predict",
            data: formData,
        })
            .then((res) => {
                console.log(res.data);
                setPrediction(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const testFormData1 = {
        land_type: "0",
        topography: "0",
        water_recession: "1",
        drainage_condition: "2",
        soil_texture: "3",
        soil_consistency_moist: "1",
        soil_moisture: "1",
        soil_reaction: "1",
        soil_salinity: "4",
        organic_matter: "2",
        farming_method: "2",
        soil_color: "0",
        Temp_Robi: 21.49,
        Temp_Kharif1: 26.18,
        Temp_Kharif2: 28.838,
        Rain_Rabi: 80.35,
        Rain_Kharif1: 643.5,
        Rain_Kharif2: 2353.05,
        model_number: "1",
        //3.0
    };

    const testFormData2 = {
        land_type: "3",
        topography: "0",
        water_recession: "3",
        drainage_condition: "5",
        soil_texture: "1",
        soil_consistency_moist: "1",
        soil_moisture: "1",
        soil_reaction: "3",
        soil_salinity: "4",
        organic_matter: "1",
        farming_method: "3",
        soil_color: "0",
        Temp_Robi: 20.8,
        Temp_Kharif1: 28.26,
        Temp_Kharif2: 28.765,
        Rain_Rabi: 61.5,
        Rain_Kharif1: 347.0,
        Rain_Kharif2: 1304.0,
        model_number: "1",
        // 58.0
    };

    const testFormData3 = {
        land_type: "1",
        topography: "0",
        water_recession: "2",
        drainage_condition: "3",
        soil_texture: "2",
        soil_consistency_moist: "1",
        soil_moisture: "1",
        soil_reaction: "1",
        soil_salinity: "0",
        organic_matter: "2",
        farming_method: "2",
        soil_color: "0",
        Temp_Robi: 21.83,
        Temp_Kharif1: 27.19,
        Temp_Kharif2: 28.83,
        Rain_Rabi: 88.08,
        Rain_Kharif1: 453.0,
        Rain_Kharif2: 52336.0,
        model_number: "1",

        // 36.0
    };
    const testFormDataRandom = {
        land_type: Math.floor(Math.random() * 4).toString(),
        topography: Math.floor(Math.random() * 3).toString(),
        water_recession: Math.floor(Math.random() * 7).toString(),
        drainage_condition: Math.floor(Math.random() * 6).toString(),
        soil_texture: Math.floor(Math.random() * 6).toString(),
        soil_consistency_moist: Math.floor(Math.random() * 6).toString(),
        soil_moisture: Math.floor(Math.random() * 5).toString(),
        soil_reaction: Math.floor(Math.random() * 7).toString(),
        soil_salinity: Math.floor(Math.random() * 7).toString(),
        organic_matter: Math.floor(Math.random() * 6).toString(),
        farming_method: Math.floor(Math.random() * 4).toString(),
        soil_color: Math.floor(Math.random() * 10).toString(),
        Temp_Robi:
            Math.floor(Math.random() * (30 - 18 + 1) + 18) + Math.random(),
        Temp_Kharif1:
            Math.floor(Math.random() * (29 - 19 + 1) + 19) + Math.random(),
        Temp_Kharif2:
            Math.floor(Math.random() * (35 - 20 + 1) + 20) + Math.random(),
        Rain_Rabi:
            Math.floor(Math.random() * (200 - 30 + 1) + 30) + Math.random(),
        Rain_Kharif1:
            Math.floor(Math.random() * (1100 - 200 + 1) + 200) + Math.random(),
        Rain_Kharif2:
            Math.floor(Math.random() * (3000 - 1000 + 1) + 1000) +
            Math.random(),
        model_number: "1",
    };

    const setTestDataToForm = (e) => {
        setFormData(e);
    };

    const [showPopup, setShowPopup] = useState(false);

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
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        cursor: "pointer",
                    }}
                    // onClick={() => setTestDataToForm(testFormDataRandom)}
                    onClick={() => setShowPopup(!showPopup)}
                >
                    ⚙️
                </h1>
                {showPopup && (
                    <div className="popup_window">
                        <div className="popup_content">
                            <div className="popup_content_body">
                                <div className="popup_content_left">
                                    <h3>Input values</h3>
                                    <div className="data_container">
                                        <div>
                                            <p>
                                                Land Type : {formData.land_type}{" "}
                                            </p>
                                            <p>
                                                Topography :{" "}
                                                {formData.topography}{" "}
                                            </p>
                                            <p>
                                                Water Recession :{" "}
                                                {formData.water_recession}{" "}
                                            </p>
                                            <p>
                                                Drainage Condition :{" "}
                                                {formData.drainage_condition}{" "}
                                            </p>
                                            <p>
                                                Soil Texture :{" "}
                                                {formData.soil_texture}{" "}
                                            </p>
                                            <p>
                                                Soil Consistency Moist :{" "}
                                                {
                                                    formData.soil_consistency_moist
                                                }{" "}
                                            </p>
                                            <p>
                                                Soil Moisture :{" "}
                                                {formData.soil_moisture}{" "}
                                            </p>
                                            <p>
                                                Soil Reaction :{" "}
                                                {formData.soil_reaction}{" "}
                                            </p>
                                            <p>
                                                Soil Salinity :{" "}
                                                {formData.soil_salinity}{" "}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Organic Matter :{" "}
                                                {formData.organic_matter}{" "}
                                            </p>
                                            <p>
                                                Farming Method :{" "}
                                                {formData.farming_method}{" "}
                                            </p>
                                            <p>
                                                Soil Color :{" "}
                                                {formData.soil_color}{" "}
                                            </p>
                                            <p>
                                                Temp Robi : {formData.Temp_Robi}{" "}
                                            </p>
                                            <p>
                                                Temp Kharif1 :{" "}
                                                {formData.Temp_Kharif1}{" "}
                                            </p>
                                            <p>
                                                Temp Kharif2 :{" "}
                                                {formData.Temp_Kharif2}{" "}
                                            </p>
                                            <p>
                                                Rain Rabi : {formData.Rain_Rabi}{" "}
                                            </p>
                                            <p>
                                                Rain Kharif1 :{" "}
                                                {formData.Rain_Kharif1}{" "}
                                            </p>
                                            <p>
                                                Rain Kharif2 :{" "}
                                                {formData.Rain_Kharif2}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_content_right">
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() =>
                                            setTestDataToForm(testFormData1)
                                        }
                                    >
                                        set values for cp 3.0{" "}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() =>
                                            setTestDataToForm(testFormData2)
                                        }
                                    >
                                        set values for cp 58{" "}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() =>
                                            setTestDataToForm(testFormData3)
                                        }
                                    >
                                        set values for cp 36.0{" "}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() =>
                                            setTestDataToForm(
                                                testFormDataRandom
                                            )
                                        }
                                    >
                                        set random values for cp
                                    </button>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="close"
                                onClick={() => setShowPopup(!showPopup)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
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
                Natural crop production without irrigation form Cp prediction
                form
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
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        name="Temp_Robi"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                    /> */}
                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Temp_Robi}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Temp_Robi", value: x },
                                })
                            }
                            xmin={18.0}
                            xmax={25.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Temp_Robi}
                    </div>
                </div>
                <div>
                    <label className="dropdownLabel">Temp Kharif1</label>
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="Temp_Kharif1"
                    /> */}

                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Temp_Kharif1}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Temp_Kharif1", value: x },
                                })
                            }
                            xmin={19.0}
                            xmax={29.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Temp_Kharif1}
                    </div>
                </div>
                <div>
                    <label className="dropdownLabel">Temp Kharif 2</label>
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="Temp_Kharif2"
                    /> */}

                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Temp_Kharif2}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Temp_Kharif2", value: x },
                                })
                            }
                            xmin={20.0}
                            xmax={35.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Temp_Kharif2}
                    </div>
                </div>
                <div>
                    <label className="dropdownLabel">Rain Robi</label>
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        name="Rain_Rabi"
                        onChange={(e) => handleChange(e)}
                    /> */}

                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Rain_Rabi}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Rain_Rabi", value: x },
                                })
                            }
                            xmin={31.0}
                            xmax={194.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Rain_Rabi}
                    </div>
                </div>
                <div>
                    <label className="dropdownLabel">Rain Kharif1</label>
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(e) => handleChange(e)}
                        name="Rain_Kharif1"
                    /> */}

                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Rain_Kharif1}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Rain_Kharif1", value: x },
                                })
                            }
                            xmin={200.0}
                            xmax={1100.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Rain_Kharif1}
                    </div>
                </div>
                <div>
                    <label className="dropdownLabel">Rain Kharif2</label>
                    {/* <input
                        type="number"
                        className="select_container_Inp"
                        onChange={(e) => handleChange(e)}
                        name="Rain_Kharif2"
                    /> */}

                    <div className="sliderInput">
                        <Slider
                            xstep={0.2}
                            axis="x"
                            x={formData.Rain_Kharif2}
                            onChange={({ x }) =>
                                handleChange({
                                    target: { name: "Rain_Kharif2", value: x },
                                })
                            }
                            xmin={1000.0}
                            xmax={3000.0}
                        />
                    </div>

                    <div className="slider_value">
                        Value: {formData.Rain_Kharif2}
                    </div>
                </div>
            </div>

            <h3>Model Selection</h3>
            <div className="form_input_container_top">
                <div>
                    <label className="dropdownLabel">Model With Accuracy</label>
                    <select
                        className="select_container"
                        onChange={(data) => {
                            handleChange(data);
                        }}
                        name="model_number"
                    >
                        <option value="2">
                            Random Forest Classifier -- 96% accuracy
                        </option>
                        <option value="1">
                            Decision Tree -- 95.4% accuracy
                        </option>
                        <option disabled value="3">
                            K-nearest Neighbours -- 94.4% accuracy
                        </option>
                    </select>
                </div>
            </div>

            <div className="prediction_container">
                <button className="submit_button" onClick={handleSubmit}>
                    🧠 Predict Cropping Pattern
                </button>
                <div className="prediction_output">
                    {isLOading && <div className="loader"></div>}

                    {!isLOading && prediction ? (
                        <div className="prediction_container_header">
                            CP-id : {prediction} -- test view
                            {croppingPatternData.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="prediction_container_item"
                                    >
                                        {
                                            //string to number
                                            Number(data.id) ===
                                                Number(prediction) && (
                                                <div className="prediction_container_item_selected">
                                                    <div className="prediction_container_item_selected_text">
                                                        <div className="prediction_row">
                                                            <div>
                                                                Robi:{" "}
                                                                {
                                                                    data.cp.split(
                                                                        "-"
                                                                    )[0]
                                                                }
                                                            </div>
                                                            <a
                                                                href={`https://www.google.com/search?q=${
                                                                    data.cp.split(
                                                                        "-"
                                                                    )[0]
                                                                }`}
                                                                target="_blank"
                                                            >
                                                                🌐
                                                            </a>
                                                        </div>
                                                        <div className="prediction_row">
                                                            <div>
                                                                Kharif1:{" "}
                                                                {
                                                                    data.cp.split(
                                                                        "-"
                                                                    )[1]
                                                                }
                                                            </div>
                                                            <a
                                                                href={`https://www.google.com/search?q=${
                                                                    data.cp.split(
                                                                        "-"
                                                                    )[1]
                                                                }`}
                                                                target="_blank"
                                                            >
                                                                🌐
                                                            </a>
                                                        </div>
                                                        {data.cp.split(
                                                            "-"
                                                        )[2] && (
                                                            <div className="prediction_row">
                                                                <div>
                                                                    Kharif2:{" "}
                                                                    {
                                                                        data.cp.split(
                                                                            "-"
                                                                        )[2]
                                                                    }
                                                                </div>
                                                                <a
                                                                    href={`https://www.google.com/search?q=${
                                                                        data.cp.split(
                                                                            "-"
                                                                        )[2]
                                                                    }`}
                                                                    target="_blank"
                                                                >
                                                                    🌐
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="prediction_container_header">
                            {!isLOading && <div> No prediction done yet</div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
