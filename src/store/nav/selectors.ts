import { StoreType } from "../../types";
import { createSelector } from "reselect";
import { selectActive } from "../active/selectors";

const selectNavArray = ({ nav }: StoreType, props: any): string[] => nav;

const selectActiveNav = createSelector(
  [selectNavArray, selectActive],
  (navArray: string[], active: string): string[] => {
    return active && navArray.filter((n: string): Boolean =>
      n && n.toLowerCase() === active.toLowerCase());
  }
);

export { selectNavArray, selectActiveNav }
