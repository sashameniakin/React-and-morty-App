import styled from "styled-components";
import NavElement from "./NavElement/NavElement";
import Bookmark from "../../images/bookmark.svg";
import Home from "../../images/home.svg";
import Random from "../../images/random.svg";

export default function Navigation() {
  return (
    <>
      <StyledDiv></StyledDiv>
      <StyledList>
        <NavElement path={Home} value="/" color="#D3C1D2" />
        <NavElement path={Random} value="random" color="#C3B5C3" />
        <NavElement path={Bookmark} value="bookmark" color="#B3A9B4" />
        <NavElement /* value="detailed" */ color="#E9D2E8" />
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0.7;
`;

const StyledDiv = styled.div`
  margin-bottom: 20%;
`;

/* const StyledHome = styled(Home)`
  width: 50px;
  height: 50px;
`; */
