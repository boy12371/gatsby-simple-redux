import React, { FC } from "react";
import StoreContainer from "../container/StoreContainer";

const Counter: FC = () => (
    <StoreContainer>
        {({ count, increment }) => (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => increment(count)}>Increment</button>
            </div>
        )}
    </StoreContainer>
);

export default Counter;
