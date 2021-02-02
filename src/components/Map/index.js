import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow,
} from '@react-google-maps/api'

import mapStyles from './mapStyles'
import './style.css'




const libraries = ['places']
const mapContainerStyle = {
    width: '100%',
    height: '100%',
    // border:'solid 5px green'
}
const center = {
    //-24.95283895578528, -53.47252447492185
    lat: -24.95283895578528,
    lng: -53.47252447492185,
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return 'Error loading maps'
    if (!isLoaded) return 'Loading Maps'

    return <div className="map-container">
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={5}
            center={center}
            options={options}
        >

            <Marker position={center} />





        </GoogleMap>
        

    </div>
}