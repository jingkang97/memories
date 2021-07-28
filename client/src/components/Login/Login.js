import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Tilt from 'react-parallax-tilt';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Logo from '../Logo/Logo'
import './styles.css'


const Login = ({zIndex}) => {
    const [auth, setAuth] = React.useState('false')
    return ( 
        <div style={{margin:'0', width:'100vw',color:'white', backgroundColor:'#333333', height:'100vh', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            
           
    
            
            <Card style={{height:'300px', width:'300px', backgroundColor:'#414141'}}>
            <div className="card_header">
                <div style={{fontFamily:'Roobert', color:'white'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <Logo /><div style={{marginLeft:'5px', marginTop:'5px'}}>hotoBook</div>
                    </div>
                </div>
            </div>
            <div style={{height:'50px'}}>

            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Button variant="contained" style={{backgroundColor:'#9047ff', color:'white'}}>Login</Button>

            </div>
            </Card>
            </div>
            
           
            
    );
}
 
export default Login;