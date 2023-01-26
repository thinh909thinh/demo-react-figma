import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import "./about.css";
import { Slogan } from './components/business-slogan';
import { Vision } from './components/section-visions';
import { ButtonOnTop } from '../../components/show-button-on-top';
import { ProfessionalTeams } from './components/professional-teams';
import { Slide } from './components/Slide';
import { Video } from './components/Video';
import { Footer } from '../../components';
const AboutPage = () => {
    return (
        <>
            <Video />
            <ProfessionalTeams />
            <Slogan />
            <ButtonOnTop />
            <Vision />
            <Slide />
        </>
    );
};
export default AboutPage;
