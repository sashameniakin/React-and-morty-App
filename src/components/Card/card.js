import styled from "styled-components";

export default function Card() {
  return (
    <StyledArticle>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Rick and Morty"
        width="200px"
        height="200px"
      ></img>
      <h2>Morty Smith</h2>
      <StyledButton>Show more</StyledButton>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  flex-direction: column;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border-color: pink;
  padding: 20px;
  :hover {
    background-color: lightgrey;
  }
`;
