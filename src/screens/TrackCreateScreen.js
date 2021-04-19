import "../_mockLocations";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

// context
import { Context as LocationContext } from "../context/LocationContext";

// local files
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
            <Text h3>Create A Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
