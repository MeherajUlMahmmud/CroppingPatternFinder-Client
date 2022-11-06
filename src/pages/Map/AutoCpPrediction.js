import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { findClosest, locationData } from "../../database/locationData";
import "./autoCurrect.scss";

export default function AutoCpPrediction({ language }) {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    // return !isGeolocationAvailable ? (
    //     <div>Your browser does not support Geolocation</div>
    // ) : !isGeolocationEnabled ? (
    //     <div>Geolocation is not enabled</div>
    // ) : coords ? (
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <td>latitude</td>
    //                 <td>{coords.latitude}</td>
    //             </tr>
    //             <tr>
    //                 <td>longitude</td>
    //                 <td>{coords.longitude}</td>
    //             </tr>
    //         </tbody>
    //     </table>
    // ) : (
    //     <div>Getting the location data&hellip; </div>
    // );
    const [position, setPosition] = useState([23.77, 90.39]);
    const [closest, setClosest] = useState(null);

    useEffect(() => {
        if (coords) {
            setPosition([coords.latitude, coords.longitude]);
        }
    }, [coords]);
    useEffect(() => {
        if (coords) {
            console.log(findClosest(coords.latitude, coords.longitude));
            setClosest(findClosest(coords.latitude, coords.longitude));
        }
    }, [coords]);

    return (
        <div className="autoCurrectContainer">
            <div
                style={{
                    height: "40vh",
                    width: "100%",
                }}
                className="mapHolder"
            >
                <i class="fa-solid fa-location-crosshairs"></i>
                <MapContainer
                    center={position}
                    zoom={6} // zoom range 0-18
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={position}>
                        <Popup>
                            {language === "en"
                                ? "Your Location"
                                : "আপনার অবস্থান"}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            {/* Upazila: "Gaibandha-Sadar", Lat: 25.32572, Lng: 89.57501,
            Most_Frequent_Cropping_Pattern: "Boro-Aus-T.Aman",
            number_of_unique_cropping_pattern: 7, Average_Rainfall_Robi: 32.0,
            Average_Rainfall_Kharif1: 411.0, Average_Rainfall_Kharif2: 1850.0,
            Average_Temp_Robi: 19.56, Average_Temp_Kharif1: 25.89,
            Average_Temp_Kharif2: 28.29, */}
            <div className="autoCurrectInfo">
                <p>
                    <i class="fa-solid fa-circle-info"></i>{" "}
                    {language === "en"
                        ? "Your Location is automatically detected by your browser. If you want to change your location, please change your browser location settings."
                        : "আপনার অবস্থান আপনার ব্রাউজার দ্বারা স্বয়ংক্রিয়ভাবে সনাক্ত করা হয়। আপনি যদি আপনার অবস্থান পরিবর্তন করতে চান তবে দয়া করে আপনার ব্রাউজার অবস্থান সেটিংস পরিবর্তন করুন।"}
                </p>
                <h3>{language === "en" ? "Your Location" : "আপনার অবস্থান"}</h3>
                <div className="gridItem">
                    <div>
                        <h3>Your Details</h3>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>{" "}
                            {language === "en" ? "Latitude" : "অক্ষাংশ"}:{" "}
                            {coords ? coords.latitude : "Loading..."}
                        </p>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>{" "}
                            {language === "en" ? "Longitude" : "দ্রাঘিমাংশ"}:{" "}
                            {coords ? coords.longitude : "Loading..."}
                        </p>
                    </div>
                    <div>
                        <h3>
                            {language === "en"
                                ? "Closest Location"
                                : "নিকটতম অবস্থান"}
                        </h3>
                        <p>
                            {language === "en" ? "Upazila" : "উপজেলা"}:{" "}
                            {closest ? closest.Upazila : "Loading..."}
                        </p>
                        <h3>
                            {language === "en"
                                ? "Other Info"
                                : " অন্যান্য তথ্য"}
                        </h3>

                        <p>
                            {language === "en"
                                ? "Most Frequent Cropping Pattern"
                                : "সবচেয়ে বেশি প্রচলিত ফসল বিন্যাস"}
                            :{" "}
                            {closest
                                ? closest.Most_Frequent_Cropping_Pattern
                                : "Loading..."}
                        </p>
                        <p>
                            {language === "en"
                                ? "Number of Unique Cropping Pattern"
                                : "অনন্য ফসল বিন্যাসের সংখ্যা"}
                            :{" "}
                            {closest
                                ? closest.number_of_unique_cropping_pattern
                                : "Loading..."}
                        </p>
                    </div>
                    <div>
                        <h3>
                            {language === "en"
                                ? "Average Rainfall"
                                : "গড় বৃষ্টি"}
                        </h3>
                        <p>
                            {language === "en"
                                ? "Average Rainfall Robi"
                                : "রবি মৌসুমে গড় বৃষ্টির পরিমান"}
                            :{" "}
                            {closest
                                ? closest.Average_Rainfall_Robi
                                : "Loading..."}
                        </p>
                        <p>
                            {language === "en"
                                ? "Average Rainfall Kharif1"
                                : "খড়িফ-1 মৌসুমে গড় বৃষ্টির পরিমান"}
                            :{" "}
                            {closest
                                ? closest.Average_Rainfall_Kharif1
                                : "Loading..."}
                        </p>
                        <p>
                            {language === "en"
                                ? "Average Rainfall Kharif2"
                                : "খড়িফ-2 মৌসুমে গড় বৃষ্টির পরিমান"}
                            :{" "}
                            {closest
                                ? closest.Average_Rainfall_Kharif2
                                : "Loading..."}
                        </p>
                    </div>

                    <div>
                        <h3>
                            {language === "en"
                                ? "Average Temperature"
                                : "গড় তাপমাত্রা"}
                        </h3>
                        <p>
                            {language === "en"
                                ? "Average Temp Robi"
                                : "রবি মৌসুমে গড় তাপমাত্রা"}
                            :{" "}
                            {closest ? closest.Average_Temp_Robi : "Loading..."}
                        </p>
                        <p>
                            {language === "en"
                                ? "Average Temp Kharif1"
                                : "খড়িফ-1 মৌসুমে গড় তাপমাত্রা"}
                            :{" "}
                            {closest
                                ? closest.Average_Temp_Kharif1
                                : "Loading..."}
                        </p>
                        <p>
                            {language === "en"
                                ? "Average Temp Kharif2"
                                : "খড়িফ-2 মৌসুমে গড় তাপমাত্রা"}
                            :{" "}
                            {closest
                                ? closest.Average_Temp_Kharif2
                                : "Loading..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
