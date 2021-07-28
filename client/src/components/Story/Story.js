import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { display } from '@material-ui/system';

// import Story from '../Story/Story'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
    minWidth:'100px',
    // maxWidth:'300px',
    height:'200px',
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor:'#414241',
      color:'#C7C7C6'
    //   color: theme.palette.text.secondary,
    },
    story:{
      minWidth:'80px',
    // maxWidth:'300px',
    width:'80px',
    height:'100px',
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor:'#414241',
      color:'#C7C7C6',
      cursor:'pointer',
      fontFamily: 'Roobert',
      marginRight:'10px',

    //   color: theme.palette.text.secondary,
    },
    storyContainer:{
      backgroundColor:'#333333',
      padding:'10px',
      width:'inherit',
      marginBottom:'30px',
      borderRadius:'5px',
      overflowX:'scroll',
      display:'flex',
      flexDirection:'row'
    }
  }));

const Story = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.storyContainer}>
      <Paper className={classes.story}>
        <div>
          Create Story
        </div>
        <AddRoundedIcon />
        </Paper>
        <Paper className={classes.story}>
        <div>
          Create Story
        </div>
        <AddRoundedIcon />
        </Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>
        <Paper className={classes.story}></Paper>

        
      </div>
     );
}
 
export default Story;