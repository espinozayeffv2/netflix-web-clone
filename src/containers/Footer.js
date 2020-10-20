import React from 'react';
import { Footer } from '../components';

const links = {
  first: [
    'FAQ',
    'Investor Relations',
    'Ways to watch',
    'Corporate Informacion',
    'Netflix Originals',
  ],
  second: ['Help Center', 'Jobs', 'Terms of Use', 'Contact Us'],
  third: ['Account', 'Redeem Gift', 'Privacy', 'Speed Test'],
  fourth: ['Media Center', 'Buy Gift', 'Cookie Preferences', 'Legal Notices'],
};

const generateColumnLinks = (texts) =>
  texts.map((x) => <Footer.Link href="#">{x}</Footer.Link>);

export const FooterContainer = () => (
  <Footer>
    <Footer.Title>Questions? Contact us.</Footer.Title>
    <Footer.Break />
    <Footer.Row>
      <Footer.Column>{generateColumnLinks(links.first)}</Footer.Column>
      <Footer.Column>{generateColumnLinks(links.second)}</Footer.Column>
      <Footer.Column>{generateColumnLinks(links.third)}</Footer.Column>
      <Footer.Column>{generateColumnLinks(links.fourth)}</Footer.Column>
    </Footer.Row>
    <Footer.Break />
    <Footer.Text>Netflix Colombia</Footer.Text>
  </Footer>
);
