import React,{useState} from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {ProductbyCategory,ProductbySubCategory} from '../Redux/Action/CategoryActions'
import searchReducer from '../Redux/Reducer/SearchReducer'
import checkingIdsforDipatch from './CheckingIDS'

//margin left auto its very important
const useStyles = makeStyles((theme) => ({
  root:{
    width:"76.9vw",
    height:"345px",
    backgroundColor:"whitesmoke",
    marginLeft:"auto",
  },
  rootmobile:{
    width:"100vw",
    height:"388px",
    backgroundColor:"whitesmoke",
  },
  root_web:{
    width:"76.9vw",
    height:"345px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize: "100% 100%",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    marginTop:"3px",
    borderRadius:"6px",
    transform: "scale(0.9)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  root_mobile:{
    width:"100vw",
    height:"345px",
    backgroundColor:"white",
    backgroundImage:`url(https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2021/02/14092249/Grocery.png)`,
    backgroundSize:"100% 100%",
    backgroundPositionX:"center",
    backgroundPositionY:"center",
    backgroundRepeat:"no-repeat",
    borderRadius:"6px",
    marginTop:"15px",
    transform: "scale(0.9)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  input_style:{
    borderWidth:"2px",
    width:"80%",
    height:"50px",
    borderRadius:"6px",
    padding:"7px",
    fontSize:"18px",
  }
}))
function Banner() {
  const data=useLocation()
  const classes=useStyles()
  const [text,setText]=useState('')
  const searchRed=useSelector(state=>state.SearchReducer)
  const products = useSelector(state => state.dataReducer)
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    setText(e.target.value)
    let result=checkingIdsforDipatch(searchRed.catId,searchRed.subId,e.target.value)
    dispatch(result)
  }
  return (
      <div>
        <Hidden smDown>
          <div className={classes.root}>
            <Grid  container className={classes.root_web}>
              <h2 style={{fontSize:"36px",marginBottom:"15px",textAlign:"center"}}>Products Delivered in 90 Minutes</h2>
              <p style={{fontSize:"16px",color:"SASASA",marginTop:"0px"}}>Get your products delivered at your doorsteps all day everyday</p>
              <Hidden smDown>
                <input className={classes.input_style}  placeholder="E,g Meat,Yogurt,Eggs etc" value={text} onChange={handleChange}/>
              </Hidden>
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUp>
            <div className={classes.rootmobile}>
              <Grid  container className={classes.root_mobile}>
                <h2 style={{marginBottom:"15px",textAlign:"center"}}>Products Delivered in 90 Minutes</h2>
                <p style={{color:"SASASA",marginTop:"0px",maxWidth:"70%"}}>Get your products delivered at your doorsteps all day everyday</p>
                <Hidden smDown>
                  <input className={classes.input_style} placeholder="E,g Meat,Yogurt,Eggs etc" value={text} onChange={handleChange}></input>
                </Hidden>
              </Grid>
            </div>
        </Hidden>
        
    </div>
    )
}

export default Banner
