import { dataLoading, dataSuccess, dataError } from "./actionType";
import axios from "axios";
 const getData = () => async (dispatch) => {
  dispatch({ type: dataLoading });
  try {
    await axios
      .get("https://mock-server-trz7.onrender.com/User-Data")
      .then((res) => dispatch({ type: dataSuccess, payload: res.data }));
  } catch (e) {
    dispatch({ type: dataError });
  }
};

export default getData;