
const initialState ={
  students:["*"]
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case "GRADE_9":
       return {
         students: action.payload
       }
      break;
    case "GRADE_10":
       return {
         students: action.payload
       }
      break;
    case "GRADE_11":
       return {
         students: action.payload
       }
      break;
    case "GRADE_12":
       return {
         students: action.payload
       }
      break;
    default:
    return {
      students:[]
    }

  }
}
