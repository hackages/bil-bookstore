import React from "react";
import "./App.css";
import { LoginScreen } from "./pages/login";
import { Header } from "./components/Header.component";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import { DashboardScreen, BookStore } from "./pages";
import { BookDetails } from "./pages/BookDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title={""} username={""}></Header>
        <Switch>
          <Route path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route path="/dashboard">
            <DashboardScreen></DashboardScreen>
          </Route>
          <Route path="/books" exact="full">
            <BookStore></BookStore>
          </Route>
          <Route
            path="/books/:bookId"
            component={(props) => {
              const {
                match: { params },
              } = props;
              return <BookDetails bookId={params.bookId}></BookDetails>;
            }}
          ></Route>
          <Redirect path="/" to="/dashboard"></Redirect>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
