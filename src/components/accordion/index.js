import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/Accordion';

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
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleItem, setToggleItem } = useContext(ToggleContext);

  return (
    <Header
      // eslint-disable-next-line no-shadow
      onClick={() => setToggleItem((toggleItem) => !toggleItem)}
      {...props}
    >
      {children}
      {toggleItem ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleItem } = useContext(ToggleContext);

  return toggleItem ? <Body {...props}>{children}</Body> : null;
};
