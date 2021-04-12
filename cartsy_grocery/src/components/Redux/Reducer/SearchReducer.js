
const initialState={
  catId:null,
  subId:null,
}

const searchReducer=(state=initialState,action)=>{
  switch(action.type){
    case "SearchAll":
      return initialState
    case "SearchFromCategory":
      return {
        catId:action.payload.Cid,
        subId:null
      }
    case "SearchFromSubCategory":
      return{
        catId:action.payload.Cid,
        subId:action.payload.SubId
      } 
    default:
      return state
  }
}


export default searchReducer