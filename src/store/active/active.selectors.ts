import { StoreType } from "../../types";

const selectActive = ({ active }: StoreType): string => active;

export { selectActive }
