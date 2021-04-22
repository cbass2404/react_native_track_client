import createDataContext from "../context/createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => () => {
    // fetch tracks
};

const createTrack = (dispatch) => (name, locations) => {
    console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
