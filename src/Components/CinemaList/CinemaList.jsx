import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Grid } from "@material-ui/core";
import EventIcon from '@material-ui/icons/Event';
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function CinemaList(props) {
  const { cinemaList } = props;
  const renderCinemaSytem = () => {
    return cinemaList?.map((cinemaSystemItem, index) => {
      return (
        <Fragment key={index}>
          <Tab className="cinema_system_tab" selectedClassName="active">
            <Button>
              <img
                src={cinemaSystemItem.logo}
                alt={cinemaSystemItem.tenHeThongRap}
              />
            </Button>
          </Tab>
        </Fragment>
      );
    });
  };
  const renderCinemaGroup = () => {
    return cinemaList?.map((cinemaSystemItem, i) => {
      return (
        <Fragment key={i}>
          <TabPanel className='cinema_system_tabpanel'>
            <Tabs className='cinema_tabs'>
              <Grid container spacing={0}>
                <Grid item sm={3}>
                  <TabList className="cinema_tablist">
                    {renderCinema(cinemaSystemItem.lstCumRap)}
                  </TabList>
                </Grid>
                <Grid item sm={9}>
                  {renderCinemaContent(cinemaSystemItem.lstCumRap)}
                </Grid>
              </Grid>
            </Tabs>
          </TabPanel>
        </Fragment>
      );
    });
  };
  const renderCinema = (arr) => {
    return arr?.map((cinemaItem, index) => {
      return (
        <Fragment key={index}>
          <Tab className="cinema_tab" selectedClassName="active">
            <Grid container spacing={1}>
              <Grid item sm={3}>
                <img
                  src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-discovery-16105949126342.png"
                  alt="logo"
                />
              </Grid>
              <Grid item sm={9}>
                <h2>{cinemaItem.tenCumRap}</h2>
                <p>{cinemaItem.diaChi}</p>
              </Grid>
            </Grid>
          </Tab>
        </Fragment>
      );
    });
  };
  const renderCinemaContent = (arr) => {
    return arr?.map((arrItem, index) => {
      return (
        <TabPanel key={index} className="cinema_tabpanel">
          {arrItem.danhSachPhim.map((phim, j) => {
            return (
              <Fragment key = {j}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container spacing={1}>
                      <Grid item sm={1}>
                        <img src={phim.hinhAnh} alt={phim.tenPhim} />
                      </Grid>
                      <Grid item sm={11}>
                        <h2>{phim.tenPhim}</h2>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails className='show_time'>
                    {phim.lstLichChieuTheoPhim.map((lichChieu, k) => {
                      return <p key = {k}> <EventIcon /> {lichChieu.ngayChieuGioChieu.slice(-5)}</p>;
                    })}
                  </AccordionDetails>
                </Accordion>
              </Fragment>
            );
          })}
        </TabPanel>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <Tabs className="cinema_system_tabs">
        <Grid container spacing={0}>
          <Grid item sm={1} component="div">
            <TabList className="cinema_system_tablist">
              {renderCinemaSytem()}
            </TabList>
          </Grid>
          <Grid item sm={11}>
            {renderCinemaGroup()}
          </Grid>
        </Grid>
      </Tabs>
    </Container>
  );
}
