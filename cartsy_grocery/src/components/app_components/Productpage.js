import React, { useEffect } from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';
import Products from './Products';
import {useSelector,useDispatch} from 'react-redux';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    
    root:{
        width:"76.96vw",
        backgroundColor:"whitesmoke",
        marginLeft:"23vw",
        marginTop: "-14px",
    },
    root1:{
        width:"76.96vw",
        backgroundColor:"whitesmoke",
        marginLeft:"23vw",
        marginTop: "-40px",
        height:"35vh"
    },
    root2:{
        width:"100vw",
        backgroundColor:"whitesmoke",
        marginTop: "-40px",
        height:"35vh"
    },
    rootweb:{
        width:"100%",
        backgroundColor:"whitesmoke",
        transform: "scale(0.9)"
    },
    rootm:{
        display:"flex",
        justifyContent:"center",
        backgroundColor:"whitesmoke",
        marginTop: "-40px",
    },
    rootMobile:{
        width:"90%",
        backgroundColor:"whitesmoke",
    },
    ro:{
        backgroundColor:"whitesmoke"

    },
    trans:{
         transform: "translateY(-10px)"
    }
}))
function Productpage() {
    const classes=useStyles()
    const ProductsData = useSelector(state => state.dataReducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({type:"FetchedAllAgain"})
    },[])
    return (
        <div>
            <Hidden smDown >
                {ProductsData.length===0 ?
                    <div className={classes.root1}>

                     </div>:''
                }
                <div className={classes.root}>
                    <div className={classes.rootweb}>
                        <Grid container justify="flex-start"  spacing={1}>
                            {ProductsData.map((product)=> {
                                return (
                                    <Grid item  sm={3} lg={3} container justify="center" className={classes.trans} >
                                        <Products  Cid={product.categoriesId} id={product.id} img={product.img} price={product.price} tit={product.title}/>
                                    </Grid>
                                )
                                })
                            }
                        </Grid>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp className={classes.ro}>
                {ProductsData.length===0 ?
                    <div className={classes.root2}>

                    </div>:''
                }
                <div className={classes.rootm}>
                    <div className={classes.rootMobile}>
                        <Grid container justify="flex-start"  spacing={1}>
                            {ProductsData.map((product)=>{
                                    return (
                                        <Grid item xs={12} sm={6} container justify="center">
                                            <Products  Cid={product.categoriesId} id={product.id} img={product.img} price={product.price} tit={product.title}/>
                                        </Grid>
                                    )
                                }
                            )}
                        </Grid>
                    </div>
                </div>
            </Hidden>
        </div>
    )
}

export default Productpage
