import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import './get-in-touch.css';
import Vector from 'assets/images/contact/Vector.png';
import Vector2 from 'assets/images/contact/Vector2.png';
import Vector3 from 'assets/images/contact/Vector3.png';
const useStyles = makeStyles((theme: any) => ({
    responseServiceItem: {
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
        },
    },
    getInTouchTeams: {
        backgroundColor: '#ffffff00',
        boxShadow: '0px 0px 0px 0px rgb(255 255 255 / 0%)',
        padding: ' 91px 60px 94px 60px',
        borderRadius: ' 42px 42px 42px 42px',
    },
    getInTouchActive: {
        backgroundColor: ' #fff',
        boxShadow: ' 0px 25px 50px 25px #f6f7ff',
    },
}));

function GetInTouch() {
    const classes = useStyles();

    return (
        <Box component="section" pt={11.6} pb={12.5}>
            <Box>
                <Typography variant="subtitle2" textAlign="center" mb={2}>
                    Get in Touch
                </Typography>
                <Typography variant="h3" textAlign="center" mb={2.5}>
                    Get direct handling by us
                </Typography>
                <Typography variant="inherit" textAlign="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
            </Box>
            <Grid container pt={12.5} textAlign="center" display="flex" width="100%">
                {/* address */}
                <Grid item xs={0} sm={12} lg={4} md={4} className={classes.getInTouchTeams}>
                    <Box>
                        <img src={Vector} alt="Vector" />
                    </Box>
                    <Box>
                        <Typography variant="h3" pt={5} fontSize="24px">
                            101 Baker Street, NY
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            cursor: 'pointer',
                            ':hover h6': {
                                color: ' #091156 !important',
                            },
                        }}
                    >
                        <Typography pt={2} variant="subtitle2">
                            Address
                        </Typography>
                    </Box>
                </Grid>
                {/* Phone        */}
                <Grid
                    item
                    xs={0}
                    sm={12}
                    lg={4}
                    md={4}
                    className={` ${classes.getInTouchTeams} ${classes.getInTouchActive}`}
                >
                    <Box>
                        <img src={Vector2} alt="Vector" />
                    </Box>
                    <Box>
                        <Typography variant="h3" pt={5} fontSize="24px">
                            +896 120 5889
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            ':hover h6': {
                                color: ' #091156 !important',
                            },
                        }}
                    >
                        <Typography pt={2} variant="subtitle2">
                            Phone
                        </Typography>
                    </Box>
                </Grid>
                {/* mail  */}
                <Grid item xs={0} sm={12} lg={4} md={4} className={classes.getInTouchTeams}>
                    <Box>
                        <img src={Vector3} alt="Vector" />
                    </Box>
                    <Box>
                        <Typography variant="h3" pt={5} fontSize="24px">
                            mail@company.com
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            ':hover h6': {
                                color: ' #091156 !important',
                            },
                        }}
                    >
                        <Typography pt={2} variant="subtitle2">
                            Mail
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GetInTouch;
