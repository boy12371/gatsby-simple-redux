export enum LayoutActionTypes {
    INCREMENT = "@@layout/INCREMENT"
}

export interface LayoutState {
    readonly count: number;
}
