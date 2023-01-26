import { useRouteMatch, Link } from "react-router-dom";
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
    customLink: {
        textDecoration: 'none',
        color: '#8B8B8B',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            color: '#414880'
        },
    },
});


const CustomLink = ({ label, to, activeOnlyWhenExact }: any) => {
    const classes = useStyles();
    const routeActive = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

    return (
        <Box>
            <Link
                to={to}
                className={classes.customLink}
                style={{color: routeActive ? '#414880' : '#8B8B8B'}}>
                {label} {routeActive ? <AddIcon fontSize="inherit"/> : ''}
                
            </Link>
        </Box>
    );
};

export default CustomLink;