import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ElementBackground from 'assets/images/teams/ElementBackground.png';
import Girl from 'assets/images/teams/girl.png';
import VectorLeft from 'assets/images/teams/VectorLeft.png';
import VectorRight from 'assets/images/teams/VectorRight.png';
import Star from 'assets/images/teams/Star.png';

const useStyles = makeStyles((theme: any) => ({
    businessslogan: {
        backgroundImage: `url(${ElementBackground})`,
        backgroundPosition: 'top center',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    customIcon: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    customText: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center !important',
            width: '100% !important',
        },
    },
    customWidth: {
        [theme.breakpoints.down('md')]: {
            width: '80% !important',
        },
    },
}));

function OurTestimonials() {
    const classes = useStyles();

    return (
        <>
            <Box pt={82}></Box>
            <Box className={classes.businessslogan}>
                <Typography variant="subtitle2" mb={2} textAlign="center" pt={14.75}>
                    Our Testimonials
                </Typography>
                <Typography variant="h3" textAlign="center">
                    What our customer says
                </Typography>
                <Typography variant="inherit" textAlign="center" pt={1.2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
                <Box display={'flex'} justifyContent="center" pt={7.5}>
                    <img src={Girl} alt="Girl" />
                </Box>
                <Box
                    display="flex"
                    justifyContent={'space-between'}
                    pt={5}
                    width="50%"
                    margin="0 auto"
                    className={classes.customWidth}
                >
                    <Box mt={4} className={classes.customIcon}>
                        <img src={VectorLeft} alt="" />
                    </Box>
                    <Typography
                        variant="inherit"
                        textAlign="center"
                        pt={1.2}
                        width="69%"
                        className={classes.customText}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet
                        ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui.
                        Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida
                        blandit.
                        <Box display="block" margin="0 auto" pt={4.1}>
                            <img src={Star} alt="" />
                        </Box>
                    </Typography>
                    <Box mt={4} className={classes.customIcon}>
                        <img src={VectorRight} alt="" />
                    </Box>
                </Box>
            </Box>

            <Box pt={82}></Box>
        </>
    );
}

export default OurTestimonials;
