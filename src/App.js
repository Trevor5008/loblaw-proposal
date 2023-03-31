import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import './App.scss';
import Header from './components/Header/Header';
import BulletList from "@mui/icons-material/FormatListBulleted";
import ChartIcon from  '@mui/icons-material/PieChartOutline';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Slider from "@mui/material/Slider";
import { AttachMoney } from '@mui/icons-material';
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import bob from "./assets/logos/bob_loblaw_icon.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

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
   const [userData, setUserData] = useState(null);
   const [userName, setUserName] = useState("");
   const [totalSpent, setTotalSpent] = useState(0);
  const [budgetTotal, setBudgetTotal] = useState(0);
  const [budgetVal, setBudgetVal] = useState(0);
   const marks = [
      {
         value: 0,
         label: '$0'
      },
      {
         value: 50,
         label: '$50'
      },
      {
         value: 300,
         label: '$300'
      }
   ];

   const BASE_URL = "http://localhost:8080";

   function calcTotalSpent(expenseArr) {
      const total = expenseArr.reduce((a, b) => {
         return a + parseFloat(b.itemPrice);
      }, 0);
      return total.toFixed(2);
   }

   useEffect(() => {
      axios.get(`${BASE_URL}/4`)
         .then(userData => {
            const { userName } = userData.data[0];
            // const total = calcTotalSpent(userData.data);
            // console.log(total)
            // setTotalSpent(total);
            const total = calcTotalSpent(userData.data);
            setTotalSpent(total);
            setUserName(userName);
            setUserData(userData.data);
            setBudgetTotal(total);
         });
   }, [userData, budgetTotal]);

   if (!userName || !userData || !totalSpent) {
      return <h2>Loading...</h2>;
   }

   function handleSubmit(e) {
    e.preventDefault();
    console.log(budgetVal);
    setBudgetTotal(budgetVal);

   }
   function handleChange(e) {
    // e.preventDefault();
   const value = parseInt(e.target.value);
    console.log(e.target.value);
    setBudgetVal(value);

   }

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

       <Header />

       <h1 className="welcome__text">Welcome {userName}!</h1>
       {/* <Form /> */}
       <section className="banner">
         <div className="banner__item">
           <h3 className="banner__text">Spent this Month</h3>
           <h2 className="banner__value">${totalSpent}</h2>
         </div>
         <div className="banner__item">
           <h3 className="banner__text">Saved this Month</h3>
           <h2 className="banner__value">$10</h2>
         </div>
       </section>

       <div className="budget">
         <section className="budget__section">
           <h2 className="budget__title">Budget Settings</h2>
         </section>
         <div className="budget__icons">
           <BulletList />
           <ChartIcon />
         </div>
       </div>

       <Box width={300}>
        <form onSubmit={(e) => handleSubmit(e)}>
         <Input
           className='budget__input'
           placeholder="Amount"
           startDecorator={<AttachMoney />}
           endDecorator={<Button type="submit">Set Budget</Button>}
           name="budget"
           onChange={(e) => handleChange(e)}
           />
           
          </form>

         <h2 className="budget__subtitle">Vegetable</h2>
         <Slider
           className="budget__slider"
           defaultValue={70}
           max={budgetTotal}
           aria-label="Small"
           valueLabelDisplay="on"
           marks={marks}
         />
         <h2 className="budget__subtitle">Dairy</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           max={budgetTotal}
           aria-label="Default"
           valueLabelDisplay="auto"
           marks={marks}
         />
         <h2 className="budget__subtitle">Meat</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           max={budgetTotal}
           aria-label="Default"
           valueLabelDisplay="auto"
           marks={marks}
         />
         <h2 className="budget__subtitle">Drinks</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           aria-label="Default"
           max={budgetTotal}
           valueLabelDisplay="auto"
           marks={marks}
         />
       </Box>
     </div>
   );
}

export default App;
