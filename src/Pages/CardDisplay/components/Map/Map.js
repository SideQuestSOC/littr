import './Map.css'; // css can be applied to the iframe

// See documentation for Google Maps Embed API: https://developers.google.com/maps/documentation/embed/embedding-map

function Map() {
    // MAP OPTIONS //
    let location = encodeURIComponent("Pentewan Beach, Saint Austell, UK");
    // encodeURIComponent() - This ensures that any special characters in those values are properly encoded and will be interpreted correctly by the Google Maps Embed API.
    // Encoding is requested by google in the best practice docs: https://developers.google.com/maps/documentation/geocoding/web-service-best-practices#BuildingURLs

    const mapType = "satellite"; // or "roadmap"

    // Options to hide controls on map (TODO: fix this)
    // const mapOptions = {
    //     // Add the options you want to hide here
    //     disableDefaultUI: true, // Hide all default controls
    //     zoomControl: false, // Hide the zoom control
    //     streetViewControl: false, // Hide the street view control
    //     fullscreenControl: false // Hide the fullscreen control
    // };

    // const mapOptionsString = encodeURIComponent(JSON.stringify(mapOptions));


    return (
        <iframe 
            id="google-map-frame"
            title="google_map" // title is required or there are error messages
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location}&maptype=${mapType}`}
        />
    )
}

export default Map

// {&options=${mapOptionsString} (URI component to add to url for map control options TODO: fix this)