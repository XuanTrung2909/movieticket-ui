import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";
import { SupervisorAccount, MovieCreation } from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../../../Ulti/setting";
export default function Sidebar() {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  return (
    <div className="sidebar">
      <div className="info">
        <Avatar src="https://i.pravatar.cc/150?u=trung.nx" className="avatar" />
        <h2>{userLogin?.taiKhoan}</h2>
        
      </div>
      <Divider />
      <List>
        <NavLink activeClassName="active" to="/admin/quan-ly-tai-khoan">
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText primary="Tài Khoản" />
          </ListItem>
        </NavLink>
        <NavLink activeClassName='active' to='/admin/quan-ly-phim'>
          <ListItem button>
            <ListItemIcon>
              <MovieCreation />
            </ListItemIcon>
            <ListItemText primary="Phim" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}
