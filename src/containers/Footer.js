import React from 'react';
import { Footer } from '../components';

const links = [
  [
    'FAQ',
    'Investor Relations',
    'Ways to watch',
    'Corporate Informacion',
    'Netflix Originals',
  ],
  ['Help Center', 'Jobs', 'Terms of Use', 'Contact Us'],
  ['Account', 'Redeem Gift', 'Privacy', 'Speed Test'],
  ['Media Center', 'Buy Gift', 'Cookie Preferences', 'Legal Notices'],
];

const generateColumnLinks = (columns) =>
  columns.map((column) => (
    <Footer.Column>
      {column.map((link, index) => (
        <Footer.Link key={index} href="#">
          {link}
        </Footer.Link>
      ))}
    </Footer.Column>
  ));

export const FooterContainer = () => (
  <Footer>
    <Footer.Title>Questions? Contact us.</Footer.Title>
    <Footer.Break />
    <Footer.Row>{generateColumnLinks(links)}</Footer.Row>
    <Footer.Break />
    <Footer.Text>Netflix Colombia</Footer.Text>
  </Footer>
);
