export const ProductbyCategory=(catId)=>{
  return {
    type:"CategoryProduct",
    payload:{
      CategoryID:catId,
    }
  }
}

export const ProductbySubCategory=(catId,subId)=>{
  return {
    type:"CategoryProductBySubCategory",
    payload:{
      CategoryID:catId,
      SubCategoryID:subId
    }
  }
}

