import { StoreType } from "../../types";

function selectActive(state: StoreType): string {
  return state.active;
}

export { selectActive }
