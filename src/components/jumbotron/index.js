import React from 'react';
import {
  Item,
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/Jumbotron';

export default function Jumbotron({ children, direction = 'row' }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = ({ children, ...resProps }) => (
  <Container {...resProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...resProps }) => <Pane {...resProps}>{children}</Pane>;

Jumbotron.Title = ({ children, ...resProps }) => (
  <Title {...resProps}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...resProps }) => (
  <SubTitle {...resProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...resProps }) => <Image {...resProps} />;
