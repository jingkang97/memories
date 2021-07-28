import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

// HOC
const Authorization = (Page) => {
    return class extends Component{
        render(){
            // const token = sessionStorage.getItem('token')
            // console.log(token)
            // const flag = true
            return(
                <div>
                    {/* <Page /> */}
                    {true==true ? <Page /> : <Redirect to="./login"/>}
                    {/* <Page /> */}
                </div>
            )
        }
    };
}
 
export default Authorization;
