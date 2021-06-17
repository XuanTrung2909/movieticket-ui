import React from "react";
import Container from "@material-ui/core/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MovieList from "../MovieList/MovieList";

export default function ShowMovie(props) {
  const { movieList } = props;
  

  return (
    <Container maxWidth="lg">
      <div className="quick_booking"></div>
      <div className="show_movie_list">
        <Tabs>
          <TabList className="tab_title">
            <Tab selectedClassName="active">Đang Chiếu</Tab>
            <Tab selectedClassName="active">Sắp Chiếu</Tab>
          </TabList>
          <TabPanel>
            <MovieList movieList={movieList} />
          </TabPanel>
          <TabPanel>
            <MovieList movieList={movieList} />
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
}
