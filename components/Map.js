import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";


function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});
    
    //Transform the searchResults
    const coordinates = searchResults.map(result => ({
        longitude:result.long,
        latitude:result.lat,
    }));

    //Center the map location
    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 6,
    });

    return (

        <ReactMapGL 
            mapStyle="mapbox://styles/rajatb555/cks35kg9h4p7e18t3n1sdys3z"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude= {result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}   
                    >
                        <p onClick={()=>setSelectedLocation(result)}className='cursor-pointer text-2xl animate-bounce'
                        aria-label="pointer"
                        >
                            📍
                        </p>
                    </Marker>

                    {/* The popup should show in pointer */}
                    {selectedLocation.long===result.long ? (
                        <div className="bg-gray-100">
                            <Popup
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                    <div className="text-red-400">
                                        {result.title}
                                    </div>
                            </Popup>
                        </div>
                    ):(
                        false
                    )}
                </div>
            ))}

 
        </ReactMapGL>
    );
        
    
}

export default Map
