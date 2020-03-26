import React, { Component } from 'react'
import ReactMapGL, {Marker,Popup, NavigationControl, FullscreenControl, ScaleControl}  from 'react-map-gl';
import CITIES from 'data/cities.json';
import Pins from 'pins';
import CityInfo from './city-info';

const token="pk.eyJ1IjoiZGlhbmFkaWZmZXJlbnQiLCJhIjoiY2s3MTc4YnY4MDNtYjNldGh3YTc2NXMyaiJ9.0YUgFH6LXT1s_pXHY4iNKQ"

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};


export default class Map extends Component {

  state={
    viewport:{
      width: "100vw",
      height: "100vh",
      latitude: 37.0902405 ,
      longitude: -95.7128906,
      zoom: 3.5
    },
    popupInfo:null
  }
  _updateViewport = viewport => {
    this.setState({viewport});
    console.log('hello')
  };

  _onClickMarker = city => {
    this.setState({popupInfo:city})
  };
  
  _renderPopup(){
    const {popupInfo}=this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    )
  }

  render() {
    const {viewport} = this.state;
    
    return (
       <ReactMapGL
      {...viewport}
      onViewportChange={this._updateViewport}
      mapboxApiAccessToken={token} 
      mapStyle="mapbox://styles/dianadifferent/ck72hrnkp1cmd1ilqspv0xx0j"
     >
      <Marker latitude={34.0522342} longitude={-118.2436849} offsetLeft={-20} offsetTop={-10}>
          <div style={{color:"white",backgroundColor:"red"}}>You are here</div>
      </Marker>
      <Pins data={CITIES} onClick={this._onClickMarker}  />
      {this._renderPopup()}

      <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>

        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
  </ReactMapGL>
    

    )
  }
}


