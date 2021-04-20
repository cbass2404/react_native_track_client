import "../_mockLocations";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

// context
import { Context as LocationContext } from "../context/LocationContext";

// local files
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording);
    });

    return (
        <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
            <Text h3>Create A Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
