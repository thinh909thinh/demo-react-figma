import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import ContactUs from './components/contact-us/ContactUs';
import GetInTouch from './components/get-in-touch/GetInTouch';
import { ButtonOnTop } from '../../components/show-button-on-top';

const ContactPage = () => {
    return (
        <>
            <ContactUs />
            <ButtonOnTop />
            <GetInTouch />
        </>
    );
};

export default ContactPage;
