import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import home from './components/home';
import Login from './components/login';
import Register from "./components/register";
import Logout from './components/logout';
import profile from './components/profile';
import editProfile from './components/editProfile';

function App() {
  return (
    <div>

      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/editProfile" component={editProfile} />

            {/*<Route exact path="/recipes" component={Recipies} />*/}
            {/*<Route exact path="/recipes/:id" component={Recipe} />*/}

            {/*<Route exact path="/meals" component={Meals} />*/}
            {/*<Route exact path="/recipes/:id" component={Meal} />*/}
            {/*<Route exact path="/create_meal" component={createMeal} />*/}


        </Switch>
      </Router>
    </div>
  );
}

export default App;
