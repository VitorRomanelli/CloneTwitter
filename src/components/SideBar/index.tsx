import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Vitor Romanelli" nickname="@Vitor" />,
            <FollowSuggestion name="Programador" nickname="@prog" />,
            <FollowSuggestion name="GitHub" nickname="@github" />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
