import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Tilt from 'react-parallax-tilt';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Logo from '../Logo/Logo'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinearProgress from '@material-ui/core/LinearProgress';


import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Route, useHistory, useLocation} from 'react-router-dom'

import './styles.css'
import transitions from '@material-ui/core/styles/transitions';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton } from '@material-ui/core';

import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux';

import {signin, signup} from '../../actions/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: 270
  },
  labelContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  tabs:{
    // height:'10px',
    width:'100px',
    marginLeft:'5px',
    color:'grey',
    "& .Mui-selected": {
      color:'white'
    },
    "& .MuiTabs-indicator":{
      // width:'5px',
      backgroundColor:'#9047ff'
    }
  },
  tabStyle:{
    // height:'10px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    // paddingRight:'20px',
    minWidth:'40px', 
    width:'50px',
    // color:'grey',
    textTransform:'none',
    fontFamily:'Roobert',
    fontSize:'10px',
    
  },
  indicator: {
    minWidth:'10px',
    backgroundColor: '#9047ff',
  },
  input: {
    // height:'40px',
    color: "white",
    fontFamily:'Roobert',
    fontSize:'10px',
    fontSize:'10px',
    backgroundColor:'#333333',
    borderRadius:'5px'
    // marginTop:'10px'
  },
  noBorder: {
    border: "none",
  },
  Link:{
    marginTop:'20px',
    fontFamily:'Roobert', 
    width:'100%', 
    justifyContent:'center', 
    display:'flex', 
    flexDirection:'row', 
    fontSize:'10px', 
    color:'white',
    textDecoration:'none',
    '&:hover': {
      textDecoration:'underline',
      color:'#9047ff'
    }
  },
  register:{
    height:'400px', width:'300px', backgroundColor:'#414141',
    transitions:'2s '
  },
  login:{
    height:'400px', width:'300px', backgroundColor:'#414141',
    transitions:'height 2s'

  },
  colorPrimary: {
    background: '#9047ff'
  },
  mainButton:{
    '&:hover': {
      backgroundPosition:'0 -40px',
      backgroundSize: '100% 100px',
      background: 'linear-gradient(45deg, #FE6B8B 40%, #9047ff 90%)',
      // background: 'pink',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      transition: "background 0.5s ease-in-out",
    },
    backgroundSize: '100% 100px',
    backgroundPosition: '0 0px',
    transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out ",
    background: 'linear-gradient(45deg, #FE6B8B 40%, #9047ff 90%)',
    // background: 'linear-gradient(45deg, #FE6B8B 5%, #FF8E53 10%, #9047ff 90%)',
    border: 0,
    // borderRadius: 7,
    color: 'white',
    textTransform: 'none',
    fontFamily:'Roobert',
    fontWeight:'bold', 
    fontSize:'10px', 
    borderRadius:'20px', 
    width:'100%',
    marginBottom:'10px'
  },
  googleLogin:{
    color:'#757575',
    backgroundColor:'white',
    textTransform: 'None',
    borderRadius:'20px', 
    fontFamily:'Roobert',
    fontWeight:'bold', 
    fontSize:'10px', 

  }
}));


