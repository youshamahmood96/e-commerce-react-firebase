import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import fakeData from '../../fakeData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CategoryContext } from '../../App';
const drawerWidth = 240;
const data = fakeData.slice(0,10)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:'#0054db',
    [theme.breakpoints.up('sm')]: {
      width:'100%',
      zIndex:'100',
      height:'60px'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:'60px',
    paddingTop:'-50px'
  },
  content: {
    flexGrow: 1,
    paddingTop:'-50px',
  },
}));

function ResponsiveDrawer(props) {
  const [category,setCategory] = useContext(CategoryContext)
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (text) => {
    console.log(text);
     setCategory(text)
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem>
          <ListItemText onClick={()=>handleClick('All Items')} primary='All Items' ></ListItemText>
          <ListItemIcon> <ArrowForwardIosIcon style={{color: '#0054db'}} /> </ListItemIcon>
        </ListItem>
      </List>
      <List>
        {data.map((category) => (
          <ListItem onClick={()=>handleClick(category.category)} button key={category.key}>
            <ListItemText primary={category.category} />
            <ListItemIcon> <ArrowForwardIosIcon style={{color: '#0054db'}} /> </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Logo 
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
