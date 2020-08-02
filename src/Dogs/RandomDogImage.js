// https://dog.ceo/dog-api/
//https://dog.ceo/api/breeds/image/random
import React from "react";
import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

function RandomDogImage(props) {
    const [dogImageUrl, setDogImageUrl] = React.useState(null);
    
    React.useEffect(() => {
      if (props.timer <= 0 || dogImageUrl == null){
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setDogImageUrl(data.message);
            console.log(data.message);
          });
      }
    }, [props.timer, dogImageUrl]);

    if (dogImageUrl == null) return <div> Loading </div>;

    return (
        <MainContainer>
            <Image src={dogImageUrl} />
        </MainContainer>
    );
}

export default RandomDogImage;