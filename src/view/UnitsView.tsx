import React, { FC } from "react";

import { UnitsViewProps } from "../state/layout";
import { UnitsView as Default } from "../state/layout/constant";

interface Props {
    source?: UnitsViewProps;
}

const UnitsView: FC<Props> = ({ source = Default }) => {
    const { currency, weight } = source;

    return (
        <div>
            {currency}
            {weight}
        </div>
    );
};

export default UnitsView;
