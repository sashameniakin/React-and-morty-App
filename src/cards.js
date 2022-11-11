import styled from "styled-components";
import Card from "./components/Card/card";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Details from "./pages/detailed";

export default function Cards({ rickAndMorty }) {
  return (
    <StyledUl>
      {rickAndMorty.map((person) => (
        <li key={person.id}>
          <Card id={person.id} src={person.image} name={person.name} />
        </li>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
`;
