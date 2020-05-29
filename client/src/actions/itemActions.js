import axios from "axios";

import { GET_ERRORS } from "./types";


export const createItem = (itemData, history) => dispatch => {
    axios
      .post("/api/items/item", itemData)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };