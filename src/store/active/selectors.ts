import { StoreType, ContainerType } from "../../types";

const selectActive = ({ active }: StoreType): string => active;
const selectNamespace = (state: StoreType, { namespace }: ContainerType): string => namespace;

export { selectActive, selectNamespace };
