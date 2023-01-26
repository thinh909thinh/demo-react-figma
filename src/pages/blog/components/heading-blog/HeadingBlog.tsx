import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import backgroundBlog from 'assets/images/blog/unsplash_QA9fRIi6sFw.png';

// import './heading-blog.css';

const useStyles = makeStyles((theme: any) => ({
    BackgroundBlog: {
        backgroundImage: `url(${backgroundBlog})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '285px',
        position: 'absolute',
        left: '0',
        width: '100%',
        backgroundPosition: 'center center',
    },
    backgroundBlogOverlay: {
        position: 'absolute',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#091156',
        opacity: '0.6',
    },
}));
function HeadingBlog() {
    const classes = useStyles();

    return (
        <>
            {/* Start Blog Header Img */}
            <Box component="section" mt={21}>
                <Box>
                    <Box className={classes.BackgroundBlog}>
                        <Box className={classes.backgroundBlogOverlay}></Box>
                    </Box>
                    <Box textAlign="center" alignItems="center" display="flex" position="absolute" minHeight="285px">
                        <Typography color="#fff" variant="h3">
                            Beautice Beauty Clinic
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box pt={50}></Box>
            {/* End Blog Header IMG */}
        </>
    );
}

export default HeadingBlog;
