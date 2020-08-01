import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact() {
  const [catTextUrl, setCatTextUrl] = React.useState(null);

  React.useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const facts = data.all;
      const randomFact = facts[Math.floor(Math.random() * facts.length)].text;
      setCatTextUrl(randomFact);
    });
}, [])


  if (catTextUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <h1>{catTextUrl}</h1>
    </MainContainer>
  )
}

export default RandomCatFact;
