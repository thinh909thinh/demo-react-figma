import React from 'react';
import { Theme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import './services-our-visions.css';
import BG4a from 'assets/images/about/BG4a.png';
import Animation1 from 'assets/images/services/Animation1.png';
import Animation2 from 'assets/images/services/services-animation2.png';
import Animation3 from 'assets/images/services/services-animation3.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const useStyles = makeStyles((theme: Theme) => ({
    customLink: {
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    landingPageAbout: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    backgroundImageVision: {
        position: 'absolute',
        width: ' 100%',
        maxheight: '1100px',
        left: 0,
        zIndex: -1,
    },
    getTheServices: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    getTheServicesWrap: {
        '&:hover': {
            color: '#ff64ae !important',
        },
    },
    getTheServicesSvg: {
        color: ' #ff64ae',
    },
}));
function ServicesOurVisions() {
    const classes = useStyles();
    return (
        <Box>
            <Box component="section" mt={21}>
                {/* box 1  */}
                <Grid className={` ${classes.landingPageAbout}`} container>
                    <Grid item xs={12} lg={5} md={12} sm={12} className={` ${classes.customLink}`}>
                        <img src={Animation1} alt="treatment" className={classes.customLink} />
                    </Grid>
                    <Grid item xs={12} lg={5} md={12} sm={12}>
                        <Typography variant="subtitle2" mb={2} paddingTop="0">
                            Beauty Consultation
                        </Typography>
                        <Typography variant="h2" mb={2} fontSize="36px" lineHeight={'125%'}>
                            We services beauty consultation
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </Typography>
                        <Typography
                            variant="h2"
                            mb={2}
                            fontSize="16px"
                            lineHeight={'125%'}
                            className={` ${classes.getTheServicesWrap}`}
                        >
                            <Box className={` ${classes.getTheServices}`}>
                                {' '}
                                Get the Services
                                <KeyboardDoubleArrowRightIcon className={classes.getTheServicesSvg} />
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                {/* Box 2  */}
                <Grid className={` ${classes.landingPageAbout}`} container mt={18}>
                    <Grid item xs={12} lg={5} md={12} sm={12}>
                        <Typography variant="subtitle2" mb={2} paddingTop="0">
                            Skin Treatements
                        </Typography>
                        <Typography variant="h2" mb={2} fontSize="36px" lineHeight={'125%'}>
                            Skin care and treatment by expert
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </Typography>
                        <Typography
                            variant="h2"
                            mb={2}
                            fontSize="16px"
                            lineHeight={'125%'}
                            className={` ${classes.getTheServicesWrap}`}
                        >
                            <Box className={` ${classes.getTheServices}`}>
                                {' '}
                                Get the Services
                                <KeyboardDoubleArrowRightIcon className={classes.getTheServicesSvg} />
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item className={` ${classes.customLink}`} xs={12} lg={5} md={12} sm={12}>
                        <img src={Animation2} alt="treatment" className={classes.customLink} />
                    </Grid>
                </Grid>
                {/* box 3  */}
                <Grid className={` ${classes.landingPageAbout}`} container mt={18}>
                    <Grid item xs={12} lg={5} md={12} sm={12} className={`${classes.customLink}`}>
                        <img src={Animation3} alt="treatment" className={classes.customLink} />
                    </Grid>
                    <Grid item xs={12} lg={5} md={12} sm={12}>
                        <Typography variant="subtitle2" mb={2} paddingTop="0">
                            Beauty Product
                        </Typography>
                        <Typography variant="h2" mb={2} fontSize="36px" lineHeight={'125%'}>
                            We present quality beauty products
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </Typography>
                        <Typography
                            variant="h2"
                            mb={2}
                            fontSize="16px"
                            lineHeight={'125%'}
                            className={` ${classes.getTheServicesWrap}`}
                        >
                            <Box className={` ${classes.getTheServices}`}>
                                {' '}
                                Get the Services
                                <KeyboardDoubleArrowRightIcon className={classes.getTheServicesSvg} />
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ServicesOurVisions;
