import React from 'react';
import { AppBar, Grid, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Profile() {
  return (
    <div className='profile'>
        <AppBar color = 'default' clas>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item className='logo'>
              <Link to='/'>
                <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo" />
              </Link>
            </Grid>
            <Hidden xsDown>
              <h2>Thông Tin Tài Khoản</h2>
            </Hidden>
            <Grid item>
              <IconButton>
                <ExitToAppIcon fontSize='large'/>
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
    </div>
  )
}
