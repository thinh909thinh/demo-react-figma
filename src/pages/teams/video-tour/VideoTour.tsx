import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import './services-slogan.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Doremon from 'assets/images/services/BG-Mask.png';
import BGMask from 'assets/images/teams/BGTeam.png';

const useStyles = makeStyles((theme: any) => ({
    customsServicesSlogan: {
        [theme.breakpoints.down('lg')]: {
            display: 'block !important',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '116px !important',
            paddingBottom: '116px !important',
        },
    },
    serviceCustomers: {
        [theme.breakpoints.down('lg')]: {
            width: '100% !important',
            justifyContent: 'center !important',
        },
    },
    serviceCustomersItem: {
        [theme.breakpoints.down('lg')]: {
            display: 'flex !important',
            justifyContent: 'center !important',
        },
    },
    TreatmentsVideos: {
        [theme.breakpoints.down('lg')]: {
            marginLeft: '100px !important',
            width: '100% !important',
        },
    },
    serviceCustomersItemLeft: {
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0px !important',
        },
    },
    serviceCustomersItemLeftContent: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    servicesSlogan: {
        backgroundImage: `url(${BGMask})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
    },
    servicesSloganBackground: {
        height: '100%',
        background: 'rgba(9, 17, 86, 0.6)',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    servicesSloganTreatmentsVideo: {
        fontSize: ' 16px !important',
    },
    ServicesSloganIconPlay: {
        cursor: 'pointer',
        width: '23%',
    },
    popPupVideo: {
        zIndex: 103,
        width: '80vw',
        height: '80vh',
        position: 'fixed',
        top: '100px',
        left: '50%',
        transform: ' translateX(-50%)',
    },
    popPupVideoClose: {
        cursor: 'pointer',
        position: 'absolute',
        color: 'white',
        top: 0,
        right: 0,
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        backgroundColor: 'red',
    },
    popPupVideoImg: {
        width: '100%',
        height: '100%',
    },
}));

const VideoTour = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" className={classes.servicesSlogan} marginTop={'125px'} minHeight={'529px'}>
                {/* PopPup Video  */}

                <Box className={classes.servicesSloganBackground}>
                    <Container maxWidth="lg">
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            pt={23}
                            ml="auto"
                            mr="auto"
                            className={`${classes.customsServicesSlogan}`}
                        >
                            <Box width="100%" textAlign={'center'} className={`${classes.serviceCustomers}`}>
                                <Typography
                                    variant="h3"
                                    mb={2.5}
                                    pl={0.5}
                                    pr={1.5}
                                    color="white"
                                    fontSize="36px"
                                    className={`${classes.serviceCustomersItem}`}
                                >
                                    Customer satisfaction
                                </Typography>
                                <Typography
                                    variant="h3"
                                    mb={2.5}
                                    pl={0.5}
                                    pr={1.5}
                                    color="white"
                                    fontSize="36px"
                                    className={`${classes.serviceCustomersItem}`}
                                >
                                    is our main goal
                                </Typography>
                                <Typography variant="inherit" pt={2} className={`${classes.serviceCustomersItem}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default VideoTour;
