import React from 'react';
import FinancialItem from "./components/FinancialItem/FinancialItem";
import {Provider} from 'react-redux';
import store from "./store";
import classes from "./Main.module.sass";
import Sidenav from "./components/Sidenav/Sidenav";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/pages/Login";
import Secret from "./components/pages/Secret";

function App(){
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Sidenav />
					<div id="main" className={classes.main}>
						<Route path='/charts/:symbol'
							   render={({match}) => {
									const symbol = match.params.symbol.toUpperCase();
									return <FinancialItem symbol={symbol}/>
							   }}
						/>
						<Route exact path='/login' component={Login} />
						<Route exact path='/secret' component={Secret} />
					</div>
				</Router>
			</div>
		</Provider>
	);
}

export default App;