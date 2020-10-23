import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Title, Frame, Item, Header } from './styles/Accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...props }) {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);

Accordion.Frame = ({ children, ...props }) => (
  <Frame {...props}>{children}</Frame>
);

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleItem, setToggleItem] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleItem, setToggleItem }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>;
  );
};

Accordion.Header = ({ children, ...props }) => {
  const { toggleItem, setToggleItem } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleItem((toggleItem) => !toggleItem)} {...props}>
      {children}
    </Header>
  );
};

Accordion.Body = ({ children, ...props}) => {
  const { toggleItem } = useContext(ToggleContext);

  return toggleItem ? <Body {....props}>{children}</Body> : null;
}
