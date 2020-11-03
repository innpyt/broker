import React from 'react';
import logoSrc from '../../logo-small.png';
import classes from './logo.module.css';

function logo() {
    return (
  		<div className={classes.logoWrapper}>
  			<img style={{marginRight: "15px"}} src={logoSrc} alt="Logo" /> Broker
  		</div>
  	);
}

export default logo;