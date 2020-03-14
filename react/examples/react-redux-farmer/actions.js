
import axios from "axios";
import { GET_FARMERS, GET_FARMERS_SUCCESS,
        CREATE_FARMER, CREATE_FARMER_SUCCESS,
        UPDATE_FARMER, UPDATE_FARMER_SUCCESS,
        DELETE_FARMER, DELETE_FARMER_SUCCESS,
      } from "./types";

const url = "http://test.jforbes.site/api/";



export const deleteFarmerStart = () => {
  return {
    type:DELETE_FARMER,
    payload:"starting deletion"
  }
}

export const deleteFarmerSuccess = (message) => {
  return{
    type: DELETE_FARMER_SUCCESS,
    payload: message
  }
}

export const deleteFarmer = (farmer) => {
  return dispatch => {
    dispatch(deleteFarmerStart())
    axios({
      method:"delete",
      url: url+"delete/farmer/"+farmer.get("id"),
      data : farmer,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then( res => {
      let data = res.data;
      dispatch(deleteFarmerSuccess(data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const updateFarmerStart = () => {
  return {
    type:UPDATE_FARMER,
    payload:"starting update"
  }
}

export const updateFarmerSuccess = (message) => {
  return{
    type: UPDATE_FARMER_SUCCESS,
    payload: message
  }
}

export const updateFarmer = (farmer) => {
  return dispatch => {
    dispatch(updateFarmerStart())
    axios({
      method:"post",
      url: url+"update/farmer",
      data : farmer,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then( res => {
      let data = res.data;
      dispatch(updateFarmerSuccess(data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const createFarmerStart = () => {
  return {
    type:CREATE_FARMER,
    payload:"starting creation"
  }
}

export const createFarmerSuccess = (message) => {
  return{
    type: CREATE_FARMER_SUCCESS,
    payload: message
  }
}

export const createFarmer = (farmer) => {
  return dispatch => {
    dispatch(createFarmerStart())
    axios({
      method:"post",
      url: url+"create/farmer",
      data : farmer,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then( res => {
      let data = res.data;
      dispatch(createFarmerSuccess(data))
      // console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getFarmersStart = () =>{
  return {
    type:GET_FARMERS,
    payload:"starting retrieval"
  }
}

export const getFarmersSuccess = (farmers) => {
  return {
    type: GET_FARMERS_SUCCESS,
    payload:farmers,
    message:"retrieval successful"
  }
}
export const getFarmers = () => {
  return dispatch => {
    dispatch(getFarmersStart())
    fetch("http://test.jforbes.site/api/farmers")
    .then(res => res.json())
    .then (res => {
       dispatch(getFarmersSuccess(res))
       // console.log(res)
    })
    .catch( err => console.log(err))
  }
}
