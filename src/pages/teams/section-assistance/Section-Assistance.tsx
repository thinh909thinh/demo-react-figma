import React from 'react';
import { Theme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Illustration from 'assets/images/teams/team1.png';
import Illustration2 from 'assets/images/teams/team2.png';
import Illustration3 from 'assets/images/teams/team3.png';
const useStyles = makeStyles((theme: Theme) => ({
    customLink: {
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },

    sectionVisionImg: {
        maxWidth: '100%',
        height: ' auto',
        padding: 0,
        margin: '0 auto',
    },
    landingPageAbout: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    paddingRight: {
        paddingRight: '180px',
    },
    customPaddingRight: {
        [theme.breakpoints.down('lg')]: {
            textAlign: 'center',
            paddingRight: '0 !important',
        },
    },
}));
function SectionAssistance() {
    const classes = useStyles();
    return (
        <Box>
            <Box component="section" mt={6.6}>
                <Box>
                    <Typography variant="subtitle2" textAlign="center" mb={2}>
                        Assistance Team
                    </Typography>
                    <Typography variant="h3" textAlign="center" mb={2.5}>
                        Meet the pro assistance
                    </Typography>
                    <Typography variant="inherit" textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </Typography>
                </Box>

                {/* box 1  */}
                <Grid className={`${classes.landingPageAbout}`} container pt={13.75}>
                    <Grid item={true} xs={12} lg={5} md={12} sm={12} className={`${classes.customLink}`}>
                        <img src={Illustration2} alt="treatment" className={`${classes.sectionVisionImg}`} />
                    </Grid>
                    {/*Box Our Vision  */}
                    <Grid
                        item={true}
                        xs={12}
                        lg={6}
                        md={12}
                        sm={12}
                        className={`${classes.paddingRight} ${classes.customPaddingRight}`}
                        pt={5}
                    >
                        <Typography variant="h2" mb={2} fontSize="18px" lineHeight={'125%'}>
                            Lina Gustav /
                            <Typography
                                display={'inline'}
                                ml="5px"
                                lineHeight="34px"
                                color=" #8B8B8B;"
                                fontStyle="italic"
                            >
                                Lorem ipsum
                            </Typography>
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar
                            euismod neque.
                        </Typography>
                    </Grid>
                </Grid>
                {/* box 2  */}
                <Grid item={true} className={`${classes.landingPageAbout}`} container mt={10}>
                    <Grid item={true} xs={12} lg={5} md={12} sm={12} className={`${classes.customLink}`}>
                        <img src={Illustration} alt="treatment" className={`${classes.sectionVisionImg}`} />
                    </Grid>
                    {/*Box Our Vision  */}
                    <Grid
                        item={true}
                        xs={12}
                        lg={6}
                        md={12}
                        sm={12}
                        className={`${classes.paddingRight} ${classes.customPaddingRight}`}
                        pt={5}
                    >
                        <Typography variant="h2" mb={2} fontSize="18px" lineHeight={'125%'}>
                            Lina Gustav /
                            <Typography
                                display={'inline'}
                                ml="5px"
                                lineHeight="34px"
                                color=" #8B8B8B;"
                                fontStyle="italic"
                            >
                                Lorem ipsum
                            </Typography>
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar
                            euismod neque.
                        </Typography>
                    </Grid>
                </Grid>
                {/* box 3  */}
                <Grid item={true} className={`${classes.landingPageAbout}`} container mt={10}>
                    <Grid item={true} xs={12} lg={5} md={12} sm={12} className={`${classes.customLink}`}>
                        <img src={Illustration3} alt="treatment" className={`${classes.sectionVisionImg}`} />
                    </Grid>
                    {/*Box Our Vision  */}
                    <Grid
                        item={true}
                        xs={12}
                        lg={6}
                        md={12}
                        sm={12}
                        className={`${classes.paddingRight} ${classes.customPaddingRight}`}
                        pt={5}
                    >
                        <Typography variant="h2" mb={2} fontSize="18px" lineHeight={'125%'}>
                            Lina Gustav /
                            <Typography
                                display={'inline'}
                                ml="5px"
                                lineHeight="34px"
                                color=" #8B8B8B;"
                                fontStyle="italic"
                            >
                                Lorem ipsum
                            </Typography>
                        </Typography>
                        <Typography variant="subtitle1" mb={3} lineHeight="34px" color=" #8B8B8B;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar
                            euismod neque.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SectionAssistance;
