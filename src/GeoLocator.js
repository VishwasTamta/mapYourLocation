import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{coords.speed}</td>
                    </tr>
                </tbody>
            </table>
            <iframe
                title="Google Maps"
                width="600"
                height="450"
                frameborder="0"
                src={`https://www.google.com/maps/embed/v1/place?q=${coords.latitude},${coords.longitude}&key=AIzaSyDz3kgF4XMeBs_uUsszPyu0vmHgyMxHa6Q`}
            ></iframe>
        </>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;