import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {Route, useHistory, useLocation} from 'react-router-dom'


import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';import TelegramIcon from '@material-ui/icons/Telegram';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import Authorization from '../Authorization/Authorization'
import Login from '../Login/Login'
import Feed from '../Feed/Feed'
import Explore from '../Explore/Explore'
import Notification from '../Notification/Notification';
import Direct from '../Direct/Direct';
import Settings from '../Settings/Settings';
import Add from '../Add/Add';

import Logo from '../Logo/Logo';
import './styles.css'
import { Avatar, Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

const drawerWidth = 200;



const customTheme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 6000,
      // most basic recommended timing
      standard: 10000,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'#181818',
    // width:'100%',
    minWidth:'100vw',
    minHeight:'100vh',
    height:'100%',
    width:'100%'
  },
  appBar: {
    backgroundColor:'#1F1F23',
    // paddingLeft:'80px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height:'50px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100vw'
  },
  appBarShift: {
    paddingLeft:'0px',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // border:'none'
    backgroundColor:'#1F1F23'
  },
  drawerOpen: {
    backgroundColor:'#1F1F23',
    borderColor:'#181818',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:'#1F1F23',
    borderColor:'#181818',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    marginBottom:'0px'
  },
  content: {
    flexGrow: 1,
    width:'100%',
    paddingRight:'20px',
    paddingLeft:'20px',
    paddingBottom:'20px',
    paddingTop:'10px',
    // padding: "20px",
    // paddingRight:'100px',
    // backgroundColor:'#1D1E1F',
    backgroundColor:'#181818',
    // backgroundColor:'black',
    color:'white'
  },
  divider: {
    // Theme Color, or use css color in quote
    background: 'lightgrey',
},
  divider_div_open:{
    marginTop:'10px',
    marginRight:'30px',
    marginLeft:'10px',
    transition: '0.2s'

  },
  divider_div:{
    marginTop:'10px',
    marginRight:'10px',
    marginLeft:'10px',
    transition: '0.2s'

  },
  not_active:{
    color:'grey',
    marginLeft:'7px'
  },
  activeTab:{
    overflowY: 'hidden',
    // zIndex: '10',
    height: '50px',
    borderLeft: '4px solid white',
  },
  notActiveTab:{
    
  },
  active:{
    color:'white',
    filter: 'drop-shadow(0px 0px 5px #9047ff)',
    marginLeft:'3px'
  },
  not_active_text:{
    color:'grey'
  },
  active_text:{
    color:'white'
  },
  listHover: {
    '&:hover': {
        background: "#282D36",
        
      },
  },
  shadowElement:{
    height: '60px',
    boxShadow: '-15px 0px 15px 2px #9047ff',
  },
  
}));


