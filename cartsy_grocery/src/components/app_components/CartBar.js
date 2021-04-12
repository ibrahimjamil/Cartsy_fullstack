import React,{useEffect} from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux'
let logo = "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/16065923/Grocery.svg"

const useStyles = makeStyles((theme) => ({
    //custom scroll bar 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  item:{
    height:"130px",
    padding:"30px",
    display:"flex",
    flexDirection:"row",
  },
  IDD:{
      display:"flex",
      flexDirection:"row",
      flex:"1",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black",
      color:"white",
      cursor:"pointer",
      borderRadius:"6px",
      margin:"5px",
      marginBottom:"15px"
  },
  IDDINNER:{
    flex:0.333,
    display:"flex",
    justifyContent:"center"
    }
}))

function CartBar({img,price,description,index,quan}) {
    const classes = useStyles();
    const dispatch=useDispatch()

    
    const incQ=()=>{
        dispatch({type:'increment_quantity',index:index})
    }
    const decQ=()=>{
        dispatch({type:'decrement_quantity',data:{index:index,quantity:quan}})
    }
    return (
    <div>
        <div className={classes.item}>
          <div style={{flex:"0.2"}}>
              <img src={img} style={{width:"70px",height:"100px"}}/>
          </div>
          <div style={{flex:"0.8",paddingRight:"16px",paddingLeft:"16px",display:"flex",flexDirection:"column"}}>
              <div>
                  <p>{description}</p>
              </div>
              <div>
                  <p>Unit Price ${price} </p>
              </div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div className={classes.IDD}>
                      <div className={classes.IDDINNER} style={{cursor:"pointer"}} onClick={()=>decQ()}>-</div>
                      <div className={classes.IDDINNER}>{quan}</div>
                      <div className={classes.IDDINNER} style={{cursor:"pointer"}} onClick={()=>incQ()}>+</div>
                  </div>
                  <div>
                      <p>${(price*quan).toFixed(1)}</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
    )
}

export default CartBar
