import styled from 'styled-components/macro';

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`;

export const Inner = styled.div`
	margin: auto;
	width: 100%;
	max-width: 1100px;
	display: flex;
	flex-direction: ${({ direction }) => direction };
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1000px){
		flex-direction: column;
	}
`
export const Container = styled.div``;

export const Pane = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		padding: 0 45px;
		width: 100%;
		text-align: center;
	}
`

export const Title = styled.h1`
	margin-bottom: 8px;
	font-size: 3.1rem;
	line-height: 1.1;

	@media (max-width: 600px) {
		font-size: 2.8rem;
	}
`;

export const SubTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 1.1rem;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;