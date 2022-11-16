import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavElement({ value, color, path }) {
  return (
    <>
      <StyledLiLi to={value} color={color}>
        {/*  {value}
        path */}
        <img alt={value} src={path} width="50px" height="50px"></img>
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
