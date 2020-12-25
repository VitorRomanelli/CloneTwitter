import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    text-align: center;

    font-weight: bold;
    font-size: 14px;

    white-space: nowrap;

    outline: 0;
    cursor: pointer;

    color: var(--twitter);
    
    border-bottom: 1px solid var(--twitter);

    :hover {
      background: var(--twitter-dark-hover);
    }
  }
  
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Tweet = styled.div`

`;