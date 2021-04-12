import data from '../Products'
import {produce} from "immer"

const initialState=data

const datareducer = (state=initialState,action)=>{
  switch(action.type){
    case "Fetched":
      return state
    case "SearchAll":
      return produce(initialState,newState=>{
        return newState.filter(product=>product.title.search(action.payload.search)>=0)
      })
    case "SearchByCategory":
      let filterData=produce(initialState,newState=>{
        return newState.filter(product=>product.categoriesId===action.payload.CatID)
      })
      let res1 =produce(filterData,searchFilter=>{
        return searchFilter.filter(product=>product.title.search(action.payload.search)>=0)
      })
      return res1
    case "SearchByCategoryAndSub":
      let filterData1=produce(initialState,newState=>{
        return newState.filter(product=>product.categoriesId===action.payload.CatID && product.subCategoriesid===action.payload.SubID)
      })
      return produce(filterData1,searchFilter=>{
        return searchFilter.filter(product=>product.title.search(action.payload.search)>=0)
      })
    case "FetchedFromServer":
      return action.payload.data
    case "Get_Product_By_Category":
      console.log("in data reducer filtering done and data dispached")
       return action.payload
    case "CategoryProductBySubCategory":
      let globalState4=initialState
      let res=produce(globalState4,newState=>{
        return newState.filter(product=>{
          return (product.categoriesId===action.payload.CategoryID && product.subCategoriesid===action.payload.SubCategoryID)
        })
      })
      return res
    case "Get_Product_By_Category_and_subCategory":
      let globalState1=initialState
      return produce(globalState1,newState=>{
        return newState.filter(product=>{
          return (product.categoriesId===action.payload.CategoryID && product.subCategoriesid===action.payload.SubCategoryID)
        })
      })
    default:
      return state
  }
}


export default datareducer