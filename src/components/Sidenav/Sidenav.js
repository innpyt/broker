import React from 'react';
import classes from './sidenav.module.sass';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

function sidenav() {
  return (
  	<div className={classes.sidenav}>
  	  <Logo />
	  <Link to="/charts">Charts</Link>
	  <div className={classes.sub}>
	  	{/*<Link to="/charts/tsla">Tesla</Link>*/}
	  	{/*<Link to="/charts/amzn">Amazon</Link>*/}
	  	{/*<Link to="/charts/fb">Facebook</Link>*/}
		  <Link to="/charts/ibm">IBM</Link>
		  <Link to="/charts/tsco.lon">Tesco</Link>
	  </div>
	  <Link to="/login">Login</Link>
	  <Link to="/secret">Secret</Link>
	</div>
  );
}

export default sidenav;