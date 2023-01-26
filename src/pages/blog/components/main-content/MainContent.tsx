import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { CustomButton } from 'components';
import { CustomInput } from 'components';
import imgContent1 from 'assets/images/blog/unsplash_3ewkNkfJj2k.png';
import imgContent2 from 'assets/images/blog/unsplash_7tDGb3HrITg.png';
import imgContent3 from 'assets/images/blog/unsplash_0_McYfdyEDA.png';
// import './main-content.css';

const useStyles = makeStyles((theme: any) => ({
    responseContent: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
            justifyContent: 'center',
        },
    },
    leftContentBlog: {
        background: '#fff',
        padding: '56px 55px 102px 55px',
        marginBottom: '134px',
        borderRadius: '0px 0px 50px 50px',
        boxShadow: '10px 13px 80px 14px rgb(242 244 255 / 95%)',
    },
    listIconBlog: {
        '& span': {
            display: 'flex',
            alignItems: 'center',
            marginRight: '28px',
            color: '#ff64ae',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0px',
        },
        '& span svg': {
            marginRight: '6px',
            fontSize: '30px',
        },
        '& a': {
            fontWeight: 'bolder',
        },
    },
    blockRightContent: {
        marginBottom: '83px',
        borderRadius: '25px',
        padding: '59px 38px 59px 48px',
        boxShadow: '-2px 4px 31px 9px rgb(242 244 255)',
    },
    listQuestion: {
        '& a': {
            color: ' #8b8b8b',
        },
        '& a:hover': {
            color: '#172176',
        },
    },
    listTags: {
        '& a': {
            color: '#ff64ae',
            marginLeft: '5px',
        },
        '& a:hover': {
            color: '#172176',
        },
    },
}));
function MainContent() {
    const classes = useStyles();

    return (
        <>
            <Box component="section">
                <Grid flexWrap="nowrap" container className={classes.responseContent} gap={8}>
                    {/* Start Left Content Blog */}
                    <Grid item maxWidth="730px">
                        {/* Start Left Content Block 1 */}
                        <Box>
                            <Box>
                                <img src={imgContent1} alt="imgContent1" />
                            </Box>
                            <Box className={classes.leftContentBlog}>
                                <Box>
                                    <Box display="flex" mb={3} className={classes.listIconBlog}>
                                        <Box component="span">
                                            <PersonIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                kuebantal
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <CalendarMonthIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                November 23, 2021
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <FolderIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                Consultation
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Box mb={2.5}>
                                        <Typography variant="h3">
                                            How much does a consultation cost at our clinic?
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ margin: '32px 0' }}>
                                        <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                            A wonderful serenity has taken possession of my entire soul, like these
                                            sweet mornings of spring which I enjoy with my whole heart. I am alone, and
                                            feel the charm of existence in this spot, which was created for the…
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <CustomButton variant="contained" color="secondary">
                                            Continue
                                            <ArrowRightIcon fontSize="large" />
                                        </CustomButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* End Left Content Block 1 */}

                        {/* Start Left Content Block 2 */}
                        <Box>
                            <Box>
                                <img src={imgContent2} alt="imgContent2" />
                            </Box>
                            <Box className={classes.leftContentBlog}>
                                <Box>
                                    <Box display="flex" mb={3} className={classes.listIconBlog}>
                                        <Box component="span">
                                            <PersonIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                kuebantal
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <CalendarMonthIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                November 23, 2021
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <FolderIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                Beauty
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Box mb={2.5}>
                                        <Typography variant="h3">
                                            Be careful! don’t choose the wrong beauty product
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ margin: '32px 0' }}>
                                        <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                            A wonderful serenity has taken possession of my entire soul, like these
                                            sweet mornings of spring which I enjoy with my whole heart. I am alone, and
                                            feel the charm of existence in this spot, which was created for the…
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <CustomButton variant="contained" color="secondary">
                                            Continue
                                            <ArrowRightIcon fontSize="large" />
                                        </CustomButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* End Left Content Block 2 */}

                        {/* Start Left Content Block 3 */}
                        <Box>
                            <Box>
                                <img src={imgContent3} alt="imgContent3" />
                            </Box>
                            <Box className={classes.leftContentBlog}>
                                <Box>
                                    <Box display="flex" mb={3} className={classes.listIconBlog}>
                                        <Box component="span">
                                            <PersonIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                kuebantal
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <CalendarMonthIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                November 23, 2021
                                            </Link>
                                        </Box>
                                        <Box component="span">
                                            <FolderIcon />
                                            <Link href="#" color="inherit" underline="none">
                                                Treatments
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Box mb={2.5}>
                                        <Typography variant="h3">About skin care you need to know</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ margin: '32px 0' }}>
                                        <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                            A wonderful serenity has taken possession of my entire soul, like these
                                            sweet mornings of spring which I enjoy with my whole heart. I am alone, and
                                            feel the charm of existence in this spot, which was created for the…
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <CustomButton variant="contained" color="secondary">
                                            Continue
                                            <ArrowRightIcon fontSize="large" />
                                        </CustomButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* End Left Content Block 3 */}
                    </Grid>
                    {/* End Left Content Blog */}

                    {/* Start Right Content Blog */}
                    <Grid item>
                        {/* Search Input */}
                        <Box>
                            <CustomInput />
                        </Box>
                        {/* Block 1 */}
                        <Box mt={10} className={classes.blockRightContent}>
                            <Box>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Recent Posts
                                    </Typography>
                                    <List className={classes.listQuestion}>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                How much does a consultation cost at our clinic?
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Be careful! don’t choose the wrong beauty product
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                About skin care you need to know
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Tips for starting facial treatments that start early
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Why are beauty treatments needed today?
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>

                        {/* Block 2 */}
                        <Box className={classes.blockRightContent}>
                            <Box>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Blog Categories
                                    </Typography>
                                    <List className={classes.listQuestion}>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Beauty
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Consultation
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Treatments
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>

                        {/* Block 3 */}
                        <Box className={classes.blockRightContent}>
                            <Box className={classes.listTags}>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Tags Cloud
                                    </Typography>
                                    <Box component="p">
                                        <Link fontSize="22pt" href="#" underline="none">
                                            beauty
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            clinic
                                            <br />
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            consultation
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            facial
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            product
                                            <br />
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            skincare
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            treatments
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* Block 4 */}
                        <Box className={classes.blockRightContent}>
                            <Box className={classes.listTags}>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Latest Comment
                                    </Typography>
                                    <Box>
                                        <Link
                                            sx={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '4px' }}
                                            href="#"
                                            underline="none"
                                            marginLeft="0 !important"
                                        >
                                            A WordPress
                                        </Link>
                                        on
                                        <Link
                                            sx={{ fontWeight: 'bold', fontSize: '16px', paddingLeft: '4px' }}
                                            href="#"
                                            underline="none"
                                        >
                                            Commenter Don’t be afraid to start your beauty treatment
                                        </Link>
                                        <Typography fontSize="0.71111em">November 21, 2021</Typography>
                                        <Typography sx={{ marginTop: '5px', marginBottom: '20px' }}>
                                            Hi, this is a comment. To get started with moderating, editing, and deleting
                                            comments, please visit the Comments screen in…
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/* End Right Content Blog */}
                </Grid>
            </Box>
        </>
    );
}

export default MainContent;
