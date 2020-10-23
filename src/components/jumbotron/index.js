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

Jumbotron.Container = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...props }) => <Pane {...props}>{children}</Pane>;

Jumbotron.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...props }) => (
  <SubTitle {...props}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...props }) => <Image {...props} />;
