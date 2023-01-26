import { Box, Typography, Grid } from '@mui/material';

import LOGO1 from 'assets/images/about/LOGO1.png';
import LOGO2 from 'assets/images/about/LOGO2.png';
import LOGO3 from 'assets/images/about/LOGO3.png';
import LOGO4 from 'assets/images/about/LOGO4.png';
import LOGO5 from 'assets/images/about/LOGO5.png';
function Slide() {
    return (
        <Box component="section" pb={14}>
            <Typography variant="subtitle2" mb={2} textAlign="center" paddingTop="0" mt={14}>
                Our Clients
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={'125%'} textAlign="center">
                Well-known agencies
            </Typography>
            <Typography
                variant="subtitle1"
                mb={3}
                fontSize="16px"
                lineHeight="34px"
                color=" #8B8B8B;"
                textAlign="center"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Box display="flex" justifyContent="space-around" mt={12} flexWrap="wrap">
                <img src={LOGO1} alt="LOGO1" />
                <img src={LOGO2} alt="LOGO2" />
                <img src={LOGO3} alt="LOGO3" />
                <img src={LOGO4} alt="LOGO4" />
                <img src={LOGO5} alt="LOGO5" />
            </Box>
        </Box>
    );
}

export default Slide;
