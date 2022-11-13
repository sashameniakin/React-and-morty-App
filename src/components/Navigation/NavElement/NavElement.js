import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavElement({ value, color }) {
  /*  function navigateTo(value) {
    navigate(value);
  } */

  return (
    <>
      <StyledLiLi to={value} color={color}>
        {value}
      </StyledLiLi>
    </>
  );
}

const StyledLiLi = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
