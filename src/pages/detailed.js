import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Details({ rickAndMorty, onToggleBookmark }) {
  const location = useLocation();
  const ID = location.state.data.id;
  const [isVisible, setIsVisible] = useState();

  const cardDetail = rickAndMorty.filter((person) => {
    return person.id === location.state.data.id;
  });

  function showDiv(value) {
    setIsVisible(!value);
  }

  return (
    <StyledArticle>
      <StyledDiv onClick={onToggleBookmark}></StyledDiv>
      <h1>Detailed</h1>
      <img
        src={cardDetail[0].image}
        alt={cardDetail[0].name}
        width="200px"
        height="200px"
      ></img>
      <h2>{cardDetail[0].name}</h2>
      <div>Gender: {cardDetail[0].gender}</div>
      <div>Species: {cardDetail[0].species}</div>
      <div>Status: {cardDetail[0].status}</div>
      <div>Location: {cardDetail[0].location.name}</div>
      <StyledButton onClick={() => showDiv(isVisible)}>Show more</StyledButton>
      {isVisible && (
        <>
          <div>Gender: {cardDetail[0].gender}</div>
          <div>Species: {cardDetail[0].species}</div>
        </>
      )}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
  background-color: aliceblue;

  margin: 40px 200px 40px 200px;
  border-radius: 26px;
  border: 2px solid hotpink;
  box-shadow: 0 10px 10px hotpink;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border-color: pink;
  padding: 20px;
  margin: 10px;
  :hover {
    background-color: lightgrey;
  }
`;

const StyledDiv = styled.div`
  border-radius: 100%;
  background-color: lightgray;
  width: 50px;
  height: 50px;
`;
