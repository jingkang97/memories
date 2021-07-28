import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { display } from '@material-ui/system';
import Button from '@material-ui/core/Button';

import Story from '../Story/Story'

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      // width:'85vw',
      // margin:'10px',
      backgroundColor:'transparent'
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
    // width:'80px',
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
      marginBottom:'10px',
      borderRadius:'5px',
      overflowX:'scroll',
      display:'flex',
      flexDirection:'row',
      width:'100%'
    },
    
  }));

const Feed = () => {

    const classes = useStyles();

    return (
    <div className={classes.root}>

     
      <Grid container spacing={3} style={{backgroundColor:'transparent'}}>
        
        <Grid item xs={12} sm={12} md={12}>
          
          <Paper className={classes.storyContainer}>
          <div style={{width:'10px', display:'flex', flexDirection:'row'}}>
            <div style={{ width:'500px', backgroundColor:'transparent', marginRight:'10px'}}>
            <Button fullWidth variant="contained"style={{padding:'10px', color:'white', backgroundColor:'#414241'}} >
              <div className="body">
              Create Story  
              <AddRoundedIcon />
              </div>
            </Button>
            </div>
            
            
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            <Paper className={classes.story}></Paper>  
            </div>
          </Paper>
          
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        
      </Grid>
    </div>
  );
    
}
 
export default Feed;