import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const token="pk.eyJ1IjoiZGlhbmFkaWZmZXJlbnQiLCJhIjoiY2s3MTc4YnY4MDNtYjNldGh3YTc2NXMyaiJ9.0YUgFH6LXT1s_pXHY4iNKQ"
function Map() {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 37.0902405 ,
    longitude: -95.7128906,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={token} 
      onViewportChange={(viewport)=>{setViewport(viewport)}}
      mapStyle="mapbox://styles/dianadifferent/ck72hrnkp1cmd1ilqspv0xx0j"
    />
  );
}


function App() {
 
  return ( 
  <div>
    <h1>Flame</h1>
    <Map/>
  </div>
  )
}

export default App;
