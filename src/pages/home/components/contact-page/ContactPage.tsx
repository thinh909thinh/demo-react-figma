import { Box, Typography, Grid } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import ContactImg from 'assets/images/home/contact.png';
import ContactBackgroundImg from 'assets/images/home/BG-2.png';
import { CustomButton } from 'components';

const useStyles = makeStyles((theme: any) => ({
    responseImg: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
        },
    },
    responseInput: {
        width: 450,
        maxWidth: '100%',
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
        },
    },
    imgBackgroundContact: {
        position: 'absolute',
        left: '0',
        top: '2750px',
        zIndex: '-1',
    },
    responseService: {
        [theme.breakpoints.down('md')]: {
            paddingTop: ' 0 !important',
        },
    },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 15,
        border: '1px solid #d9ddfe',
        fontSize: 16,
        padding: '15px 12px',
        background: '#fff',
    },
}));

function ContactPage() {
    const classes = useStyles();

    return (
        <Box component="section" className={classes.responseService} pt={12.5} pb={19}>
            <img src={ContactBackgroundImg} alt="BackgroundContact" className={classes.imgBackgroundContact} />
            <Grid
                sx={{
                    position: 'relative',
                    flexWrap: 'nowrap',
                    justifyContent: 'center',
                }}
                container
                className={classes.responseImg}
                gap={2}
            >
                <Grid item md={12}>
                    <img src={ContactImg} alt="ContactImg" />
                </Grid>
                <Grid item md={12}>
                    <Typography variant="subtitle2" mb={1.5}>
                        Contact us
                    </Typography>
                    <Typography variant="h3" mb={2.5}>
                        Send your inquiry to our expert team
                    </Typography>
                    <Typography variant="inherit" mb={2.5}>
                        Lorem ipsum dolor sit amet nulla turapis tellus.
                    </Typography>

                    {/* Form input */}
                    <Box>
                        <Box className={classes.responseInput} mb={5} gap={2} display={'flex'}>
                            <BootstrapInput fullWidth placeholder="First Name" />

                            <BootstrapInput fullWidth placeholder="Last Name" />
                        </Box>

                        <Box className={classes.responseInput} mb={5}>
                            <BootstrapInput fullWidth placeholder="Email Address" />
                        </Box>

                        <Box className={classes.responseInput} mb={5}>
                            <BootstrapInput fullWidth placeholder="Subject Message" />
                        </Box>
                        <Box mb={2.5}>
                            <TextareaAutosize
                                className={classes.responseInput}
                                maxRows={4}
                                aria-label="Your inquiry here"
                                placeholder="Your inquiry here"
                                style={{
                                    height: 230,
                                    paddingTop: 15,
                                    paddingLeft: 25,
                                    fontFamily: '"Poppins", Sans-serif',
                                    fontSize: 14,
                                    borderRadius: 15,
                                    borderColor: '#d9ddfe',
                                    outline: 'none',
                                }}
                            />
                        </Box>

                        <CustomButton variant="contained" color="secondary">
                            Send Message
                        </CustomButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactPage;
