import React, {useEffect} from 'react';
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import {Route, useHistory, useLocation, Switch, Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts'


const App = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPosts())
    },[dispatch])

    return ( 
        <div>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login}/>
          {location.pathname == "/login" ? null : <Main />}
        </Switch>
        </div>
     );
}
 

export default App;
