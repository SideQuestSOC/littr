import './Map.css'; // css can be applied to the iframe

// See documentation for Google Maps Embed API: https://developers.google.com/maps/documentation/embed/embedding-map

function Map( location ) {
    // MAP OPTIONS //
    let encodedURI = encodeURIComponent(location.location);

    // encodeURIComponent() - This ensures that any special characters in those values are properly encoded and will be interpreted correctly by the Google Maps Embed API.
    // Encoding is requested by google in the best practice docs: https://developers.google.com/maps/documentation/geocoding/web-service-best-practices#BuildingURLs

    console.log(location.location);

    const mapType = "roadmap"; // or "satellite"

    return (
        <iframe 
            id="google-map-frame"
            title="google_map" // title is required or there are error messages
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${encodedURI}&maptype=${mapType}`}
        />
    )
}

export default Map;