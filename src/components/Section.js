import React from "react";
import Styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({ title, backImg, lefBut, rigBut, desc }) {
  return (
    <Wrap bgImage={backImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>

        <Button>
          <ButtonGroup>
            <LeftButton>{lefBut}</LeftButton>
            {rigBut && <RightButton>{rigBut}</RightButton>}
          </ButtonGroup>
          <DownArrow
            src="images/down-arrow.svg"
            width="10"
            height="10"
          ></DownArrow>
        </Button>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = Styled.div`
height: 100vh;
background-size: cover;
background-position: center;
background-image: url("images/model-3.jpg");
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = Styled.div`
    padding-top: 17vh;
`;
const ButtonGroup = Styled.div`
    display: flex;
    margin-bottom: 60px;
    @media (max-width: 640px) {
        flex-direction: column;
    }
    font-family: "Rubik", sans-serif;
`;
const LeftButton = Styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;\
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 10px;
    cursor: pointer;
`;
const RightButton = Styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`;
const DownArrow = Styled.img`
height: 15px;
width: 15px;
margin-bottom: 25px;
animation: animateDown infinite 1.5s;
`;

const Button = Styled.div``;
