import data from '../Category'
const initialState=data

const CategoryReducer = (state=initialState,action)=>{
  switch(action.type){
    case "Fetched":
      return [
          ...state
        ]
      default:
        return state
  }
}


export default CategoryReducer