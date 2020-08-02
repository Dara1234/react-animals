import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact(props) {
  const [catText, setCatText] = React.useState(null);

  React.useEffect(() => {
  if (props.timer <= 0 || catText == null){
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const facts = data.all;
        setCatText(facts[Math.floor(Math.random() * facts.length)].text);
      });
  }
}, [props.timer, catText]);

  if (catText == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <h1>{catText}</h1>
    </MainContainer>
  )
}

export default RandomCatFact;
