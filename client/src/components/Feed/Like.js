import React, {useEffect} from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';


import {likePost} from '../../actions/posts'
import { useDispatch } from 'react-redux';

import './styles.css'

const Like = ({post}) => {
    const [like,setLike] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const dispatch = useDispatch()

    const handleClick = () =>{
        
        setCount(count + 1)
        dispatch(likePost(post._id))

    }

    useEffect(() => {
        setCount(post.likeCount)
    }, [post.likeCount])

    

    return ( 
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
            {count ? 
            <FavoriteOutlinedIcon className="like" style={{color:'red',marginRight:'5px', cursor:'pointer'}} 
            onClick={handleClick}

            // onClick={()=>{console.log('like!' + post._id)}}
            />
            : 
            <FavoriteBorderOutlinedIcon className="like" style={{marginRight:'5px', cursor:'pointer'}} 
            onClick={handleClick}

            // onClick={()=>{console.log('like!' + post._id)}}
            />
            
            }
            <div style={{fontSize:'15px'}}>
            {count}
            </div>
            

        </div>

     );
}
 
export default Like;