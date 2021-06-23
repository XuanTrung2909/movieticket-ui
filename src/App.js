import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Assets/scss/style.scss";
import 'react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CssBaseline } from "@material-ui/core";
import Login from "./Pages/Login/Login";
import UserTemplate from "./Template/UseTemPlate/UserTemplate";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import Modal from "./Components/Modal/Modal";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";



function App() {
  
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/dang-nhap" exact component={Login} />
          <Route path="/dang-ky" exact component={SignUp} />
          <UserTemplate path='/chi-tiet-phim/:maPhim' exact component={MovieDetail} />
          <UserTemplate path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
      <Modal />
      
    </div>
  );
}

export default App;
