import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./custom-input.css"
const useStyles = makeStyles((theme: any) => ({
  displayListImg: {
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  displayListBackground: {
    [theme.breakpoints.down("md")]: {
      maxHeight:"300px !important",
    },
  },
}));
export default function InPut() {
  const classes = useStyles();
  return (<>
           <Box className="search-box" >
      <input type="text" className="search-input" placeholder='Search here ...'/>
      <button className="search-btn">
        <SearchIcon fontSize='large' />
      </button>
    </Box>
  </>
  );
}