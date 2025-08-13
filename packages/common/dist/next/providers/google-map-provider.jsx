/* eslint-disable import/named */
"use client";
import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
const libraries = ["places", "drawing", "geometry"];
export default function GoogleMapProvider({ children, }) {
    const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
        libraries: libraries,
    });
    if (loadError) {
        return <p>Encountered error while loading google maps</p>;
    }
    if (!scriptLoaded) {
        return <p>Map Script is loading ...</p>;
    }
    return children;
}
