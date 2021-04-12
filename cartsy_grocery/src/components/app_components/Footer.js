import React from 'react'
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyle=makeStyles((theme)=>({
    root:{
        padding:"5px 40px",
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between",
        position: "relative",
        background: "white",
        boxShadow: "0px 1px 1px 1px rgb(0 0 0 / 2%), 0px 2px 2px 0px rgb(0 0 0 / 5%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",

    },
    info:{
        [theme.breakpoints.down('xs')]:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        }
    },
    social:{
        [theme.breakpoints.down('xs')]:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        }
    }
}))
function Footer() {
    const classes=useStyle()
    
    return (
        <div>
            <Grid container className={classes.root} direction="row">
                <Grid item xs={12} sm={6} className={classes.info} >
                    <p style={{color:"#212121"}}>Cartsy Grocery - All right reserved - Design & Developed by RedQ, Inc </p>
                </Grid>
                <Grid item  xs={12}  sm={6} className={classes.social} container alignItems="center" direction="row-reverse">
                    <Grid  item >
                        <a style={{paddingLeft:"20px"}}><FacebookIcon fontSize="small"/></a>
                        <a style={{paddingLeft:"20px"}}><TwitterIcon fontSize="small"/></a>
                        <a style={{paddingLeft:"20px"}}><InstagramIcon fontSize="small"/></a>
                        <a style={{paddingLeft:"20px"}}><LinkedInIcon fontSize="small"/></a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
