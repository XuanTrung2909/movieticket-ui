import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Fragment } from "react";
import { Divider } from "@material-ui/core";

export default function CinemaList(props) {
  const { cinemaSystemList } = props;

  const renderCinemaSytemList = () => {
    return cinemaSystemList.map((cinemaSystemItem, index) => {
      return (
        <Fragment key={index}>
          <Tab
            
            className="cinema_system_tab"
            selectedClassName="active"
          >
            <Button>
              <img
                src={cinemaSystemItem.logo}
                alt={cinemaSystemItem.tenHeThongRap}
              />
              
            </Button>
            
          </Tab>
          <Divider className='hr'/>
        </Fragment>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <Tabs className="cinema_system_tabs">
        <Grid container spacing={0}>
          <Grid item sm={1} component="div">
            <TabList className="cinema_system_tablist">
              {renderCinemaSytemList()}
            </TabList>
          </Grid>
          <Grid item sm={11}>
            <TabPanel>
              <Tabs>
                <Grid container spacing={0}>
                  <Grid item sm={4}>
                    <TabList>
                      <Tab>Title 1.1</Tab>
                      <Tab>Title 1.2</Tab>
                    </TabList>
                  </Grid>
                  <Grid item sm={8}>
                    <TabPanel>content 1.1</TabPanel>
                    <TabPanel>content 1.2</TabPanel>
                  </Grid>
                </Grid>
              </Tabs>
            </TabPanel>
            <TabPanel>content 2</TabPanel>
          </Grid>
        </Grid>
      </Tabs>
    </Container>
  );
}
