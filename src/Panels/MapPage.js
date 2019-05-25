import React, { Component } from 'react';

import Card from './Card.js';
import TinderCard from './Tinder.js';

import {InteractiveMap, MapController, Marker} from 'react-map-gl';





class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            map: '',
            latitude: 31.7577,
            longitude: 122.4376,
            zoom: 8,
            route: []
         }
    }

    render() { 
        
        return ( 
            <>
                {/* <InteractiveMap
                    attributionControl={true}
                    touchAction="pan-x pan-y"
                    mapboxApiAccessToken="pk.eyJ1IjoicG9kbzFza2lpIiwiYSI6ImNqdzExdmIyMDA3bTUzenBoMDZ5NGs1MHQifQ.bEez5gkLZKHJwTzJZUZeow"
                    width={1440}
                    height={900}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    zoom={this.state.zoom}
                    onViewportChange={(viewport) => {
                        const {width, height, latitude, longitude, zoom} = viewport;
                        this.setState({latitude: latitude, longitude: longitude, zoom:zoom})
                    }}
                >
                    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                    <div>You are here</div>
                    </Marker>
                </InteractiveMap> */}
                <TinderCard/>
            </>
         );
    }
}
 
export default MapPage;