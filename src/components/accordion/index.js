import React, { useState } from 'react';
import { Container, Inner, Title, Frame, Item, Header } from './styles/Accordion';

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Frame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleItem, setToggleItem] = useState(false);

  return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = ({ children, ...restProps }) => (
  <Header {...restProps}>{children}</Header>
);
