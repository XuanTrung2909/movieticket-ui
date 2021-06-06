import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Assets/scss/style.scss';
import { CssBaseline } from "@material-ui/core";
import Login from "./Pages/Login/Login";
import UserTemplate from './Template/UseTemPlate/UserTemplate'
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login} />
          <UserTemplate path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
