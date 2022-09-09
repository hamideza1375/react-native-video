import React, { useState } from 'react'
import { PermissionsAndroid, StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ coordinate, showsUserLocation, draggable, marker, onPress, onDragEnd, onSelect }) => {

  const [location, setlocation] = useState(coordinate)



  return (
    <View style={{ flex: 1 }}>
      <MapView
        onMapReady={() => {PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(granted => {/* alert(granted) */});}}
        region={coordinate}
        showsUserLocation={showsUserLocation}
        followsUserLocation={true}
        onPress={onPress}
        style={StyleSheet.absoluteFillObject}
        onRegionChange={(e)=>{setlocation(e);}}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsCompass={true}
        zoomEnabled={true}
        rotateEnabled={true}
      >
        {marker && <Marker
        followsUserLocation={true}
          draggable={draggable}
          coordinate={location}
          onDragEnd={onDragEnd}
          onSelect={onSelect}
        />}

      </MapView>

    </View >
  );
}


export default Map