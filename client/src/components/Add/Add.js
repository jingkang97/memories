import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

import './styles.css'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    addButton:{
        '&:hover': {
          backgroundPosition:'0 -40px',
          backgroundSize: '100% 100px',
          background: 'linear-gradient(45deg, #FE6B8B 40%, #9047ff 90%)',
          // background: 'pink',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          transition: "background 0.3s ease-in-out",
        },
        backgroundSize: '100% 100px',
        backgroundPosition: '0 0px',
        transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out ",
        background: 'linear-gradient(45deg, #FE6B8B 40%, #9047ff 90%)',
        // background: 'linear-gradient(45deg, #FE6B8B 5%, #FF8E53 10%, #9047ff 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        textTransform: 'none',
      },
      card:{
        width:'500px',
        height:'50vh',
        backgroundColor:'#414241',
      color:'#C7C7C6'
      },
      postButton:{
          backgroundColor:'#9047ff',
          color:'white',
        textTransform:'none'

      },
      cancelButton:{
          textTransform:'none'
      }
  }));


const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return ( 
        <div className="body">
            <Button 
            className={classes.addButton} 
            // className="addButton"
            style={{marginRight:'35px', height:'30px'}}variant="contained"
            onClick={handleToggle}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <AddCircleOutlineRoundedIcon style={{marginLeft:'-8px',height:'15px'}}/>
            <div className="button">
                
              Add Post
              </div>
            </div>
           
            </Button>

      <Backdrop className={classes.backdrop} open={open} >
        <Card className={classes.card}>
            <Button variant="contained" className={classes.postButton} onClick={handleClose}>Post!</Button>
            <Button variant="contained" className={classes.cancelButton} onClick={handleClose}>Cancel</Button>
        </Card>
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
     );
}
 
export default Add;