import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { display } from '@material-ui/system';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


import Story from '../Story/Story'
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'

import {useSelector} from 'react-redux'
import moment from 'moment';


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
    },
    story:{
      minWidth:'80px',

    height:'100px',
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor:'#414241',
      color:'#C7C7C6',
      cursor:'pointer',
      fontFamily: 'Roobert',
      marginRight:'10px',

    },
    storyContainer:{
      backgroundColor:'#333333',
      padding:'10px',
      // marginBottom:'10px',
      borderRadius:'5px',
      overflowX:'scroll',
      display:'flex',
      flexDirection:'row',
      width:'100%'
    },
    colorPrimary: {
      color: '#9047ff'
    },
    barColorPrimary: {
      background: '#9047ff'
    },
    media: {
      height: 150,
      // paddingTop: '56.25%',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // backgroundBlendMode: 'darken',
    },
    card: {
      minWidth:'100px',
      // maxWidth:'300px',
      height:'200px',
        // padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor:'#414241',
        color:'#C7C7C6'
      },
  }));

const Feed = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    const [feedLoading, setFeedLoading] = React.useState(true)
    const [storyLoading, setStoryLoading] = React.useState(false)

    console.log(posts)
    const n = 20;


    return (
    <div className={classes.root}>
      <div style={{width:'100%', position:'absolute', top:'50px', left:'0px'}}>
        {storyLoading?<LinearProgress 
            classes={{barColorPrimary: classes.barColorPrimary}}
            />: null}
      </div>
     
      <Grid container spacing={3} style={{backgroundColor:'transparent'}}>
        
        <Grid item xs={12} sm={12} md={12}>
        
          <Paper className={classes.storyContainer}>
            
            
          
          <div style={{width:'100px', display:'flex', flexDirection:'row'}}>
          
            <div style={{ width:'500px', backgroundColor:'transparent', marginRight:'10px'}}>
            
            <Button fullWidth variant="contained"style={{padding:'10px', color:'white', backgroundColor:'#414241'}} >
              <div className="body">
              Create Story  
              <AddRoundedIcon />
              </div>
            </Button>
            </div>

            {[...Array(n)].map((elementInArray, index) => {
              return(<div className="" key={index}> 
              <Paper className={classes.story}></Paper> 
              </div> 
              )
            })
            } 

            </div>
          </Paper>
          
            {!posts.length? 
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center', marginTop:'50px', marginBottom:'10px', height:'', alignItems:'center'}}>

            <CircularProgress 
            classes={{circle: classes.colorPrimary}} /> 
            </div>
            : null}
        </Grid>
        {posts.map((post) => (
          <Grid key={post.id}item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={post.selectedFile} />
              {post.caption}
              {moment(post.createdAt).fromNow()}
            </Card>
          </Grid>
        ))}

      </Grid>
    </div>
  );
    
}
 
export default Feed;