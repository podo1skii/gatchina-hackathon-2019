import React from 'react'
import './MapPage.css'

export default class MapPage extends React.Component {
    componentDidMount() {
        var mymap = window.L.map('mapid').setView([59.558508, 30.121323], 15)
        var myIcon = window.L.icon({
            iconUrl: 'https://vk.com/doc314864347_503662526',
            iconSize: [48, 48]
        })
        window.L.Marker.prototype.options.icon = myIcon;
        window.L.tileLayer
            .provider('HERE.reducedDay', {
                app_id: 'zAb9wgNk7o2spmyo5tHD',
                app_code: 'jdH7-AVXp8NwySqSpB-5Wg'
            })
            .addTo(mymap)

        var routeControl = window.L.Routing.control({
            lineOptions: {
                styles: [{
                        color: 'black',
                        opacity: 0,
                        weight: 6
                    },
                    {
                        color: 'orange',
                        opacity: 1,
                        weight: 6
                    }
                ]
            },
            waypoints: [
                window.L.latLng(59.570786, 30.122674),
                window.L.latLng(59.56421, 30.11473),
                window.L.latLng(59.56333, 30.116021),
                window.L.latLng(59.558508, 30.121323)
            ]
        }).addTo(mymap)
        routeControl.on('routesfound', function (e) {
            var routes = e.routes
            var summary = routes[0].summary
            // alert distance and time in km and minutes
            alert(
                'Total distance is ' +
                summary.totalDistance / 1000 +
                ' km and total time is ' +
                Math.round((summary.totalTime % 3600) / 60) +
                ' minutes'
            )
        })
    }
    render() {
        return ( 
                <div>
                    <div id = "mapid" style = {{height: '1080px'}} >
                        LeafletMap 
                    </div> 
                </div>
        )
    }
}