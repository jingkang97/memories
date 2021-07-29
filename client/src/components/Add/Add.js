import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

import FileBase from 'react-file-base64'

import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'
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
        borderRadius: 7,
        color: 'white',
        textTransform: 'none',
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
      postButton:{

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
      cancelButton:{
          marginTop:'10px',
          width:'100%',
        fontWeight:'bold',
          textTransform:'none',
          fontFamily:'Roobert',
        //   backgroundColor:'#3B3A3E',
          color:'black',
          '&:hover': {
            // backgroundColor:'#3B3A3E',
        }
      },
      input: {
        color: "white",
        fontFamily:'Roobert'
      },
      divider:{
        background: 'grey',
      },
      fileInput:{
        display:'none'
      }
  }));


const Add = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
      caption:'',
      selectedFile:''
    })
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    // const handleChange = (event) => {
    //     setPostData(event.target.value);
    // };

    const handleClose = () => {
        setPostData({caption:'', selectedFile:''})
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setPostData({caption:'', selectedFile:''})
      setOpen(false);
      dispatch(createPost(postData))
      console.log('submit')
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
       

            <div style={{position:'absolute', right:'5px', top:'5px'}}>
                <IconButton size="small" onClick={handleClose}>
                    <CloseRoundedIcon style={{color:'grey'}}/>
                </IconButton>
            </div>
            <div style={{fontFamily:'Roobert', fontWeight:'bold', fontSize:'20px', display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'10px'}}>
                Create Post
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

            // label="Required"
            />
            </div>
            
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'1px solid grey', marginBottom:'20px',height:'150px', borderRadius:'10px', overflow:'scroll'}}>
          

           
          {postData.selectedFile ? 
          <div>
          <img src={postData.selectedFile} style={{height:'300px', width:'100%'}}/>
          </div> 
          : 
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          style={{backgroundColor:'', marginBottom:'10px', height:'90px', width:'90px', alignSelf:'center'}}
          component="label"
           // onClick={handleDrawerOpen}
           >
          <PublishRoundedIcon style={{fontSize:'50px', color:'grey'}}/>
           <label className="file-upload__icon">
           <FileBase 
            // className={classes.fileInput}
            type="file" 
            multiple={false} 
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
            
            </label>
            
           {/* <input 
             type="file" 
             hidden/> */}
          </IconButton>
          <div>
          Click to Upload Image!
          </div>
          </div>
          }
            </div>
          </div>
              
          
            {/* <div style={{marginBottom:'1px', position:'absolute', display:'flex', flexDirection:'row', bottom:'10px', right:'10px', justifyContent:'center'}}> */}
            <Button variant="contained" type="submit" className={classes.postButton} >Post!</Button>
            {/* <Button variant="contained" className={classes.cancelButton} onClick={handleClose}>Cancel</Button> */}
              </form>
            {/* </div> */}
              </Card>
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
     );
}
 
export default Add;