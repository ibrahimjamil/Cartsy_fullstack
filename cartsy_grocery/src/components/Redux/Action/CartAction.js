
export function cartFetched(){
  return {
    type:"ADD_TO_CART"
  } 
}

export function cartIncrement(){
  return {
    type:"increment_quan"
  } 
}

export function cartDecrement(){
  return {
    type:"decrement_quan"
  } 
}