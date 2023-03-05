import React from "react";

import { Title, Paragrafo } from "./style";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Este é o small de login</small>
      </Title>
      <Paragrafo>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
      </Paragrafo>
    </Container>
  );
}
