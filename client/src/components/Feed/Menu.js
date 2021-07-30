import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    menu: {
        "& .MuiPaper-root": {
          backgroundColor: "#333333",
          color:'white',
        }
      }
  }));


export default function SimpleMenu({id}) {
const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch()

  const handleClick = (event) => {
      console.log(id)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deletePost(id))
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}><div style={{display:'flex', flexDirection:'row', alignItems:'center', color:'white'}}><EditOutlinedIcon style={{marginRight:'5px'}}/> Edit</div></MenuItem>
        <MenuItem onClick={handleClose}><div style={{display:'flex', flexDirection:'row', alignItems:'center', color:'white'}}><LinkRoundedIcon style={{marginRight:'5px'}}/> Share</div></MenuItem>
      </Menu>
    </div>
  );
}