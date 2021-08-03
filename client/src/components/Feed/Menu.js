import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import {deletePost} from '../../actions/posts'
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

import {updatePost} from '../../actions/posts'


const useStyles = makeStyles((theme) => ({
    menu: {
        "& .MuiPaper-root": {
          backgroundColor: "#333333",
          color:'white',
        }
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
      card:{
        position:'relative',
        width:'500px',
        height:'420px',
        backgroundColor:'#414241',
        color:'#C7C7C6',
        padding:'20px',
        paddingTop:'10px',
        borderRadius:'10px',
  //   width:'100%'
    },
    saveButton:{

      width:'100%',
      backgroundColor:'#9047ff',
      color:'white',
    textTransform:'none',
    marginRight:'10px',
    fontFamily:'Roobert',
    fontWeight:'bold',
    borderRadius:'10px',
    '&:hover': {
        backgroundColor:'#9047ff',
    }
  },
  input: {
    color: "white",
    fontFamily:'Roobert'
  },
  }));


export default function SimpleMenu({post}) {
const classes = useStyles();

const [postData, setPostData] = useState({
  caption: post.caption,
  selectedFile:post.selectedFile
})
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleCloseEdit = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    setAnchorEl(null);
  };


  const dispatch = useDispatch()

  const handleClick = (event) => {
      console.log(post._id)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id))
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(post._id, postData))
    setOpen(false);
  }
  

  return (
    <div>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" style={{color:'white'}} onClick={handleClick}>
            <MoreHorizIcon />
        </IconButton>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}

      >
        <MenuItem onClick={handleDelete}><div style={{display:'flex', flexDirection:'row', alignItems:'center', color:'red'}}><DeleteOutlineRoundedIcon style={{marginRight:'5px'}}/> Delete</div> </MenuItem>
        <MenuItem onClick={handleToggle}><div style={{display:'flex', flexDirection:'row', alignItems:'center', color:'white'}}><EditOutlinedIcon style={{marginRight:'5px'}}/> Edit</div></MenuItem>
        <MenuItem onClick={handleClose}><div style={{display:'flex', flexDirection:'row', alignItems:'center', color:'white'}}><LinkRoundedIcon style={{marginRight:'5px'}}/> Share</div></MenuItem>
      </Menu>
      <Backdrop className={classes.backdrop} open={open} >
        <Card className={classes.card}>
        
        <div style={{position:'absolute', right:'5px', top:'5px'}}>
                <IconButton size="small" onClick={handleCloseEdit}>
                    <CloseRoundedIcon style={{color:'grey'}}/>
                </IconButton>
            </div>
            <div style={{fontFamily:'Roobert', fontWeight:'bold', fontSize:'20px', display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'10px'}}>
                Edit Post
            </div>
            <Divider classes={{root: classes.divider}}/>
            <form style={{width:'100%'}} onSubmit={handleSubmit}>
            
            <div style={{marginTop:'10px'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                <Avatar alt="P" src="" style={{backgroundColor:'#9047ff', fontFamily:'Roobert', fontWeight:'bold'}}/>
                <div style={{marginLeft:'10px'}}>
                    User
                </div>
                </div>
                <div style={{height:'90px', overflow:'scroll', marginTop:'10px'}}>
            <TextField 
            style={{marginBottom:'20px', width:'100%', color:'white'}}
            multiline
            value={postData.caption}
            // onChange={handleChange}
            onChange={(e) => setPostData({...postData, caption: e.target.value})}
            rows={4}
            InputProps={{ 
                className: classes.input,
                disableUnderline: true }}
            placeholder="What's on your mind?"

            />
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'1px solid grey', marginBottom:'20px',height:'150px', borderRadius:'10px', overflow:'scroll'}}>

            <img src={post.selectedFile}style={{height:'300px', width:'100%'}}/>
            </div>
          </div>

        <Button className={classes.saveButton} type="submit">Done</Button>
        </form>
        </Card>
        
      </Backdrop>
    </div>
  );
}