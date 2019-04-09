import { 
  StoreType, 
} from "../../types";

function selectActive({ active }: StoreType): string {
  return active;
}

export {
  selectActive,
}