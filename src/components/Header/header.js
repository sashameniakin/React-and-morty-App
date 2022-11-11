import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>React and Morty App</h1>
      </StyledHeader>
      <StyledDiv></StyledDiv>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #ffe2fe;
  position: fixed;
  width: 100%;

  h1 {
    margin: 10px;
    color: grey;
  }
`;

const StyledDiv = styled.div`
  padding-top: 15%;
`;
