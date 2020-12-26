import React from 'react';
import Main from "../Main";

import MenuBar from "../MenuBar";
import SideBar from "../SideBar";

import { Container } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <MenuBar />
            <Main />
            <SideBar />
        </Container>
    );
};

export default Layout;