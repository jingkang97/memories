import Logo from './components/Logo/Logo'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import {Route, useHistory, useLocation} from 'react-router-dom'

const App = () => {
    const location = useLocation()
    return ( 
        <div>
        <Route path="/login" component={Login}/>
            {/* <Login /> */}
            {/* <Logo /> */}
          {location.pathname == "/login" ? null : <Main />}
            
        </div>
     );
}
 

export default App;
