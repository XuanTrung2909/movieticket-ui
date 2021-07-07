import React from "react";
import { Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../Ulti/setting";
import HeaderAdmin from "../../Components/Admin/HeaderAdmin/HeaderAdmin";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import { Route } from "react-router";
import { Fragment } from "react";

export default function AdminTemplate(props) {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  if (userLogin?.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <HeaderAdmin />
      <Grid container>
        <Grid item md={3} lg={2} className='sidebar'>
          <Sidebar />
        </Grid>
        <Grid item md={9} xs={12} lg={10}>
          <Route
            path={props.path}
            exact
            render={(propsRoute) => {
              return (
                <Fragment>
                  <props.component {...propsRoute} />
                </Fragment>
              );
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
