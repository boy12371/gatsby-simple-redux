import { combineReducers, Action, AnyAction, Dispatch, Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { LayoutState, layoutReducer } from "./layout";
import { initialState } from "./layout/constant";

export interface ApplicationState {
    layout: LayoutState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

export const createRootReducer = () =>
    combineReducers({
        layout: layoutReducer
    });

export const configureStore = (state = initialState): Store<ApplicationState> => {
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(createRootReducer(), state, composeEnhancers(applyMiddleware(logger)));

    return store;
};

export default configureStore;
