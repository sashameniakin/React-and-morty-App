import styled from "styled-components";

export default function NavElement({ value, color }) {
  return (
    <>
      <StyledLi color={color}>{value}</StyledLi>
    </>
  );
}

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
