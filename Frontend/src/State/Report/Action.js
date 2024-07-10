import axios from "axios";

import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
  FIND_REPORT_BY_ID_REQUEST,
  FIND_REPORT_BY_ID_SUCCESS,
  FIND_REPORT_BY_ID_FAILURE,
  FIND_ALL_REPORT_REQUEST,
  FIND_ALL_REPORT_SUCCESS,
  FIND_ALL_REPORT_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../config/api";


export const findAllReport = () => async (dispatch) => {
  try {
    dispatch({ type: FIND_ALL_REPORT_REQUEST });

    const { data } = await axios.get(`${API_BASE_URL}/api/allReports`);
   
    
    dispatch({
      type: FIND_ALL_REPORT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: FIND_ALL_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



// export const createProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });

//     const { data } = await api.post(
//       `${API_BASE_URL}/api/admin/products/`,
//       product.data
//     );

//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data,
//     });

//     console.log("created product ", data);
//   } catch (error) {
//     dispatch({
//       type: CREATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
export const createReport = (report) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_REQUEST });

    const { data } = await api.post(`${API_BASE_URL}/api/reports`, report);

    // dispatch({
    //   type: CREATE_REPORT_SUCCESS,
    //   payload: data,
    // });
    // console.log("reached1", data);
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const findReportById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_REPORT_BY_ID_REQUEST });

    const { data } = await api.get(`/api/reports/${reqData.reportId}`);

    dispatch({
      type: FIND_REPORT_BY_ID_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: FIND_REPORT_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

