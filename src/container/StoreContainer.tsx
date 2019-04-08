import React, { FC, ReactNode } from "react";
import { ReactReduxContext } from "react-redux";

import { ApplicationState } from "../state";
import * as layoutActions from "../state/layout/actions";

interface StoreProps {
    count: number;
    increment: (count: number) => void;
}

interface Props {
    render?: (props: StoreProps) => ReactNode;
    children?: (props: StoreProps) => ReactNode;
}

const StoreContainer: FC<Props> = ({ render, children }) => {
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => {
                const state: ApplicationState = store.getState();
                const count = state.layout.count;
                const increment = (count: number) => store.dispatch(layoutActions.increment(count));

                if (render) {
                    return render({ count, increment });
                }

                if (children) {
                    return children({ count, increment });
                }

                return null;
            }}
        </ReactReduxContext.Consumer>
    );
};

export default StoreContainer;