function MiniDrawer() {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))

  const dispatch = useDispatch()


  useEffect(()=>{
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    setUser(null)
    history.push('/login')
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          // [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100vw'}}>
          <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{marginRight:'20px', marginLeft:'-5px'}}>
          <Logo />
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, 

            )}
          >
            <MenuRoundedIcon
            style={{size:'10px'}}
            />
          </IconButton>
          </div>
          
              
         

          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Avatar src={user?.result.imageUrl} alt={user?.result.name} style={{marginRight:'10px', height:'30px', width:'30px'}}>
            {user?.result.name.charAt(0)}
          </Avatar>
          {/* <div style={{marginRight:'10px', fontFamily:'Roobert'}}>
            {user.result.givenName}
          </div> */}
          <Add />
            
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
 <div >
        <List style={{marginTop:'50px'}} className="sideBar">
        
        <ListItem 
        classes={{root: classes.listHover}}
        className={location.pathname =="/feed" ? classes.activeTab : classes.notActiveTab}

        button onClick={() => {history.push('/feed')}}>
        {location.pathname == "/feed" ?  <div className={classes.shadowElement}></div> : null}

              <ListItemIcon>
                <AppsRoundedIcon 
                className={location.pathname =="/feed" ? classes.active : classes.not_active}
                // style={{marginLeft:'7px',color:'white'}}
                /> 
                </ListItemIcon>
                <ListItemText 
                className={location.pathname =="/feed" ? classes.active_text : classes.not_active_text}

                >
                  <div className="sideBar">
                  Feed
                  </div>
                
                </ListItemText> 
        </ListItem>

        <ListItem 
        classes={{root: classes.listHover}}
        className={location.pathname =="/explore" ? classes.activeTab : classes.notActiveTab}

        button onClick={() => {history.push('/explore')}}>
        {location.pathname == "/explore" ?  <div className={classes.shadowElement}></div> : null}

              <ListItemIcon>
                <ExploreRoundedIcon 
                  className={location.pathname =="/explore" ? classes.active : classes.not_active}

                /> 
                </ListItemIcon>
                <ListItemText 
                className={location.pathname =="/explore" ? classes.active_text : classes.not_active_text}

                >
                <div className="sideBar">
                  Explore
                  </div>
                </ListItemText> 
        </ListItem>


        <ListItem 
        classes={{root: classes.listHover}}
        className={location.pathname =="/notification" ? classes.activeTab : classes.notActiveTab}

        button onClick={() => {history.push('/notification')}}>
        {location.pathname == "/notification" ?  <div className={classes.shadowElement}></div> : null}

              <ListItemIcon >
                <NotificationsRoundedIcon 
                className={location.pathname =="/notification" ? classes.active : classes.not_active}

                /> 
                </ListItemIcon>
                <ListItemText 
                className={location.pathname =="/notification" ? classes.active_text : classes.not_active_text}

                >
                <div className="sideBar">
                  Notification
                  </div>
                </ListItemText> 
        </ListItem>

        <ListItem 
        classes={{root: classes.listHover}}
        className={location.pathname =="/direct" ? classes.activeTab : classes.notActiveTab}
        button onClick={() => {history.push('/direct')}}>
                  {location.pathname == "/direct" ?  <div className={classes.shadowElement}></div> : null}

              <ListItemIcon >
                <TelegramIcon 
                className={location.pathname =="/direct" ? classes.active : classes.not_active}

                /> 
                </ListItemIcon>
                <ListItemText 
                className={location.pathname =="/direct" ? classes.active_text : classes.not_active_text}

                >
                <div className="sideBar">
                  Direct
                  </div>
                </ListItemText> 
        </ListItem>

        <ListItem 
        classes={{root: classes.listHover}}
        className={location.pathname =="/settings" ? classes.activeTab : classes.notActiveTab}

        button onClick={() => {history.push('/settings')}}>
                  {location.pathname == "/settings" ?  <div className={classes.shadowElement}></div> : null}


              <ListItemIcon>
                <SettingsRoundedIcon 
                 className={location.pathname =="/settings" ? classes.active : classes.not_active}

                /> 
                </ListItemIcon>
                <ListItemText 
                className={location.pathname =="/settings" ? classes.active_text : classes.not_active_text}

                >
                <div className="sideBar">
                  Settings
                  </div>
                </ListItemText> 
        </ListItem>
        <div 
        className={open ? classes.divider_div_open : classes.divider_div}
        >
        <Divider classes={{root: classes.divider}}/>
        </div>
        
        <div style={{marginTop:'-15px', width:'205px',color:'white', display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
        <div style={{backgroundColor:'#181818', borderRadius:'5px'}}> 
        <IconButton size="medium" style={{ height:'30px', width:'30px',position:'relative',color:'white'}}
        
        onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        </div>
        
        <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppRoundedIcon style={{marginLeft:'7px',color:'grey'}}/> 
                </ListItemIcon>
                <ListItemText 
                style={{color:'grey'}}>
                <div className="sideBar">
                  Logout
                  </div>
                </ListItemText> 
        </ListItem>

        
        
        
        </List>
        
        </div>
            
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
               
        <Route path="/feed" component={Feed}/>
        <Route path="/explore" component={Explore}/>
        <Route path="/notification" component={Notification}/>
        <Route path="/direct" component={Direct}/>
        <Route path="/settings" component={Settings}/>

        
          
          
      </main>
    </div>
  );
}

// export default Authenticate(MiniDrawer)
export default Authorization(MiniDrawer) 