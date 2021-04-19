import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

// local files
import Map from "../components/Map";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
            <Text h3>Create A Track</Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
