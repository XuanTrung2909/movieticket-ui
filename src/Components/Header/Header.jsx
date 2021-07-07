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
  Popover,
  ListItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ACCESSTOKEN, USER_LOGIN } from "../../Ulti/setting";

export default function Header(props) {
  const { userName } = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
            {localStorage.getItem(ACCESSTOKEN) ? (
              <List className="signed">
                <Button onClick={handleClick}>
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
          {localStorage.getItem(ACCESSTOKEN) ? (
            <List className="signed_mobile">
              <Button onClick={handleClick}>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className="popover"
      >
        <List>
          <ListItem button onClick={() => {
            handleCloseMenu();
            handleClose();
          }}>
            <Link className="link" to={`/thong-tin-tai-khoan/${userName}`}>
              Thông tin tài khoản
            </Link>
          </ListItem>
          {userLogin?.maLoaiNguoiDung === "QuanTri" ? (
            <ListItem button onClick={() => {
              handleCloseMenu();
              handleClose();
            }}>
              <Link className="link" to="/admin">
                Admin Manager
              </Link>
            </ListItem>
          ) : null}
          <ListItem button onClick={handleDeleteUserCurrent}>
            Đăng Xuất
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
