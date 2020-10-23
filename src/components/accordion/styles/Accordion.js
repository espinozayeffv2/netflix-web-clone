import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  margin: auto;
  padding: 70px 45px;
  max-width: 815px;
  flex-direction: column;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 1px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: normal;
  background: #303030;
  user-select: none;
  justify-content: space-between;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.6rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8rem 2.2rem 0.8rem 1.2rem;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 3.1rem;
  color: #fff;
  text-align: center;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
