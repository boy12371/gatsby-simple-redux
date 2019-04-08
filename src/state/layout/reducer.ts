import { Reducer } from "redux";
import { LayoutState, LayoutActionTypes } from "./types";
import { initialState } from "./constant";

const reducer: Reducer<LayoutState> = (state = initialState.layout, action) => {
    switch (action.type) {
        case LayoutActionTypes.INCREMENT: {
            return { ...state, count: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as layoutReducer };
