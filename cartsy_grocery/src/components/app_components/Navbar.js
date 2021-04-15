import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';
import ListItemText from "@material-ui/core/ListItemText";
import CartBar from './CartBar';
import {useSelector,useDispatch} from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Hidden} from '@material-ui/core';
import checkingIdsforDipatch from './CheckingIDS'
import axios from 'axios';


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

  grow: {
    flexGrow: 1,
    
  },
  root:{
      background:"white",
      paddingRight:"47px",
      paddingLeft:"30px",
      height:"100px",
      boxShadow: "0px 1px 1px 1px rgb(0 0 0 / 2%), 0px 2px 2px 0px rgb(0 0 0 / 5%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      position:"fixed",
      [theme.breakpoints.down('sm')]:{
        height:"113px"
      }
    },
  rootest:{
    height:"13.2vh"
  },
  root_inner:{
    marginBlock: "auto",
    paddingLeft: "0px",
    paddingRight: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width:"99px",
    height:"30px",
    color:"white",
  },
  lastdiv:{
      display:"flex",
      flexDirection:"row",
      color:"black",
  },
  type:{
      alignSelf:"center",
      fontSize:"16px",
      paddingRight:"20px",
      cursor:"pointer",
      fontStyle:"none",
      color:"black",
      listStyle:"none",
      textDecoration:"none"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  leftDrawer:{
    width:"23vw",
    [theme.breakpoints.down('md')]: {
      width:"28vw"
    },
    [theme.breakpoints.down('sm')]: {
      width:"40vw"
    },
    [theme.breakpoints.down('xs')]: {
      width:"70vw"
    },
  },
  rightDrawer:{
    width:"30vw",
      [theme.breakpoints.down('md')]: {
        width:"35vw"
      },
      [theme.breakpoints.down('sm')]: {
        width:"50vw"
      },
      [theme.breakpoints.down('xs')]: {
        width:"90vw"
      },
  },
  cart:{
    height:"90vh",
    width:"100%",
  },
  cart_upper:{
    height:"80vh",
    width:"100%",
    overflow:"scroll",
    overflowX:"hidden",
  },
  item:{
    height:"130px",
    padding:"30px",
    display:"flex",
    flexDirection:"row"
  },
  checkO:{
    height:"5vh",
    width:"91%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:"15px",
    paddingBottom: "20px",
    paddingLeft:"15px",
    paddingRight: "20px",
    backgroundColor:"black",
    color:"white",
    borderRadius:"20px",
    cursor:"pointer"
  },
  input_style:{
    borderWidth:"2px",
    width:"80%",
    height:"50px",
    borderRadius:"6px",
    padding:"7px",
    fontSize:"18px",
  }
}));

export default function Navbar() {
  const [text,setText]=useState('')
  let totalAmount=0
  const classes = useStyles();
  const dispatch=useDispatch()
  const searchRed=useSelector(state=>state.SearchReducer)
  const cartdata=useSelector(state=>state.cartReducer)
  
  const handleChange=(e)=>{
    setText(e.target.value)
    let result=checkingIdsforDipatch(searchRed.catId,searchRed.subId,e.target.value)
    dispatch(result)
  }
  cartdata.map((object)=>{
    if (object.img&&object.price&&object.quantity&&object.title){
        totalAmount=totalAmount + (object.price*object.quantity)
    }
  })
  const [state, setState] = useState({
    lbutton:false,
    rbutton:false
  });
  
  // for toggle or true false of state
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleCheckout=async(e)=>{
    e.preventDefault();
    await axios({
      method:"Post",
      url: 'http://localhost:5000/checkout',
      headers:{
        authentication:window.localStorage.getItem('token')
      }
    })
  }
  //all list categories menu_sidebar
  const list = () => (
    <div className={classes.leftDrawer}>
        <List >
            <ListItem >
              <ListItemText primary={<img src={logo} className={classes.logo}/>}/>
              <ListItemText
                style={{cursor:"pointer",display:"flex",justifyContent:"flex-end"}}
                primary={<b>X</b>}
                onClick={toggleDrawer("lbutton", false)}
                onKeyDown={toggleDrawer("lbutton", false)}
                button
              />
              </ListItem>
        </List>
        <Divider/>
        <List>
          {["Shop", "Blogs", "FAQs", "Drafts","Terms and Conditions","Contacts"].map((text, index) => (
            <ListItem>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
    </div>
  );

  //cart menu side bar 
  const cart = () => (
    <div className={classes.rightDrawer}>
        <List >
          <ListItem>
            <ListItemText primary={<b>Shopping Cart</b>}/>
            <ListItemText
              style={{cursor:"pointer",display:"flex",justifyContent:"flex-end"}}
              primary={<b>X</b>}
              onClick={toggleDrawer("rbutton", false)}
              onKeyDown={toggleDrawer("rbutton", false)}
              button
            />
            </ListItem>
        </List>
        <Divider/>
        <div className={classes.cart}>
          <div className={classes.cart_upper}>
            {cartdata.map((object,index)=>(
              <div>
                {object.img && object.price && object.title && object.quantity>=1?
                  <div>
                    <CartBar index={index} quan={object.quantity} img={object.img} price={object.price} description={object.title}/>
                    <Divider/>
                  </div>:
                  ''
                }
              </div>
            ))}
          </div>
          <div  className={classes.checkO} onClick={handleCheckout}>
            <div style={{display:"flex",flex:"0.7",justifyContent:"center",alignItems:"center"}}>
              <a>Proceed to checkout</a>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <p>${totalAmount.toFixed(1)}</p>
            </div>
          </div>
        </div>
    </div>
  );
  
  return (
    <div className={classes.grow}>
      <Grid container className={classes.rootest}>
        <AppBar  position="static" className={classes.root}>
          <Toolbar className={classes.root_inner}>
              <Grid item className={classes.lastdiv}>
                <IconButton className={classes.menuButton} onClick={toggleDrawer("lbutton",true)}>
                    <MenuIcon/>
                </IconButton>
                <SwipeableDrawer anchor={"left"} open={state.lbutton}>
                  {list()}
                </SwipeableDrawer> 
                <Link to="/" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <img src={logo} className={classes.logo}/>
                </Link>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{width:"100%"}} container justify="center">
                  <input className={classes.input_style}  placeholder="E,g Meat,Yogurt,Eggs etc" value={text} onChange={handleChange} />
                </Grid>
              </Hidden>
              <Grid item className={classes.lastdiv}>
                  <Link to="/account" className={classes.type} >My Account</Link>
                  <IconButton onClick={toggleDrawer("rbutton",true)}>
                      <Badge badgeContent={cartdata.length-1} color="secondary" bg="black">
                          <ShoppingCartIcon/>
                      </Badge>
                  </IconButton>
                  <SwipeableDrawer anchor={"right"} open={state.rbutton}>
                    {cart()}
                  </SwipeableDrawer> 
              </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  )
}