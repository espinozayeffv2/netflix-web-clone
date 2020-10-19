import React from 'react';
import { Item, Container, Inner, Pane, Title, SubTitle, Image } from './styles/Jumbotron';

export default function Jumbotron({ children, direction = 'row', ...rest}) {
	return (
		<Item>
			<Inner direction={direction}>
				{children}
			</Inner>
		</Item>
	);
}

Jumbotron.Container = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

Jumbotron.Pane = ({ children, ...rest }) => <Pane {...rest}>{children}</Pane>;

Jumbotron.Title = ({ children, ...rest }) => <Title {...rest}>{children}</Title>;

Jumbotron.SubTitle = ({ children, ...rest }) => <SubTitle {...rest}>{children}</SubTitle>;

Jumbotron.Image = ({ ...rest }) => <Image {...rest} />;
