import createDataContext from "../context/createDataContext";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => () => {
    // fetch tracks
};

const createTrack = (dispatch) => () => {
    // create a new track
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
