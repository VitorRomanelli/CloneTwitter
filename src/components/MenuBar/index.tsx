import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  TextIcon,
  BotSide,
  Avatar,
  Profile,
  ProfileData,
  ExitIcon,
  HashTagIcon,
  ItemIcon,
  ListIcon,
  MoreIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton className="active">
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>

        <MenuButton>
          <HashTagIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <ItemIcon />
          <span>Itens Salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <TextIcon />
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Profile>
          <Avatar />
          <ProfileData>
            <strong> Vitor </strong>
            <span> @VitorHVR </span>
          </ProfileData>
          <ExitIcon />
        </Profile>
      </BotSide>
    </Container>
  );
};

export default MenuBar;
