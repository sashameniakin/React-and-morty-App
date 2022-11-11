import styled from "styled-components";
import NavElement from "./NavElement/NavElement";

export default function Navigation() {
  return (
    <StyledList>
      <NavElement value="Home" color="#D3C1D2" />
      <NavElement value="Rick" color="#C3B5C3" />
      <NavElement value="Morty" color="#B3A9B4" />
      <NavElement value="Settings" color="#E9D2E8" />
    </StyledList>
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
`;
