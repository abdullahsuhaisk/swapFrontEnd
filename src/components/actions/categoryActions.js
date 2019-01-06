import { FETCH_CATEGORIES } from "./types";
import axios from "axios";

// export const fetchCategories = () => async dispatch => {
//   const response = await axios.get("http://127.0.0.1:8000/api/category");
//   dispatch({
//     type: FETCH_CATEGORIES,
//     payload: response.data
//   });
// };
const uri = "http://127.0.0.1:8000/api/";

export const fetchCategories = () => {
  return dispatch => {
    return axios
      .get(uri + "category")
      .then(res => {
        dispatch({
          type: FETCH_CATEGORIES,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};
