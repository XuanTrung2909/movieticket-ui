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
  
} from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { userName } = useSelector((state) => state.AuthReducer);

  const [checkMenu, setCheckMenu] = useState(false);
  const handleOpenMenu = () => {
    setCheckMenu(true);
  };
  const handleCloseMenu = () => {
    setCheckMenu(false);
  };
  return (
    <div className="header">
      <AppBar position="fixed" color="default">
        <Toolbar className="justify">
          <div className="logo">
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="Tix-logo"
            />
          </div>
          <Hidden smDown>
            <List className="nav">
              <Link className="link">Lịch Chiếu</Link>
              <Link className="link">Cụm Rạp</Link>
              <Link className="link">Tin Tức</Link>
              <Link className="link">Ứng Dụng</Link>
            </List>
          </Hidden>
          <Hidden smDown>
            {userName.trim() !== "" ? (
              <List>
                <Link to="/profile">
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={userName}
                    icon={<FaceIcon />}
                  />
                </Link>

                <Link>
                  <Chip
                    variant="outlined"
                    color="secondary"
                    label="Đăng xuất"
                    // onClick={handleDelete}
                  />
                </Link>
              </List>
            ) : (
              <List className="sign">
                <Link className="link" to="/login">
                  <Button>Đăng Nhập</Button>
                </Link>
                <Link className="link" to="/sign-up">
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
          <Link className="link">
            <Button>Đăng Nhập</Button>
          </Link>
          <Link className="link">
            <Button>Đăng Ký</Button>
          </Link>
        </List>
        <Divider />
        <List className="nav_mobile">
          <Link className="link" onClick={handleCloseMenu}>
            Lịch Chiếu
          </Link>
          <Link className="link" onClick={handleCloseMenu}>
            Cụm Rạp
          </Link>
          <Link className="link" onClick={handleCloseMenu}>
            Tin Tức
          </Link>
          <Link className="link" onClick={handleCloseMenu}>
            Lịch Chiếu
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
