import React from 'react';
import { Accordion } from '../components';
import { Item } from '../components/accordion/styles/Accordion';
import faqsData from '../fixtures/faqs.json';

export const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqsData.map((x) => (
      <Accordion.Item key={x.id}>
        <Accordion.Header>{x.header}</Accordion.Header>
        <Accordion.Body>{x.body}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);
