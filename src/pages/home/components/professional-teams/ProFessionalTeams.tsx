import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './professional-teams.css';
import CustomIcons from 'components/custom-icons/CustomIcons';
import ProFessionalTeams1 from 'assets/images/home/fess1.png';
import ProFessionalTeams2 from 'assets/images/home/fess2.png';
import ProFessionalTeams3 from 'assets/images/home/fess3.png';

const useStyles = makeStyles((theme: any) => ({
    responseServiceItem: {
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
        },
    },
    proFessionalTeams: {
        backgroundColor: '#ffffff00',
        boxShadow: '0px 0px 0px 0px rgb(255 255 255 / 0%)',
        padding: '91px 60px 94px 60px',
        borderRadius: '42px 42px 42px 42px',
    },
    proFessionalTeamsActive: {
        backgroundColor: '#fff',
        boxShadow: '0px 25px 50px 25px #f6f7ff',
    },
}));

function ProFessionalTeams() {
    const classes = useStyles();

    return (
        <Box component="section" pt={12.5} pb={12.5}>
            <Box>
                <Typography variant="subtitle2" textAlign="center" mb={2}>
                    Professional Teams
                </Typography>
                <Typography variant="h3" textAlign="center" mb={2.5}>
                    The Professional expert
                </Typography>
                <Typography variant="inherit" textAlign="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Typography>
            </Box>

            <Grid container pt={12.5} textAlign="center">
                <Grid item xs={0} sm={12} lg={4} md={4} className={classes.proFessionalTeams}>
                    <Box>
                        <img src={ProFessionalTeams1} alt="FessionalTeams1" />
                    </Box>
                    <Box>
                        <Typography pt={5} variant="h4">
                            Briyan Nevalli
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} variant="subtitle2">
                            Surgeon
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                        </Typography>
                    </Box>
                    <Box>
                        <CustomIcons />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={0}
                    sm={12}
                    lg={4}
                    md={4}
                    className={`${classes.proFessionalTeams} ${classes.proFessionalTeamsActive} `}
                >
                    <Box>
                        <img src={ProFessionalTeams2} alt="FessionalTeams1" />
                    </Box>
                    <Box>
                        <Typography pt={5} variant="h4">
                            Bella Sebastian
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} variant="subtitle2">
                            Dermatologist
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                        </Typography>
                    </Box>
                    <Box>
                        <CustomIcons />
                    </Box>
                </Grid>

                <Grid item xs={0} sm={12} lg={4} md={4} className={classes.proFessionalTeams}>
                    <Box>
                        <img src={ProFessionalTeams3} alt="FessionalTeams1" />
                    </Box>
                    <Box>
                        <Typography pt={5} variant="h4">
                            Lilly Adams
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} variant="subtitle2">
                            Stylist expert
                        </Typography>
                    </Box>
                    <Box>
                        <Typography pt={2} mb={2} variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                        </Typography>
                    </Box>
                    <Box>
                        <CustomIcons />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProFessionalTeams;
