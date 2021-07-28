import Logo from './components/Logo/Logo'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import {Route, useHistory, useLocation} from 'react-router-dom'

const App = () => {
    return ( 
        <div>
        <Route path="/login" component={Login}/>
            {/* <Login /> */}
            {/* <Logo /> */}
            <Main />
            
        </div>
     );
}
 

export default App;
