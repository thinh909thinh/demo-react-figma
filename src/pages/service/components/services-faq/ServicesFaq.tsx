import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import "./services-faq.css"

const useStyles = makeStyles((theme: any) => ({
    borderDivider: {
        height: '5px',
        backgroundColor: ' #FF64AE',
    },
    cardContent: {
        borderTop: '3px solid #091156',
        backgroundColor: ' #F6F7FF',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        '&:hover :first-child': {
            backgroundColor: 'transparent',
        },
    },
}));
const ServicesFaq = () => {
    const [openFaq, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const handleClick = () => {
        setOpen(!openFaq);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };

    const classes = useStyles();
    return (
        <List
            sx={{ width: '100%', marginBottom: '100px', paddingTop: '800px' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <>
                    <Typography variant="h3" mb={2.5} pl={0.5} pr={1.5} textAlign="center">
                        Services FAQ’s
                    </Typography>
                    <Box width="100%" display={'flex'} justifyContent="center" mb={8}>
                        <Box className={` ${classes.borderDivider}`} width="40px"></Box>
                    </Box>
                </>
            }
        >
            {/*  Items 1 */}
            <ListItemButton onClick={handleClick}>
                <Typography variant="h3" fontSize={16} letterSpacing={'1px'}>
                    Is beauty consultation handled thoroughly?
                </Typography>
                <ListItemText />
                {openFaq ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFaq} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={` ${classes.cardContent}`}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <Box pt={9} pl={9} pr={9} pb={9} fontStyle="italic">
                            <Typography fontSize="14px" letterSpacing={'1px'} mb={3}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim
                                praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </Typography>
                            <Typography fontSize="14px" letterSpacing={'1px'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim
                                praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </Typography>
                        </Box>
                    </ListItemButton>
                </List>
            </Collapse>
            {/*  Items 2 */}
            <ListItemButton onClick={handleClick2}>
                <Typography variant="h3" fontSize={16} letterSpacing={'1px'}>
                    Can I be beautiful in an instant time?
                </Typography>
                <ListItemText />
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={` ${classes.cardContent}`}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <Box pt={9} pl={9} pr={9} pb={9} fontStyle="italic">
                            <Typography fontSize="14px" letterSpacing={'1px'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim
                                praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </Typography>
                        </Box>
                    </ListItemButton>
                </List>
            </Collapse>
            {/*  Items 3 */}
            <ListItemButton onClick={handleClick3}>
                <Typography variant="h3" fontSize={16} letterSpacing={'1px'}>
                    Are there any side effects to the treatment methods or treatments at this clinic?
                </Typography>
                <ListItemText />
                {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={` ${classes.cardContent}`}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <Box pt={9} pl={9} pr={9} pb={9} fontStyle="italic">
                            <Typography fontSize="14px" letterSpacing={'1px'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim
                                praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </Typography>
                        </Box>
                    </ListItemButton>
                </List>
            </Collapse>
            {/*  Items 4 */}
            <ListItemButton onClick={handleClick4}>
                <Typography variant="h3" fontSize={16} letterSpacing={'1px'}>
                    Do professionals have accreditation in their respective fields?
                </Typography>
                <ListItemText />
                {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className={` ${classes.cardContent}`}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <Box pt={9} pl={9} pr={9} pb={9} fontStyle="italic">
                            <Typography fontSize="14px" letterSpacing={'1px'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim
                                praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </Typography>
                        </Box>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};
export default ServicesFaq;
