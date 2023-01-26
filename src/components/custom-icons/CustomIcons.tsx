import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const useStyles = makeStyles((theme: any) => ({
    responseIcon: {
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        boxShadow: '-2px 6px 16px -1px #e6e9fd',
        width: '49px !important',
        height: '49px !important',
        borderRadius: '50%',
        padding: '13px !important',
        margin: '0 auto',
        color: '#091156',

        [theme.breakpoints.down('md')]: {
            marginLeft: '10px !important',
            marginRight: '10px !important',
        },
    },
    iconProfessionalFaceBook: {
        '&:hover': {
            backgroundColor: '#3b5998',
            color: '#fff',
        },
    },
    iconProfessionalTw: {
        '&:hover': {
            backgroundColor: '#1da1f2',
            color: '#fff',
        },
    },
    iconProfessionalIns: {
        '&:hover': {
            backgroundColor: '#fb679b',
            color: '#fff',
        },
    },
}));

function CustomIcons() {
    const classes = useStyles();

    return (
        <Box textAlign="center">
            <List
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                component="ul"
            >
                <ListItem className={`${classes.responseIcon} ${classes.iconProfessionalFaceBook}`}>
                    <FacebookRoundedIcon />
                </ListItem>
                <ListItem className={`${classes.responseIcon} ${classes.iconProfessionalTw}`}>
                    <TwitterIcon />
                </ListItem>
                <ListItem className={`${classes.responseIcon} ${classes.iconProfessionalIns}`}>
                    <InstagramIcon />
                </ListItem>
            </List>
        </Box>
    );
}

export default CustomIcons;
