import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/Footer';

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Footer.Row = ({ children, ...props }) => <Row {...props}>{children}</Row>;

Footer.Column = ({ children, ...props }) => (
  <Column {...props}>{children}</Column>
);

Footer.Link = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);

Footer.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

Footer.Text = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

Footer.Break = ({ children, ...props }) => (
  <Break {...props}>{children}</Break>
);
