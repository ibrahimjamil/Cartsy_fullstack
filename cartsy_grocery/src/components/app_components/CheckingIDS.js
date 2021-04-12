import {useSelector,useDispatch} from 'react-redux'
import {ProductbyCategory,ProductbySubCategory} from '../Redux/Action/CategoryActions'

const checkingIdsforDipatch=(catId,subId,input)=>{
    if (catId===null && subId===null && input===''){
    return {type:"FetchedAllAgain"}
    }
    else if (catId===null && subId===null && input!==''){
    return {type:"SearchAll",payload:{search:input}}
    }
    else if (catId!==null && subId===null && input!==''){
    return {type:"SearchByCategory",payload:{CatID:catId,search:input}}
    }
    else if (catId!==null && subId===null && input===''){
    return ProductbyCategory(catId)
    }
    else if (catId!==null && subId!==null && input!==''){
    return {type:"SearchByCategoryAndSub",payload:{CatID:catId,SubID:subId,search:input}}
    }
    else if (catId!==null && subId!==null && input===''){
    return ProductbySubCategory(catId,subId)
    }
}


export default checkingIdsforDipatch