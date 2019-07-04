export const GRADE_9 = "GRADE_9";
export const GRADE_10 = "GRADE_10";
export const GRADE_11 = "GRADE_11";
 export const GRADE_12 = "GRADE_12";
 export const FETCH_BEGIN = "FETCH_BEGIN";
 export const FETCH_SUCCESS = "FETCH_SUCCESS";
 export const FETCH_FAIL = "FETCH_FAIL";

export function get9th(){
  return {
    type: GRADE_9,
  }
}

const fetchBegin = () => {
  return {
    type: FETCH_BEGIN
  }
}
const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload:data
  }
}
const fetchFail = (err) => {
  return {
    type: FETCH_FAIL,
    payload:err
  }
}

export const getGrade = (g) => {
  const url = "http://php.jforbes.site/ajax/get-grade.php?grade="+g;
 return dispatch => {
   dispatch(fetchBegin())
   fetch(url)
   .then(res => res.json())
   .then(res => {
     dispatch(fetchSuccess(res))
   })
   .catch(err => {
     dispatch(fetchFail(err))
     // console.log("error :"+err)
   })
 }

}
