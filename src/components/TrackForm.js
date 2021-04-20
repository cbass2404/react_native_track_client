import React, { useContext, useState } from "react";
import { Input, Button } from "react-native-elements";

// context
import { Context as LocationContext } from "../context/LocationContext";

// local files
import Spacer from "./Spacer";

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);

    console.log(locations.length);

    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    placeholder="Enter Name"
                    onChangeText={changeName}
                />
            </Spacer>
            {recording ? (
                <Button title="Stop" onPress={stopRecording} />
            ) : (
                <Button title="Start Recording" onPress={startRecording} />
            )}
        </>
    );
};

export default TrackForm;
