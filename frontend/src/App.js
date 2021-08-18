import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import home from './components/home';
import Login from './components/login';
import Register from "./components/register";
import editProfile from './components/editProfile';
import Recipes from './components/recipes';
import Recipe from "./components/recipe/recipe";
import Meals from "./components/meals"
import Meal from "./components/meal/meal";
import Profile from "./components/profile";
import {HEADERS, REST_API_IP, TOKEN} from "./config";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`${REST_API_IP}/tokens/${TOKEN}/`, {headers: HEADERS})
            .then(
                (result) => {
                    setIsLoggedIn(true);
                    setIsLoaded(true);
                    console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {
                setIsLoaded(true);
                setIsLoggedIn(false);
                console.log(error.response);
            })
    }, []);
    if (!isLoaded) {
         return (<div className="loading-card">
                    <CircularProgress size={68} />
                </div>);
    }
    return (
        <div>
            <Router>
                <Header isLoggedIn={isLoggedIn}/>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route exact path="/recipes" component={Recipes}/>
                    <Route exact path="/recipes/:id" render={(props) => (<Recipe is_logged_in={isLoggedIn} id={props.match.params.id}/>)}/>
                    {/*<Route exact path="/register" component={Register} />*/}
                    {/*<Route exact path="/login" component={Login}>*/}
                    <Route exact path="/login">
                        {isLoggedIn ? <Redirect to="/"/> : <Login/>}
                    </Route>
                    <Route exact path="/register">
                        {isLoggedIn ? <Redirect to="/"/> : <Register/>}
                    </Route>
                    <Route path="/profile">
                        {isLoggedIn ? <Profile/> : <Redirect to="/login"/>}
                    </Route>
                    <Route path="/editProfile">
                        {isLoggedIn ? <editProfile/> : <Redirect to="/login"/>}
                    </Route>
                    <Route exact path="/meals/">
                        {isLoggedIn ? <Meals/> : <Redirect to="/login"/>}
                    </Route>
                    <Route exact path="/meals/:id" render={(props) => (<Meal id={props.match.params.id}/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
