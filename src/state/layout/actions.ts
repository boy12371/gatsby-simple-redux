import { action } from "typesafe-actions";
import { LayoutActionTypes } from "./types";

export const increment = (count: number) => action(LayoutActionTypes.INCREMENT, count + 1);
