import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  Toolbar,
  Chip,
  Avatar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ACCESSTOKEN, USER_LOGIN } from "../../Ulti/setting";

export default function Header(props) {
  const { userName } = useSelector((state) => state.AuthReducer);
  const history = useHistory();

  const [checkMenu, setCheckMenu] = useState(false);
  const handleOpenMenu = () => {
    setCheckMenu(true);
  };
  const handleCloseMenu = () => {
    setCheckMenu(false);
  };
  const handleDeleteUserCurrent = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESSTOKEN);
    history.push("/");
    window.location.reload();
  };
  const handlScrollIntoId = (id) => {
    if (history.location.pathname !== "/") {
      history.push(`/?scrollTo=homePage`);
      history.location.key = id;
    }
    return document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };
  const handlScrollIntoIdMobile = (id) => {
    handlScrollIntoId(id);
    setCheckMenu(false);
  };
  return (
    <div className="header">
      <AppBar position="fixed" color="default">
        <Toolbar className="justify">
          <div className="logo">
            <Link className="link" to="/">
              <img
                src="https://tix.vn/app/assets/img/icons/web-logo.png"
                alt="Tix-logo"
              />
            </Link>
          </div>
          <Hidden smDown>
            <List className="nav">
              <li
                className="link"
                onClick={() => handlScrollIntoId("show_movie")}
              >
                Lịch Chiếu
              </li>
              <li className="link" onClick={() => handlScrollIntoId("cinema")}>
                Cụm Rạp
              </li>
              <li className="link" onClick={() => handlScrollIntoId("news")}>
                Tin Tức
              </li>
              <li className="link" onClick={() => handlScrollIntoId("ads")}>
                Ứng Dụng
              </li>
            </List>
          </Hidden>
          <Hidden smDown>
            {userName.trim() !== "" ? (
              <List className="signed">
                <Link to={`/thong-tin-tai-khoan/${userName}`} className="link">
                  <Button>
                    <Chip
                      label={userName}
                      avatar={
                        <Avatar
                          className="avatar"
                          src="https://i.pravatar.cc/150?u=trung.nx"
                        ></Avatar>
                      }
                      className="chip"
                    ></Chip>
                  </Button>
                </Link>
                <Button onClick={handleDeleteUserCurrent}>Đăng Xuất</Button>
              </List>
            ) : (
              <List className="header_sign">
                <Link className="link" to="/dang-nhap">
                  <Button>Đăng Nhập</Button>
                </Link>
                <Link className="link" to="/dang-ky">
                  <Button>Đăng Ký</Button>
                </Link>
              </List>
            )}
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={handleOpenMenu}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className="menu_mobile"
        anchor="right"
        open={checkMenu}
        classes={{
          paperAnchorRight: "paper",
        }}
        onClose={handleCloseMenu}
      >
        <List className="sign_mobile">
          {userName.trim() !== "" ? (
            <List className="signed_mobile">
              <Link to={`/thong-tin-tai-khoan/${userName}`} className="link">
                <Button>
                  <Chip
                    label={userName}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://i.pravatar.cc/150?u=trung.nx"
                      ></Avatar>
                    }
                    className="chip"
                  ></Chip>
                </Button>
              </Link>
              <Button onClick={handleDeleteUserCurrent}>Đăng Xuất</Button>
            </List>
          ) : (
            <List className="sign_mobile">
              <Link className="link" to="/dang-nhap">
                <Button>Đăng Nhập</Button>
              </Link>
              <Link className="link" to="/dang-ky">
                <Button>Đăng Ký</Button>
              </Link>
            </List>
          )}
        </List>
        <Divider />
        <List className="nav_mobile">
          <li
            className="link"
            onClick={() => handlScrollIntoIdMobile("show_movie")}
          >
            Lịch Chiếu
          </li>
          <li
            className="link"
            onClick={() => handlScrollIntoIdMobile("cinema")}
          >
            Cụm Rạp
          </li>
          <li className="link" onClick={() => handlScrollIntoIdMobile("news")}>
            Tin Tức
          </li>
          <li className="link" onClick={() => handlScrollIntoIdMobile("ads")}>
            Ứng dụng
          </li>
        </List>
      </Drawer>
    </div>
  );
}
