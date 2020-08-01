import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Timer = styled.div``;

// https://docs.thecatapi.com/

function RandomCatImage(props) {
  const [catImageUrl, setCatImageUrl] = React.useState(null);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer -1);
      console.log(timer);
      }, 1000);      
    }
    else {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCatImageUrl(data[0].url);
        });
        setTimer(30);
      }
    }, [catImageUrl, timer]);
  if (catImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Timer> New cat image will appear in {timer} seconds</Timer>
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;