const Login = () => {
    const classes = useStyles();
    const history = useHistory()

    const initialRegisterState = {username: '', email: '', password: '', confirmPassword: ''}
    const initialLoginState = {username: '', password: ''}

    const [registerFormData, setRegisterFormData] = React.useState(initialRegisterState)
    const [loginFormData, setLoginFormData] = React.useState(initialLoginState)

    const [value, setValue] = React.useState('Login');

    const [typeLogin, setTypeLogin] = React.useState('password')
    const [typeRegister, setTypeRegister] = React.useState('password')
    const [typeRegisterConfirm, setTypeRegisterConfirm] = React.useState('password')


    const [loading, setLoading] = React.useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
      history.push('/feed')
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRegisterFormChange = (e) => {
    setRegisterFormData({...registerFormData, [e.target.name]: e.target.value})
  }

  const handleLoginFormChange = (e) => {
    setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(value=="Register"){
  //     if(formData.password != formData.confirmPassword){
  //       alert('Passwords must be the same!')
  //     }
  //     console.log('register')
  //   }else{
  //     console.log('login')
  //   }
    
  //   console.log(formData)
  // }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
      if(registerFormData.password != registerFormData.confirmPassword){
        alert('Passwords must be the same!')
      }else{
        console.log('register')
        console.log(registerFormData)
        dispatch(signup(registerFormData, history))
      }
  
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
     
    console.log('login')
    console.log(loginFormData)
    dispatch(signin(loginFormData, history))

  }

  const handleShowLoginPassword = () => {
    if(typeLogin == "password"){
      setTypeLogin("")
    }else{
      setTypeLogin("password")
    }
  }

  const handleShowRegisterPassword = () => {
    if(typeRegister == "password"){
      setTypeRegister("")
    }else{
      setTypeRegister("password")
    }
  }

  const handleShowRegisterConfirmPassword = () => {
    if(typeRegisterConfirm == "password"){
      setTypeRegisterConfirm("")
    }else{
      setTypeRegisterConfirm("password")
    }
  }

  const googleSuccess = async (res) => {
    // console.log(res)
    // optional chaining
    const result = res?.profileObj;
    const token = res?.tokenId;

    // console.log(result, token)

    try {
      dispatch({type:'AUTH', data: {result, token}})
      history.push('/feed')
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log("Google Sign In was unsuccessful. Try again Later")
  }
    return ( 
        <div style={{margin:'0', width:'100vw',color:'white', backgroundColor:'#333333', height:'100vh', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Card 
            className={value == "Register" ? classes.register : classes.login} 
            
            >
            <div className="card_header">
                <div style={{fontFamily:'Roobert', color:'white'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <Logo /><div style={{marginLeft:'5px', marginTop:'5px', fontWeight:'bold'}}>hotoBook</div>
                    </div>
                </div>
            </div>
            {loading?<LinearProgress 
            classes={{barColorPrimary: classes.colorPrimary}}
            />: null}
            
        <Tabs
        variant="fullWidth"
        value={value}
        // indicatorColor="he"
        textColor="white"
        onChange={handleChange}
        aria-label="disabled tabs example"
        className={classes.tabs}
        
      >
        <Tab value="Login"className={classes.tabStyle} label="Login" />
        <Tab value="Register"className={classes.tabStyle} label="Register" />
      </Tabs>
      <div role="tabpanel" hidden={value !== "Login"}>
        <form onSubmit={handleLoginSubmit}>


        <div style={{height:'100%', padding:'10px', marginTop:'5px', marginBottom:'0px'}}>
          
          <TextField 
          fullWidth
          // label="username"
          // onChange={handleUserName}
          name="username"
          onChange={handleLoginFormChange}
          autoFocus
          variant="outlined"
          margin="dense"
          placeholder="username ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true ,
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
          }}
           
          />
          <TextField 
          type={typeLogin}
          // onChange={handlePassword}
          name="password"
          onChange={handleLoginFormChange}
          fullWidth
          variant="outlined"
          margin="dense"
          placeholder="password ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <LockRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
            endAdornment:(
              <IconButton onClick={handleShowLoginPassword} disableRipple
              style={{ backgroundColor: 'transparent' }} 

              >
                {typeLogin == 'password' ? <VisibilityIcon style={{fontSize:'15px', color:'#898989'}}/> : <VisibilityOffIcon style={{fontSize:'15px', color:'#898989'}}/>}
              </IconButton>
            )
          }}
          />
        </div>
        <div style={{width:'inherit', paddingLeft:'10px', paddingRight:'10px', display:'flex', flexDirection:'column', justifyContent:'center', }}>
        <Button 
        type="submit"
        // onClick={handleClick}
        // onClick={handleLoginSubmit}

        variant="contained" 
        className={classes.mainButton}
        >
          
          Login</Button>

          <GoogleLogin 
            clientId="741324102509-jhqfshg5scke6cdregn576vdpi6ml0pv.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
              startIcon={<img src="Google__G__Logo.svg"
              style={{height:'10px', width:'10px'}}
              />}
              // {<Icon />}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
              className={classes.googleLogin}
              >Login With Google</Button>
            )}
            // style={{borderRadius:'50px'}}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        
        </div>
        
        <div className={classes.Link}>
          <a href="#" className={classes.Link}>
          Forget password?
          </a>
            
        </div>
        </form>
      </div>

      <div role="tabpanel" hidden={value !== "Register"}>
      <form onSubmit={handleRegisterSubmit}>
        <div style={{height:'100%', padding:'10px', marginTop:'5px', marginBottom:'0px'}}>
          

          <TextField 
          fullWidth
          // label="username"
          // onChange={handleUserName}
          name="username"
          onChange={handleRegisterFormChange}
          variant="outlined"
          margin="dense"
          placeholder="username ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
          }}
          />
          <TextField 
          fullWidth
          // label="username"
          // onChange={handleEmail}
          name="email"
          onChange={handleRegisterFormChange}
          variant="outlined"
          margin="dense"
          placeholder="email ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <EmailRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
          }}
          />
          <TextField 
          type={typeRegister}
          name="password"
          onChange={handleRegisterFormChange}
          // onChange={handlePassword}
          fullWidth
          // label="username"
          variant="outlined"
          margin="dense"
          placeholder="password ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <LockRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
            endAdornment:(
              <IconButton onClick={handleShowRegisterPassword} disableRipple
              style={{ backgroundColor: 'transparent' }} 

              >
                {typeRegister == 'password' ? <VisibilityIcon style={{fontSize:'15px', color:'#898989'}}/> : <VisibilityOffIcon style={{fontSize:'15px', color:'#898989'}}/>}
              </IconButton>
            )
          }}
          />


        <TextField 
          type={typeRegisterConfirm}
          name="confirmPassword"
          onChange={handleRegisterFormChange}
          // onChange={handlePassword}
          fullWidth
          // label="username"
          variant="outlined"
          margin="dense"
          placeholder="confirm password ..."
          InputProps={{ 
            className: classes.input,
            classes:{notchedOutline:classes.noBorder},
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <LockRoundedIcon style={{fontSize:'15px', color:'#898989'}}/>
              </InputAdornment>
            ),
            endAdornment:(
              <IconButton onClick={handleShowRegisterConfirmPassword} disableRipple
              style={{ backgroundColor: 'transparent' }} 

              >
                {typeRegisterConfirm == 'password' ? <VisibilityIcon style={{fontSize:'15px', color:'#898989'}}/> : <VisibilityOffIcon style={{fontSize:'15px', color:'#898989'}}/>}
              </IconButton>
            )
          }}
          />
          
        </div>
        <div style={{width:'inherit', paddingLeft:'10px', paddingRight:'10px', display:'flex', flexDirection:'row', justifyContent:'center', }}>
        <Button 
        type="submit"
        // onClick={handleRegisterSubmit}
        variant="contained" 
        className={classes.mainButton}
        // style={{backgroundColor:'#9047ff', color:'white', textTransform:'none', fontFamily:'Roobert', fontWeight:'bold', fontSize:'10px', borderRadius:'20px', width:'100%'}}
        >Register</Button>
        
        </div>
        </form>

      </div>
      
            </Card>
            </div>
            
           
            
    );
}
 
export default Login;