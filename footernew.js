import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';





const useStyles = makeStyles({
  root: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
  
    color: 'white',
    height: 40,
  
    textAlign: 'center',
    bottom:0,
    position: 'fixed',
    width: '100%',
 
    listStyleType: 'none',
    paddingTop: '50px',
  },
});


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Navbar=()=>{
	const classes = useStyles();


	
		return(
					
					<div className={classes.root}>
			
			
				  <p>pjtechnicallab.com</p>
				
				
				
			</div>
			
		)
	}


export default Navbar;