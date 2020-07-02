import React from "react";
import "./App.css";
import { LoginScreen } from "./pages/login";
import { Header } from "./components/Header.component";

function App() {
  const login = "";
  return (
    <>
      <Header title={"Welcome to BILAZONE"} username={login}></Header>
      <LoginScreen></LoginScreen>
    </>
  );
}

export default App;
