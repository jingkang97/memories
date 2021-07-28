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
    backgroundColor:'#333333'
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
    height:'350px', width:'300px', backgroundColor:'#414141',
    transitions:'2s '
  },
  login:{
    height:'350px', width:'300px', backgroundColor:'#414141',
    transitions:'height 2s'

  },
  colorPrimary: {
    background: '#9047ff'
  }
}));


const Login = () => {
    const classes = useStyles();
    const history = useHistory()
    const [auth, setAuth] = React.useState('false')
    const [value, setValue] = React.useState('Login');


    const handleClick = () => {
      history.push('/feed')
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <LinearProgress 
            classes={{barColorPrimary: classes.colorPrimary}}
            />

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
        <div style={{height:'100%', padding:'10px', marginTop:'5px', marginBottom:'0px'}}>
          
          <TextField 
          fullWidth
          // label="username"
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
          type="password"
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
          }}
          />
        </div>
        <div style={{width:'inherit', paddingLeft:'10px', paddingRight:'10px', display:'flex', flexDirection:'row', justifyContent:'center', }}>
        <Button 
        onClick={handleClick}
        variant="contained" style={{backgroundColor:'#9047ff', color:'white', textTransform:'none', fontFamily:'Roobert', fontWeight:'bold', fontSize:'10px', borderRadius:'20px', width:'100%'}}>Login</Button>
        
        </div>
        <div className={classes.Link}>
          <a href="#" className={classes.Link}>
          Forget password?
          </a>
            
        </div>
      </div>

      <div role="tabpanel" hidden={value !== "Register"}>
        <div style={{height:'100%', padding:'10px', marginTop:'5px', marginBottom:'0px'}}>
          
          <TextField 
          fullWidth
          // label="username"
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
          type="password"
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
          }}
          />
          
        </div>
        <div style={{width:'inherit', paddingLeft:'10px', paddingRight:'10px', display:'flex', flexDirection:'row', justifyContent:'center', }}>
        <Button 
        onClick={handleClick}
        variant="contained" style={{backgroundColor:'#9047ff', color:'white', textTransform:'none', fontFamily:'Roobert', fontWeight:'bold', fontSize:'10px', borderRadius:'20px', width:'100%'}}>Register</Button>
        
        </div>
        
      </div>
      
            </Card>
            </div>
            
           
            
    );
}
 
export default Login;