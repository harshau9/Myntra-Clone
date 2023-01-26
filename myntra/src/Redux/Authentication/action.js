import axios from "axios";
import { signupLoading, signupSuccess, signupError } from "./actionType";

export const signup = (data) => async (dispatch) => {
  dispatch({ type: signupLoading });
  try {
    await axios
      .post("https://mock-server-trz7.onrender.com/User-Data", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch({ type: signupSuccess }));
  } catch (e) {
    dispatch({ type: signupError });
  }
};
