import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './landing-page.css';
import CustomButton from 'components/custom-button/CustomButton';
import treatment from 'assets/images/home/treatment.png';
import backgroundSideLarge from 'assets/images/home/slide-background1-large.png';

const useStyles = makeStyles((theme: any) => ({
    testIMG: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    landingText: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
}));

function LandingPage() {
    const classes = useStyles();

    return (
        <Box component="section" mt={21}>
            <img src={backgroundSideLarge} alt="background" className="background-image" />
            <Grid className={`landing-page ${classes.landingText}`} gap={2}>
                <Grid>
                    <Typography variant="h2" mb={2}>
                        Clinic & beauty consultant
                    </Typography>
                    <Typography variant="subtitle1" mb={3}>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </Typography>
                    <CustomButton variant="contained" color="secondary">
                        More Details
                    </CustomButton>
                </Grid>
                <Grid className={classes.testIMG}>
                    <img src={treatment} alt="treatment" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LandingPage;
