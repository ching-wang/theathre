import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MainPage from "../MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import ShowDetail from "../ShowDetail/ShowDetail";
import EpisodeDetail from "../EpisodePreview/EpisodeDetail";
import { Container } from "./app.styles";

function App() {
  return (
    <ErrorBoundary>
        <Container>
            <Header />
            <Switch>
                <Route path="/show/:showId/season/:seasonId/episodes/:episodeId">
                    <EpisodeDetail />
                </Route>
                <Route path="/show/:showId">
                    <ShowDetail />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Container>
    </ErrorBoundary>
  );
}

export default App;
