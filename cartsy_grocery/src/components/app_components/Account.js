import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom"
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
const img="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/09/01125346/my-account.jpg"

const useStyles = makeStyles((theme) => ({
    banner:{
        width:"100vw",
        height:"50vh",
        backgroundImage:`url(${img})`,
        backgroundPosition:"center center",
        position:"relative",
        overflow:"hidden",
        '&::after':{
            content: '',
            width: "100vw",
            height: "50vh",
            backgroundColor: "black",
            opacity:"0.5",
            color:"white"
        },
    },
    root:{
        position:"absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color:"white",
        zIndex:"10",
    },
    text:{
        textAlign:"center",
        marginBottom:"0px",
        fontSize:"18px",
        fontFamily: "Satisfy,cursive",
        wordBreak: "break-word"
    },
    heading:{
        fontSize:"24px"
    },
    forms:{
        padding:"60px 60px"
    },
    border:{
        border:"1px solid #e6e6e6",
        borderRadius: "12px"
    },
    textarea:{
        padding: "10px 10px",
        borderRadius: "5px",
        lineHeight: "normal",
        fontSize: "medium",
        marginBottom:"15px"
    },
    btn:{
        color:"white",
        backgroundColor:"#212121",
        width:"100%",
        padding:"15px 28px",
        borderRadius:"6px",
        fontWeight:"400",
        cursor:"pointer",
        fontSize:"16px"
    },
    btn2:{
        color:"black",
        backgroundColor:"#e6e6e6",
        borderColor:"#e6e6e6",
        width:"100%",
        padding:"15px 28px",
        borderRadius:"6px",
        fontWeight:"400",
        cursor:"pointer",
        border:"0px",
        textAlign:"center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
         alignItems: "center",
         fontSize:"16px"
    },
    divider:{
        borderBottom:"1px solid black",
        width:"45%"
    }
}))
function Account() {
    const classes=useStyles()
    const [checked, setChecked] =useState(false);
    const [REmailInput,setREmailInput]=useState('')
    const [RPasswordInput,setRPasswordInput]=useState('')
    const [LEmailInput,setLEmailInput]=useState('')
    const [LPasswordInput,setLPasswordInput]=useState('')
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const history = useHistory();

    const handleChange = (event) => {
        setChecked(event.target.checked);
     };
    const registerEmailInput=(e)=>{
        setREmailInput(e.target.value)
    }
    const registerPasswordInput=(e)=>{
        setRPasswordInput(e.target.value)
    }
    const LoginEmailInput=(e)=>{
        setLEmailInput(e.target.value)
    }
    const LoginPasswordInput=(e)=>{
        setLPasswordInput(e.target.value)
    }
    const LoginHandler=async (e)=>{
        e.preventDefault();
        let res=await axios({
            method: 'Post',
            url: 'http://localhost:5000/account/login',
            data: {
                Email:LEmailInput,
                Password:LPasswordInput 
              }
          });
          if (res.data){
              //storing token in local storage
              window.localStorage.setItem('token', res.data);
              setShow2(true)
              setTimeout(()=>{
                setShow2(false)
              },4000)
              setLEmailInput('')
              setLPasswordInput('')
              setTimeout(()=>{
                  history.push("/")
              },4000)
          }
    }
    const RegisterHandler =async (e)=>{
        e.preventDefault();
        let res=await axios({
            method: 'Post',
            url: 'http://localhost:5000/account/register',
            data: {
                Email:REmailInput,
                Password:RPasswordInput 
              }
          });
          if (res.data==="dataCreated"){
              setShow(true)
              setTimeout(()=>{
                setShow(false)
              },4000)
              setREmailInput('')
              setRPasswordInput('')
          }
    }
    return (
        <div>
            <Grid container sm={12} lg={12} md={12} className={classes.banner}>
                <Grid item className={classes.root}>
                    <Grid container direction="column">
                        <Grid item>
                            <h1 className={classes.text}>explore</h1>
                        </Grid>
                        <Grid item>
                            <h1 className={classes.heading}>My Account</h1>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container  direction="row" className={classes.forms}>
                <Grid container  spacing={9}>
                    <Grid container  item  xs={12} sm={12} md={6} direction="column">
                        <h1 style={{marginTop:"0px",marginBottom:"30px" ,fontSize:"24px"}}>Login</h1>
                        <Grid item container>
                           <form onSubmit={LoginHandler}>
                               <Grid className={classes.border} container diresction="column"  spacing={5}>
                                   <Grid item container direction="column">
                                        <label style={{marginBottom:"5px",color:"#212121"}}>Username or email address*</label>
                                        <input className={classes.textarea} value={LEmailInput} onChange={LoginEmailInput}/>
                                   </Grid>
                                   <Grid item container direction="column">
                                        <label style={{marginBottom:"5px",color:"#212121"}}>Password*</label>
                                        <input className={classes.textarea} value={LPasswordInput} onChange={LoginPasswordInput}/>
                                   </Grid>
                                   <Grid item container direction="column" style={{width:"100%"}}>
                                        {show2?<Alert variant="outlined" severity="success">
                                            You have Loged in successfully
                                        </Alert>:''}
                                    </Grid>
                                   <Grid container direction="row" style={{padding:"20px"}}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            color="default"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <p>Remember me</p>
                                   </Grid>
                                   <Grid item style={{width:"100%"}}>
                                        <button className={classes.btn} type="submit">Log in</button>
                                   </Grid>
                                   <Grid item style={{marginBottom:"10px"}}>
                                        <Link style={{color:"#5A5A5A",cursor:"pointer"}}>Lost your passwprd?</Link>
                                   </Grid>
                                   <Grid container direction="column" style={{padding:"30px"}}>
                                       <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",position:"relative"}}>
                                            <div className={classes.divider}>
                                            </div>
                                            <div className={classes.divider}>
                                            </div>
                                            <div style={{position: "absolute",left:"50%",transform: "translate(-50%,-50%)"}}><strong>Or</strong></div>
                                        </div>
                                   </Grid>
                                   <Grid item style={{width:"100%",border:"0px"}}>
                                            <button className={classes.btn2}><PhoneIphoneIcon/>Continue with Phone</button>
                                   </Grid>
                               </Grid>
                           </form>
                        </Grid>
                    </Grid>
                    <Grid item container   xs={12} sm={12} md={6} direction="column" >
                        <h1 style={{marginTop:"0px",fontSize:"24px",marginBottom:"30px"}}>Register</h1>
                        <Grid item container direction="column">
                            <form onSubmit={RegisterHandler}>
                                <Grid container className={classes.border} diresction="column"  spacing={5}>
                                    <Grid item container direction="column">
                                        <label style={{marginBottom:"5px",color:"#212121"}}>Email Address*</label>
                                        <input className={classes.textarea} value={REmailInput} onChange={registerEmailInput}/>
                                    </Grid>
                                    <Grid item container direction="column">
                                        <label style={{marginBottom:"5px",color:"#212121"}}>Password*</label>
                                        <input className={classes.textarea} value={RPasswordInput} onChange={registerPasswordInput}/>
                                    </Grid>
                                    <Grid item container direction="column" style={{width:"100%"}}>
                                        {show?<Alert variant="outlined" severity="success">
                                            You have registed successfully
                                        </Alert>:''}
                                    </Grid>
                                    <Grid item container direction="column">
                                        <p style={{color:"#5a5a5a"}} >A password will be sent to your email address.</p>
                                        <p style={{color:"#5a5a5a"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our </p>
                                    </Grid>
                                    <Grid item style={{width:"100%"}}>
                                        <button className={classes.btn} type="submit" >Register</button>
                                   </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Account
