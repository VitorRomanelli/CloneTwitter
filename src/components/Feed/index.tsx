import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>
       <h3>Tweets</h3>
       <h3>Tweets e Respostas</h3>
       <h3>Mídia</h3>
       <h3>Curtidas</h3> 
      </Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
