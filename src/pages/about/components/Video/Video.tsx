import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { makeStyles } from '@mui/styles';
import './video.css';
import { hover } from '@testing-library/user-event/dist/hover';

const useStyles = makeStyles((theme: any) => ({
    video: {
        backgroundImage:
            'url(https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_DE6rYp1nAho.png)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '100%',
    },
    playVideo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '197px',
        paddingBottom: '255px',
    },
    playVideoIcon: {
        width: '88px',
        height: '88px',
        backgroundColor: '#091156',
        borderRadius: '50%',
        zIndex: '100',
        position: 'relative',
        '&:hover': {
            backgroundColor: '#ff64ae',
            transition: 'all 0.3s',
            cursor: 'pointer',
            color: 'white',
        },
    },
    playVideoIconSvg: {
        position: 'absolute',
        top: ' 50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
        color: 'white !important',
    },
}));
const Video = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" mt={21}>
                <Typography variant="subtitle2" mb={2} textAlign="left" paddingTop="75px">
                    About
                </Typography>
                <Typography variant="h3" mb={2} textAlign="left">
                    We are a leading beauty clinic that has
                    <br />
                    been around since 2002
                </Typography>
                <Box
                    component="p"
                    textAlign="left"
                    lineHeight={'24px'}
                    fontWeight="400"
                    fontSize="16px"
                    letterSpacing="1px"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                    <br /> purus sit amet luctus venenatis
                </Box>
            </Box>
            <Box component="section">
                {/* <img src={BG} alt="background" className="background-image"/> */}
                <Box>
                    <Box className={`${classes.video}`} paddingTop="58px">
                        <Box className={`${classes.playVideo}`}>
                            <Box className={`${classes.playVideoIcon}`}>
                                <PlayArrowIcon fontSize="large" className={`${classes.playVideoIconSvg}`} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Video;
