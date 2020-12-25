import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon,
  CalendarIcon, 
  Followage,
  EditButton
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Vitor</h1>
        <h2>@VitorHVR</h2>

        <p>
          Developing Something
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>

          <li>
            <CalendarIcon />
            Ingressou em outubro de 2020
          </li>
        </ul>

        <Followage>
          <span>
            <strong>42 </strong> Seguindo 
          </span>

          <span>
            <strong>28 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
