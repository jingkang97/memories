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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';


import Avatar from '@material-ui/core/Avatar';

import Story from '../Story/Story'
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import TelegramIcon from '@material-ui/icons/Telegram';

import {useSelector} from 'react-redux'
import moment from 'moment';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
      borderRadius:'10px'

    },
    storyContainer:{
      backgroundColor:'#333333',
      padding:'10px',
      // marginBottom:'10px',
      borderRadius:'10px',
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
      height: 270,
      // padding:'5px',
      // margin:'10px',
      marginLeft:'15px',
      marginRight:'15px',
      // marginBottom:'15px',
      borderRadius:'10px'
      // paddingTop: '56.25%',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // backgroundBlendMode: 'darken',
    },
    card: {
      minWidth:'100px',
      // maxWidth:'300px',
      height:'500px',
        // padding: theme.spacing(2),
        // textAlign: 'center',
        backgroundColor:'#414241',
        color:'#C7C7C6',
        borderRadius:'20px'
      },
      divider:{
        background: 'grey',
      },
      menu: {
        "& .MuiPaper-root": {
          backgroundColor: "#333333",
          color:'white',
        }
      }
  }));

const Feed = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    const [feedLoading, setFeedLoading] = React.useState(true)
    const [storyLoading, setStoryLoading] = React.useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


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
            
            <Button fullWidth variant="contained"style={{borderRadius:'10px', padding:'10px', color:'white', backgroundColor:'#414241'}} >
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
          <Grid key={post.id}item xs={12} sm={12} md={6}>
            <Card className={classes.card}>
            <CardHeader
                avatar={
                  <Avatar alt="P" src="" style={{backgroundColor:'#9047ff', fontFamily:'Roobert', fontWeight:'bold'}}>
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" style={{color:'white'}} onClick={handleClick}>
                    <MoreHorizIcon />
                  </IconButton>
                }
                title={
                  <div style={{fontFamily:'Roobert', fontWeight:'bold', color:'white'}}>
                    User
                  </div>
                }
                subheader={
                  <div style={{fontFamily:'Roobert', fontWeight:'', color:'lightgrey'}}>
                    Singapore
                  </div>
                }
      />
              <CardMedia className={classes.media} image={post.selectedFile} />
              <CardContent style={{paddingLeft:'20px', paddingRight:'20px', color:'white', fontFamily:'Roobert'}}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px'}}>
                <div >
                  <FavoriteBorderOutlinedIcon style={{marginRight:'10px', cursor:'pointer'}}/>
                
                  <ChatBubbleOutlineOutlinedIcon style={{cursor:'pointer'}} />
                  
                </div>
                <BookmarkBorderIcon style={{cursor:'pointer'}}/>
              </div>
              <div style={{display:'flex', flexDirection:'row', marginBottom:'5px'}}>
                Liked by <div style={{fontWeight:'bold', marginLeft:'5px'}}>{post.likeCount}</div>
              </div>
              
              <div style={{display:'flex', flexDirection:'column'}}>
              <Typography variant="p" style={{fontFamily:"Roobert", color:'white', height:'40px', overflow:'scroll'}}>
              {post.caption}
              {/* {moment(post.createdAt).fromNow()} */}
              </Typography>
              <Typography variant="p" style={{fontFamily:"Roobert", color:'lightgrey'}}>
              
              {moment(post.createdAt).fromNow()}
              </Typography>
              </div>
             

              </CardContent>
              
            </Card>
          </Grid>
        ))}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        color="primary"
        className={classes.menu}
      >
        <MenuItem style={{fontFamily:'Roobert'}} onClick={handleClose}>Delete</MenuItem>
        <MenuItem style={{fontFamily:'Roobert'}} onClick={handleClose}>Edit</MenuItem>
        <MenuItem style={{fontFamily:'Roobert'}} onClick={handleClose}>Share</MenuItem>
      </Menu>
      </Grid>
    </div>
  );
    
}
 
export default Feed;