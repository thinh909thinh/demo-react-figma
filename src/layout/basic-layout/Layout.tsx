import { Container, LinearProgress } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { DashBoardProps } from 'lib/interfaces';
import Header from 'components/header/Header';
import FooterPage from 'components/footer-page/FooterPage';

import Login from 'pages/auth/Login';
import { Link } from 'react-router-dom';

const Layout: React.FC<DashBoardProps> = ({ route }) => {
    // TODO: force user to login
    // const [token, setToken] = useState();

    // if (!token) {
    //   return <Login />
    // }

    return (
        <Container maxWidth="lg">
            <Suspense fallback={<LinearProgress />}>
                <Header />
                {renderRoutes(route?.routes)}
                <FooterPage />
            </Suspense>
        </Container>
    );
};

export default Layout;
