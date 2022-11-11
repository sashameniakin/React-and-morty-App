import styled from "styled-components";

export default function Card({ src, alt, name }) {
  return (
    <StyledArticle>
      <img src={src} alt={name} width="200px" height="200px"></img>
      <h2>{name}</h2>
      <StyledButton>Show more</StyledButton>
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
  box-shadow: 10px 10px hotpink;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border-color: pink;
  padding: 20px;
  :hover {
    background-color: lightgrey;
  }
`;
