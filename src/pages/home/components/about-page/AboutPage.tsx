import { Box, Typography, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CustomButton from 'components/custom-button/CustomButton';
import imgAbout from 'assets/images/home/about.png';
import backgroundSideAbout from 'assets/images/home/BG-1.png';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const useStyles = makeStyles((theme: any) => ({
    responseHideAbout: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    responseFullWidthAbout: {
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '80% !important',
        },
    },
    responseTextCenter: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center !important',
            justifyContent: 'center !important',
        },
    },
    aboutPage: {
        display: 'flex',
        flexWrap: 'nowrap!important' as 'nowrap',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'space-around',
    },
    imgAbout: {
        position: 'absolute',
        right: '0',
        top: '1200px',
        zIndex: '-1',
    },
}));

function AboutPage() {
    const classes = useStyles();

    return (
        <Box component="section" pt={25}>
            <img src={backgroundSideAbout} alt="backgroundAbout" className={classes.imgAbout} />

            <Grid container className={classes.aboutPage} gap={2}>
                <Grid item className={classes.responseFullWidthAbout}>
                    <Typography className={classes.responseTextCenter} variant="subtitle2" textAlign="left" mb={1.5}>
                        About us
                    </Typography>
                    <Typography className={classes.responseTextCenter} variant="h3" textAlign="left" mb={2.5}>
                        We are the best beauty clinic
                    </Typography>
                    <Box className={classes.responseTextCenter}>
                        <Typography variant="inherit" textAlign="left" fontSize={16}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </Typography>
                        <Typography variant="inherit" textAlign="left" fontSize={16} mb={2.5}>
                            <br />
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <Grid sx={{ display: 'flex' }} className={classes.responseTextCenter}>
                        <CustomButton variant="contained" color="secondary">
                            Learn More
                        </CustomButton>
                        <Grid
                            sx={{
                                alignItems: 'center',
                                padding: '0px 50px',
                            }}
                            className={classes.responseHideAbout}
                        >
                            <Typography
                                sx={{
                                    width: '49px',
                                    height: '49px',
                                    lineHeight: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: '#091156',
                                    padding: '10px',
                                    '&:hover': {
                                        backgroundColor: '#ACB2EC',
                                    },
                                }}
                            >
                                <Link href="#" variant="body2">
                                    <PlayArrowRoundedIcon
                                        sx={{
                                            color: '#ffffff',
                                            fontSize: '30px',
                                        }}
                                    />
                                </Link>
                            </Typography>
                            <Typography fontSize={20} pl={2}>
                                Watch Video
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.responseHideAbout} ml={8}>
                    <img src={imgAbout} alt="imgAbout" width="476" height="350" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPage;
