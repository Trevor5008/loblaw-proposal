import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './components/Form/Form';
import './App.scss';
import Image from 'mui-image';
import bob from './assets/logos/bob_loblaw_icon.png';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Header from './components/Header/Header';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


function App() {
   return (
     <div className="App">
       <Box className="navBox">
         <AppBar position="static">
           <Toolbar className="navBox__toolbar">
             <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               className="navBox__btn"
             >
               <MenuIcon />
               <Image src={bob} className="navBox__logo" duration={0} />
             </IconButton>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               News
             </Typography>
             <Button color="inherit">Login</Button>
           </Toolbar>
         </AppBar>
         <Header />
       </Box>
       <Search id="search">
         <SearchIconWrapper className="nav__search-icon">
           <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
           className="nav__search-input"
           placeholder="Search for product"
           inputProps={{ "aria-label": "search" }}
         />
       </Search>

       {/* <Form /> */}
     </div>
   );
}

export default App;
