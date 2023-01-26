import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import animation1 from 'assets/images/home/Animation1.png';
import animation2 from 'assets/images/home/Animation2.png';
import animation3 from 'assets/images/home/Animation3.png';

const useStyles = makeStyles((theme: any) => ({
    responseServiceItem: {
        backgroundColor: '#ffffff',
        padding: '59px 40px 85px 40px',
        boxShadow: '0px 25px 50px 25px #f6f7ff',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderRadius: '42px',
        zIndex: '9',
        '&:hover': {
            boxShadow: '0px 25px 50px 25px #eaedff',
        },

        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
        },
    },
}));

function ServicePage() {
    const classes = useStyles();

    return (
        <Box component="section">
            <Box>
                <Typography variant="subtitle2" mb={2} textAlign="center">
                    Main Services
                </Typography>
                <Typography variant="h3" mb={2} textAlign="center">
                    Learn services to focus <br /> on your beauty
                </Typography>
                <Box textAlign="center">
                    Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, <br />
                    feugiat tellus sagittis, scelerisque eget nulla turpis.
                </Box>
            </Box>

            <Grid container spacing={8} pt={11.5} alignItems="center" justifyContent="center">
                <Grid item xs={0} sm={12} lg={4} md={6}>
                    <Box className={classes.responseServiceItem}>
                        <Box textAlign="center">
                            <img src={animation1} alt="Animation1" />
                        </Box>

                        <Box>
                            <Typography variant="h4" mb={1.3} p={0.6} textAlign="center">
                                Beauty consultation
                            </Typography>
                            <Typography variant="inherit" textAlign="center">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla tur
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={0} sm={12} lg={4} md={6}>
                    <Box className={classes.responseServiceItem}>
                        <Box textAlign="center">
                            <img src={animation2} alt="Animation2" />
                        </Box>

                        <Box>
                            <Typography variant="h4" mb={1.3} p={0.6} textAlign="center">
                                Skin treatments
                            </Typography>
                            <Typography variant="inherit" textAlign="center">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla tur
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={0} sm={12} lg={4} md={12}>
                    <Box className={classes.responseServiceItem}>
                        <Box textAlign="center">
                            <img src={animation3} alt="Animation1" />
                        </Box>

                        <Box>
                            <Typography variant="h4" mb={1.3} p={0.6} textAlign="center">
                                Beauty product
                            </Typography>
                            <Typography variant="inherit" textAlign="center">
                                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla tur
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ServicePage;
