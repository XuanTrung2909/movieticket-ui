import React from "react";
import {
  AppBar,
  Grid,
  Hidden,
  Drawer,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import {
  ExitToApp,
  Menu,
  MovieCreation,
  SupervisorAccount,
} from "@material-ui/icons";
import { useState } from "react";
import { ACCESSTOKEN, USER_LOGIN } from "../../../Ulti/setting";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin(props) {
  const handlelogout = () => {
    localStorage.removeItem(ACCESSTOKEN);
    localStorage.removeItem(USER_LOGIN);
    window.location.reload();
  };
  const [checkSidebar, setCheckSidebar] = useState(false);

  const handleCloseSidebar = () => {
    setCheckSidebar(false);
  };
  return (
    <div className="header_admin">
      <AppBar color="default" position="static" >
        <Container maxWidth='xl'>
          <Grid container justify="space-between" alignItems="center">
            <Grid item className="logo">
              <Link to="/" className="link">
                <img
                  src="https://tix.vn/app/assets/img/icons/web-logo.png"
                  alt="logo"
                />
              </Link>
            </Grid>
            <Hidden smDown>
              <IconButton
                onClick={() => {
                  handlelogout();
                }}
              >
                <ExitToApp />
              </IconButton>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                onClick={() => {
                  setCheckSidebar(true);
                }}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Grid>
        </Container>
      </AppBar>
      <Drawer
        open={checkSidebar}
        onClose={handleCloseSidebar}
        className="drawer_admin"
      >
        <div className="info">
          <Avatar
            src="https://i.pravatar.cc/150?u=trung.nx"
            className="avatar"
          />
          <h2>Administrator</h2>
          <p></p>
        </div>
        <Divider />
        <List>
          <NavLink activeClassName="active" to="/admin/quan-ly-tai-khoan">
            <ListItem
              button
              onClick={() => {
                handleCloseSidebar();
              }}
            >
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText primary="Tài Khoản" />
            </ListItem>
          </NavLink>
          <NavLink activeClassName="active" to="/admin/quan-ly-phim">
            <ListItem
              button
              onClick={() => {
                handleCloseSidebar();
              }}
            >
              <ListItemIcon>
                <MovieCreation />
              </ListItemIcon>
              <ListItemText primary="Phim" />
            </ListItem>
          </NavLink>
          <ListItem
            button
            onClick={() => {
              handlelogout();
            }}
          >
            <ListItemText primary="Đăng Xuất" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
