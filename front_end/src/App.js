import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Admin from './components/Admin';
import Header from './components/Header';
import home from './components/home';
// import Login from './pages/login';
// import Register from "./pages/register";
// import Logout from './pages/logout';
// import profile from './pages/profile';
// import editProfile from './pages/editProfile';

function App() {
  return (
    <div>

      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          {/*<Route exact path="/profile" component={profile} />*/}


          {/*<Route exact path="/login" component={Login} />*/}
          {/*<Route exact path="/register" component={Register} />*/}
          {/*<Route exact path="/logout" component={Logout} />*/}
          {/*<Route exact path="/admin" component={Admin} />*/}
          {/*<Route exact path="/editProfile" component={editProfile} />*/}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
