import styled from "styled-components";
import Card from "./components/Card/card";

export default function Cards({ rickAndMorty }) {
  return (
    <StyledUl>
      {rickAndMorty.map((person) => (
        <li key={person.id}>
          <Card src={person.image} name={person.name} />
        </li>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
`;
