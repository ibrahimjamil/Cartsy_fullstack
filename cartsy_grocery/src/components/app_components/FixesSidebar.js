import React, { useState } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Hidden } from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {ProductbyCategory,ProductbySubCategory} from '../Redux/Action/CategoryActions'

const useStyles = makeStyles((theme) => ({
    //custom scroll bar 
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
    sidebar_container:{ 
        height:"100vh",
        width:"23vw",
        overflowY:"scroll",
        position:'fixed',
        marginTop:"3px",
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
    root:{
      marginTop:"5px"
    }
}))

function FixesSidebar() {
    const [selectedIndex,setSelectedIndex]=useState("")
    const classes = useStyles();
    const categories=useSelector(state=>state.CategoryReducer)
    const dispatch = useDispatch()
    const handleClick = (index,catId)=> {
        if (selectedIndex === index) {
          setSelectedIndex("")
          dispatch({type:"FetchedAllAgain"})
          dispatch({type:"SearchAll",payload:{Cid:0}})
        } else {
          setSelectedIndex(index)
          dispatch(ProductbyCategory(catId))
          dispatch({type:"SearchFromCategory",payload:{Cid:catId}})
        }
    }
    const handleSubClick=(cid,subId)=>{
      dispatch(ProductbySubCategory(cid,subId))
      dispatch({type:"SearchFromSubCategory",payload:{Cid:cid,SubId:subId}})
    }
    return (
      <Hidden smDown implementation="css">
          <div  className={classes.sidebar_container}>
            <List>
              {
                categories.map((category, index) =>{
                  return (
                    <div>
                      {
                        <div className={classes.root}>
                            <ListItem>
                              <ListItemText  onClick={()=>handleClick(index,category.catId)}  style={{cursor:"pointer",display:"flex",justifyContent:"flex-start"}}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                  <img src={category.svg}></img>
                                  <h4 style={{paddingLeft:"10px",marginBottom:"0px",marginTop:"0px",color:"#212121"}}>{category.name}</h4>
                                </div>
                              </ListItemText>
                              {index===selectedIndex ? <ExpandMore /> : <NavigateNextIcon/>}
                            </ListItem>
                            <Collapse in={index===selectedIndex}>
                              <List>
                                  {
                                    category.subCategories.map((subcategoryItem)=>{
                                      return (
                                        <div>
                                          <ListItem button className={classes.nested}>
                                            <ListItemText>   
                                                  <p 
                                                    style={{marginTop:"0px",marginBottom:"0px",marginLeft:"20px"}} 
                                                    onClick={()=>handleSubClick(category.catId,subcategoryItem.subId)} >
                                                    {subcategoryItem.name}
                                                  </p>
                                            </ListItemText>
                                          </ListItem>
                                        </div>
                                      )
                                    })
                                  }
                              </List>
                            </Collapse>
                        </div>
                      }
                    </div>
                  ) 
                })
              }  
              </List>
          </div>
      </Hidden>
    )
}

export default FixesSidebar