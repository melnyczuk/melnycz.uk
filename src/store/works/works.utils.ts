import Axios from "axios";

const fetchLongDescriptions = (path: string) => Axios.get(path).then(
  ({ data }) => data
);

export {
  fetchLongDescriptions
}