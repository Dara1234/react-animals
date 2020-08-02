import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomDogImage from "./Dogs/RandomDogImage";
import RandomCatFact from "./Cats/RandomCatFact";
import "./App.css";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

const Timer = styled.div``;

function App() {
  const [timer, setTimer] = React.useState(30);

  React.useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer -1);
      console.log(timer);
      }, 1000);      
    }
    else {setTimer(30);
      }
    }, [timer]);

  return (
    <MainContainer>
      <Header />
      <Timer> Counter {timer} seconds</Timer>
      <Router>
        <HomePage path="/" timer={timer} />
        <RandomCatImage path="/randomCat" timer={timer} />
        <RandomDogImage path="/randomDog" timer={timer} />
        <RandomCatFact path="/catFacts" timer={timer} />
      </Router>
    </MainContainer>
  );
}

export default App;
