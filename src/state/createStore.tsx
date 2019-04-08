import { createStore as reduxCreateStore, applyMiddleware, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

export interface StoreState {
    readonly count: number;
}

const initialState: StoreState = { count: 0 };

export enum ActionTypes {
    INCREMENT = "INCREMENT"
}

const reducer: Reducer<StoreState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT: {
            return Object.assign({}, state, {
                count: state.count + 1
            });
        }
        default: {
            return state;
        }
    }
};

export function configureStore(initial: StoreState): Store<StoreState> {
    const composeEnhancers = composeWithDevTools({});

    const store = reduxCreateStore(reducer, initial, composeEnhancers(applyMiddleware(logger)));

    return store;
}

export const createStore = () => configureStore(initialState);

export default createStore;
