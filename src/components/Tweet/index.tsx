import React from 'react';

import { 
  Container, 
  Retweeted,
  Icon, 
  Body, 
  Avatar, 
  Content,
  Header, 
  Dot, 
  Dots,
  Description,
  ImageContent,
  Icons,
  Status,
  LikeIcon,
  ComentIcon,
  RetweetIcon,
  DownloadIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <Icon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>GitHub</strong>
            <span>@github</span>
            
            <Dot />

            <time>27 de jun</time>

            <Dots />
          </Header>

          <Description> New Feature </Description>

          <ImageContent />

          <Icons>
            <Status>
              <ComentIcon />
              999
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              18
            </Status>
            <Status>
              <DownloadIcon />
            </Status>
          </Icons>

        </Content>

      </Body>
    </Container>
  );
};

export default Tweet;
