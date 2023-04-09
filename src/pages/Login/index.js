import React from 'react';

import { Title, Paragrafo } from './style';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/alunos');
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Title isRed>
        Login
        <small>Este é o small de login</small>
      </Title>
      <Paragrafo>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
