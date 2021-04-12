const initialState=[
  {
    img:'',
    price:'',
    title:'',
    quantity:''
  }
]


const cartreducer = (state=initialState,action)=>{
  switch(action.type){

    case "ADD_TO_CART":
      return [
        ...state,
        {
          img:action.payload.img,
          price:action.payload.price,
          title:action.payload.title,
          quantity:1
        }
      ]

    case "increment_quan":
      let copystate=[...state]
      copystate.map((object,index)=>{
        if (index===action.payload){
          object.quantity=object.quantity+1
        }
      })
      return copystate

    case "decrement_quan":
      let copystate2=[...state]
      if (action.payload.quantity===1){
        copystate2= [
          ...state.slice(0,action.payload.index),
          ...state.slice(action.payload.index+1,state.length)
        ]
      }else{
        copystate2.map((object)=>{
          if (object.img && object.price && object.title && object.quantity>1){
            object.quantity=object.quantity-1
          }
        })
      }
      return copystate2
  
      default:
        return state
  }
}


export default cartreducer