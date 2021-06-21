import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Grid } from "@material-ui/core";
import { Button, Divider, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function CinemaList(props) {
  const { cinemaList } = props;
  console.log(cinemaList);
  const renderCinemaSytem = () => {
    return cinemaList.map((cinemaSystemItem, index) => {
      return (
        <Fragment key={index}>
          <Tab className="cinema_system_tab" selectedClassName='active'>
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
    return cinemaList.map((cinemaSystemItem, i) => {
      return <Fragment key={i}>
        <TabPanel>
          <Tabs>
            <Grid container spacing={0}>
              <Grid item sm={3}>
                <TabList className='cinema_system_tablist'>
                  {renderCinema(cinemaSystemItem.lstCumRap)}
                </TabList>
              </Grid>
              <Grid item sm={9}>
                {renderCinemaContent(cinemaSystemItem.lstCumRap)}
              </Grid>
            </Grid>
          </Tabs>
        </TabPanel>
      </Fragment>;
    });
  };
  const renderCinema = (arr) => {
    return arr.map((cinemaItem, index) => {
      return (
        <Fragment key={index}>
          <Tab className='cinema_tab'>
            <h2>{cinemaItem.tenCumRap}</h2>
            <p>{cinemaItem.diaChi}</p>
          </Tab>
        </Fragment>
      )
    })
  }
  const renderCinemaContent = (arr) => {
    return arr.map((arrItem,index) => {
      return (
        <TabPanel key = {index}>
          {arrItem.danhSachPhim.map((phim, j) => {
            return (
              <Fragment>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h2>{phim.tenPhim}</h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    {phim.lstLichChieuTheoPhim.map((lichChieu, k) => {
                      return <p>{lichChieu.ngayChieuGioChieu.slice(-5)}</p>
                      
                    })}
                  </AccordionDetails>
                </Accordion>
              </Fragment>
            )
          })}
        </TabPanel>
      )
    })
  }

  return (
    <Container maxWidth="lg">
      <Tabs className="cinema_system_tabs">
        <Grid container spacing={0}>
          <Grid item md={1} component="div">
            <TabList className="cinema_system_tablist">
              {renderCinemaSytem()}
            </TabList>
          </Grid>
          <Grid item md={11}>
            {renderCinemaGroup()}
          </Grid>
        </Grid>
      </Tabs>
    </Container>
  );
}
