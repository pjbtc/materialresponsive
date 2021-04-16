import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
   Link,
  MenuItem
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core";
import Drawer from "@material-ui/core";

const headersData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Weather",
    href: "/weather",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
    drawerContainer: {
    padding: "20px 30px",
  },
   logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  }));  


 function Header() {

   const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,    
  });
const {mobileView, drawerOpen} = state;



const displayMobile = () => {
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));


    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",  //allows the button to be positioned at the start of the toolbar. 
            color: "inherit", //lets the icon inherit the color specified at the closest top-level component
            "aria-label": "menu", //meant for screen readers to notify users who have visual impairments that 
                                        //this element is a menu and has a pop-up, respectively.
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
          <Drawer
          {...{
            anchor: "left", //anchors the drawer to the left side of the screen.
            open: drawerOpen,  //Depending on whether our state drawerOpen is true or false, our Drawer will be either shown or not shown.
            onClose: handleDrawerClose, //ensures that when we click on anything outside of the drawer, the handleDrawerClose function will be called. This takes care of setting the drawerOpen state to false, thus closing the drawer.
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
    <div>{femmecubatorLogo}</div>
    </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => { //We map through each item in the headersData collection,
                                                  // deconstructing the label and href keys from each item.
      return (   //Each object is mapped to a Link and imported from @material-ui/core.
                  //We specify that the component is a RouterLink that we previously imported from react-router-dom.
        <Link
          {...{
            component: RouterLink,
            to: href,              //allows the user to navigate to the href route on click
            color: "inherit",
            style: { textDecoration: "none" }, //We make sure that color and key are specified and 
                            //set the textDecoration to none to remove the underline default of a link.
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem> //Lastly, we use MenuItem and add our label in it.

        </Link>
      );
    });

  };
  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Femmecubator
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };

  return (
    <header> 
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
export default Header;
