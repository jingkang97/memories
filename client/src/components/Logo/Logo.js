import React from 'react';
import Tilt from 'react-parallax-tilt';
import './styles.css'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
// import {Route, useHistory, useLocation} from 'react-router-dom'
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
        // minWidth:'100px',
        // maxWidth:'300px',
        height:'190px',
        width:'170px',
          padding: theme.spacing(2),
          textAlign: 'center',
          backgroundColor:'#414241',
          color:'#C7C7C6'
        },
  }));

const Logo = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return ( 

        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
            glareEnable={false}
            glareColor='#ffffff'
            glarePosition="all"
            >
            <div className="inner-element" onClick={handleToggle}>P</div>
        {/* <img className="inner-element" src="logop.svg" style={{height:'20px', width:'20px'}}/> */}
    </Tilt>
        <Backdrop className={classes.backdrop} open={open} 
        onClick={handleClose}
        >
            
            <Paper className={classes.paper}>
            {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'100%'}}>
                    <ClearRoundedIcon style={{fontSize:'15px', cursor:'pointer'}} onClick={handleClose}/>
            </div> */}
            <div style={{height:'100%',display:'flex', flexDirection:'column',justifyContent:'center', alignContent:'center'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'5px'}}>
                <Tilt
                className="parallax-effect-img_zoom"
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
                glareEnable={false}
                glareColor='#ffffff'
                glarePosition="all"
                >
                <div className="inner-element_zoom" onClick={handleToggle}>P</div>
                </Tilt>
            </div>
            <div style={{fontFamily:'Roobert', fontWeight:'bold', fontSize:'30px', marginTop:'10px'}}>
                PhotoBook
            </div>
            <div style={{fontFamily:'Roobert', fontWeight:'bold', fontSize:'15px', marginTop:'5px'}}>
                Version 1.0
            </div>
            <div style={{fontFamily:'Roobert', fontWeight:'bold', fontSize:'8px', marginTop:'0px'}}>
            &copy; 2021 Jing Kang

            </div>
            </div>
            
            </Paper>
        </Backdrop>
        
        </div>
     );
}
 
export default Logo;