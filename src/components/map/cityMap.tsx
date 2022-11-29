import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import defaultMarker from '../../assets/marker-icon.png'
import selectedMarker from '../../assets/selected-marker-icon.png'
import * as L from "leaflet";
import {RoomType} from "../../types/types";
import {nanoid} from "@reduxjs/toolkit";
import {LatLngExpression} from "leaflet";
import React, {useEffect} from "react";


type CityMapProps = {
  offers: RoomType[],
  offerHoveredId: string
}

const CityMap = ({offers, offerHoveredId = "-1"}: CityMapProps): JSX.Element => {
  const mapCenterCoords: LatLngExpression = [offers[0].city.cityLocation.latitude, offers[0].city.cityLocation.longitude]

  if (!offers.length) return <div></div>

  let defaultIconIcon = L.icon({
    iconUrl: defaultMarker,
  });
  let selectedMarkerIcon = L.icon({
    iconUrl: selectedMarker,
  });

  function FlyMapTo() {
    const map = useMap()
    useEffect(() => {
      map.setView(mapCenterCoords)
    }, [mapCenterCoords])
    return <></>
  }


  return (
    <section className="cities__map map" style={{'backgroundImage': 'none'}}>
      <MapContainer center={mapCenterCoords as LatLngExpression | undefined} zoom={13}
                    scrollWheelZoom={false}
                    style={{"width": "100%", "height": 823, "marginBottom": 20}}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {offers.map(({id, desc, location}) => {
          return <Marker position={[location.latitude, location.longitude]}
                         icon={offerHoveredId === id ? selectedMarkerIcon : defaultIconIcon}
                         key={nanoid()}>
            <Popup>
              {desc}
            </Popup>
          </Marker>
        })
        }
        <FlyMapTo/>
      </MapContainer>
    </section>
  )
}


export default CityMap

