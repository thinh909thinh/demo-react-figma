import React from 'react';
import { Box, Typography } from '@mui/material';
import './slogan.css';
import BackgroundMask from 'assets/images/about/Backgroundmask.png';
import backgroundSideLarge from 'assets/images/home/slide-background1-large.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
    backgroundMask: {
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        background: 'rgba(9, 17, 86, 0.6)',
    },
    slogan: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    customSlogan: {
        [theme.breakpoints.down('md')]: {
            position: 'relative',
        },
    },
    businessslogan: {
        backgroundImage: `url(${BackgroundMask})`,
        backgroundPosition: 'center center',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        left: 0,
        right: 0,
    },
}));
const Slogan = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                component="section"
                className={`${classes.businessslogan} `}
                marginTop={'150px'}
                marginBottom={'112px'}
                height={'529px'}
            >
                <Box className={`${classes.backgroundMask}`}>
                    <Box className={` ${classes.slogan} ${classes.customSlogan}`}>
                        <Typography variant="subtitle2" mb={2} textAlign="center" paddingTop="164px" color={'#ABB4FF'}>
                            Business Slogan
                        </Typography>
                        <Typography variant="h3" textAlign="center" color={'#FFFFFF'}>
                            Best responsibility and service{' '}
                        </Typography>
                        <Typography variant="h3" mb={2} textAlign="center" color={'#FFFFFF'}>
                            for our customers{' '}
                        </Typography>
                        <Box
                            component="p"
                            textAlign="center"
                            lineHeight={'24px'}
                            fontWeight="400"
                            fontSize="16px"
                            letterSpacing="1px"
                            color={'#CACACA'}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                            <br /> purus sit amet luctus venenatis
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Slogan;
