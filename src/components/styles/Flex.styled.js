import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  p {
    margin-bottom: 15px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;