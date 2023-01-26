import { Box, Typography, Grid } from '@mui/material';
import { ImageList, ImageListItem, List, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { CustomButton } from 'components';
import img1 from 'assets/images/gallery/1.png';
import img2 from 'assets/images/gallery/2.png';
import img3 from 'assets/images/gallery/3.png';
import img4 from 'assets/images/gallery/4.png';
import img5 from 'assets/images/gallery/5.png';
import img6 from 'assets/images/gallery/6.png';
import img7 from 'assets/images/gallery/7.png';
import img8 from 'assets/images/gallery/8.png';
import img9 from 'assets/images/gallery/9.png';
import imgBackground from 'assets/images/gallery/unsplash_eflLpWC1Geo.png';
import PlayButton from 'assets/images/gallery/PlayButton.svg';

const useStyles = makeStyles((theme: any) => ({
    responseTitleGallery: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        },
    },
    responseDescription: {
        '& strong': {
            color: '#091156',
        },
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
        },
    },
    responseTouchBtn: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'left !important',
        },
    },
    responseTouchContainer: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
        },
    },
    listImgGallery: {
        '&:hover': {
            opacity: '0.5',
            cursor: 'pointer',
            transition: 'all ease 500ms',
        },
    },
    galleryContainer: {
        backgroundImage: `url(${imgBackground})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        left: '0',
        right: '0',
    },
}));

function OurGallery() {
    const classes = useStyles();

    return (
        <Box component="section" mt={21}>
            {/* Start List Image Gallery */}
            <Box pt={10}>
                <Typography variant="subtitle2">Our Gallery</Typography>
                <Box mt={1.5} display="flex" className={classes.responseTitleGallery} gap={2}>
                    <Typography variant="h3">Check out the collection pictures from our clinic</Typography>
                    <Typography variant="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis.
                    </Typography>
                </Box>
                <Grid container item pt={9.8}>
                    <Grid sx={{ width: '100%' }}>
                        <ImageList cols={3}>
                            {itemData.map((item) => (
                                <ImageListItem
                                    className={classes.listImgGallery}
                                    sx={{ paddingRight: '35px', paddingBottom: '35px' }}
                                    key={item.img}
                                >
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid className={classes.responseDescription} sx={{ width: '50%', fontSize: '16px' }} pt={9}>
                        <Typography variant="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,{' '}
                            <strong>our teams</strong>.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* End List Image Gallery */}

            {/* Start Image Background & Overlay  */}
            <Box className={classes.galleryContainer} mt={19.5} mb={16} height={725}>
                <Box
                    sx={{
                        height: '100%',
                        background: '#091156',
                        opacity: '0.6',
                        position: 'absolute',
                        left: '0',
                        right: '0',
                    }}
                >
                    <Box textAlign="center" pt={23} maxWidth="1152px" ml="auto" mr="auto">
                        <Box>
                            <Typography variant="h3" mb={2.5} pl={0.5} pr={1.5} color="white" fontSize="36px">
                                Watch the video tour
                            </Typography>
                            <Typography color="white" variant="inherit">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </Typography>
                        </Box>
                        <Box pt={3}>
                            <List>
                                <ListItemIcon>
                                    <img src={PlayButton} />
                                </ListItemIcon>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box pt={25}></Box>
            {/* End Image Background & Overlay */}

            {/* Start Touch Gallery */}
            <Grid
                alignItems="center"
                flexWrap="nowrap"
                className={classes.responseTouchContainer}
                container
                pt={100}
                pb={18}
                gap={2}
            >
                <Grid item lg={7} md={12}>
                    <Box mb={1.3}>
                        <Typography variant="subtitle2">Get In Touch</Typography>
                    </Box>
                    <Box mb={2.5}>
                        <Typography variant="h3">Want to be handled by our professional team immediately?</Typography>
                    </Box>
                    <Typography variant="inherit">
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </Typography>
                </Grid>
                <Grid item textAlign="center" lg={5} md={12} className={classes.responseTouchBtn}>
                    <CustomButton variant="contained" color="secondary">
                        Make an Appointment
                    </CustomButton>
                </Grid>
            </Grid>
            {/* End Touch Gallery */}
        </Box>
    );
}

// Date Image Gallery
const itemData = [
    {
        img: img1,
        title: 'ImageGallery',
    },
    {
        img: img2,
        title: 'ImageGallery',
    },
    {
        img: img3,
        title: 'ImageGallery',
    },
    {
        img: img4,
        title: 'ImageGallery',
    },
    {
        img: img5,
        title: 'ImageGallery',
    },
    {
        img: img6,
        title: 'ImageGallery',
    },
    {
        img: img7,
        title: 'ImageGallery',
    },
    {
        img: img8,
        title: 'ImageGallery',
    },
    {
        img: img9,
        title: 'ImageGallery',
    },
];

export default OurGallery;
