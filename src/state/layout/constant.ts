import { TITLE, DESCRIPTION, KEYWORDS } from "../../common/constant";

export const initialState = {
    layout: { count: 0 }
};

export const Layout = {
    name: TITLE,
    title: "首页",
    description: DESCRIPTION,
    keywords: KEYWORDS,
    isHeader: true
};

export const UnitsView = {
    currency: "€",
    weight: "kg"
};
