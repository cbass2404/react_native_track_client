import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const startRecording = (dispatch) => () => {
    // start record
};

const stopRecording = (dispatch) => () => {
    // stop record
};

const addLocation = (dispatch) => () => {
    // add location
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);
