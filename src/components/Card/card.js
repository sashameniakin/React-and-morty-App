import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Card({ id, src, name }) {
  const navigate = useNavigate();

  function navigateDetails(data) {
    navigate("/detailed", { state: { data: data } });
  }

  return (
    <StyledArticle>
      <img src={src} alt={name} width="200px" height="200px"></img>
      <h2>{name}</h2>
      <StyledButton onClick={() => navigateDetails({ id })}>
        Show more
      </StyledButton>
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
  :hover {
    background-color: lightgrey;
  }
`;
