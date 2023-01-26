import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

import imgOurServices1 from 'assets/images/services/imgOurServices1.png';
import imgOurServices2 from 'assets/images/services/imgOurServices2.png';
import imgOurServices3 from 'assets/images/services/imgOurServices3.png';
import imgOurServices4 from 'assets/images/services/imgOurServices4.png';
import BG5 from 'assets/images/services/BG-5.png';
// import './services-list-image.css';

const useStyles = makeStyles((theme: any) => ({
    displayListImg: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    displayListBackground: {
        [theme.breakpoints.down('md')]: {
            maxHeight: '300px !important',
        },
    },
    img: {
        position: 'absolute',
        width: '100%',
        maxHeight: '1100px',
        left: 0,
        zIndex: -1,
    },
    imagesItem: {
        objectFit: 'cover',
        borderRadius: '25px',
        overflow: 'hidden',
    },
}));

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ServicesImageList() {
    const classes = useStyles();
    return (
        <>
            <img src={BG5} alt="treatment" className={` ${classes.displayListBackground} ${classes.img}`} />
            {/* header list img  */}
            <Typography variant="subtitle2" mb={2} textAlign="center" paddingTop="100px" mt={21}>
                Our Services
            </Typography>
            <Typography variant="h3" textAlign="center">
                We focus on your beauty
            </Typography>
            <Box
                component="p"
                textAlign="center"
                lineHeight={'24px'}
                fontWeight="400"
                fontSize="16px"
                letterSpacing="1px"
                paddingBottom={9}
            >
                Lorem ipsum dolor sit amet
            </Box>

            {/* list img  */}
            <ImageList sx={{ width: '100%' }} variant="quilted" cols={3} rowHeight={121} gap={120}>
                {itemData.map((item) => (
                    <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                        className={` ${classes.imagesItem} ${classes.displayListImg}`}
                    >
                        <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
// list data image
const itemData = [
    {
        img: imgOurServices1,
        title: 'Coffee',
        rows: 1.5,
        cols: 1,
    },
    {
        img: imgOurServices2,
        title: 'Camera',
        rows: 1.5,
        cols: 2,
    },
    {
        img: imgOurServices3,
        title: 'Burger',
        rows: 1.5,
        cols: 2,
    },
    {
        img: imgOurServices4,
        title: 'Breakfast',
        rows: 1.5,
        cols: 1,
    },
];
