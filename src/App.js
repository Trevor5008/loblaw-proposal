import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import './App.scss';
import Header from './components/Header/Header';
import BulletList from "@mui/icons-material/FormatListBulleted";
import ChartIcon from '@mui/icons-material/PieChartOutline';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Slider from "@mui/material/Slider";
import { AttachMoney } from '@mui/icons-material';

function App() {
   const [userData, setUserData] = useState(null);
   const [userName, setUserName] = useState("");
   const [totalSpent, setTotalSpent] = useState(0);
   const [budgetTotal, setBudgetTotal] = useState(0);
   const [budgetVal, setBudgetVal] = useState(0);
   const [veggieTotal, setVeggieTotal] = useState(0);
   const [meatTotal, setMeatTotal] = useState(0);
   const [dairyTotal, setDairyTotal] = useState(0);
   const [drinksTotal, setDrinksTotal] = useState(0);
   const [snacksTotal, setSnacksTotal] = useState(0);

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

   function totalBudgetCalculation(userArr) {
      const meatBudgetVal = parseInt(userArr[0].meatBudget);
      const dairyBudgetVal = parseInt(userArr[0].dairyBudget);
      const veggieBudgetVal = parseInt(userArr[0].veggieBudget);
      const drinkBudgetVal = parseInt(userArr[0].drinkBudget);
      const snackBudgetVal = parseInt(userArr[0].snackBudget);

      const totalArr = [
         meatBudgetVal,
         dairyBudgetVal,
         veggieBudgetVal,
         drinkBudgetVal,
         snackBudgetVal
      ];

      setMeatTotal(meatBudgetVal);
      setDairyTotal(dairyBudgetVal);
      setVeggieTotal(veggieBudgetVal);
      setDrinksTotal(drinkBudgetVal);
      setSnacksTotal(snackBudgetVal);

      const total = totalArr.reduce((a, b) => a + b, 0);
      return total;
   }

   useEffect(() => {
      axios.get(`${BASE_URL}/1`)
         .then(userData => {
            const { userName } = userData.data[0];
            const total = calcTotalSpent(userData.data);
            setTotalSpent(total);
            setUserName(userName);
            setUserData(userData.data);
            const totalBudget = totalBudgetCalculation(userData.data);
            setBudgetTotal(totalBudget);
         });
   }, []);

   if (!userName || !userData || !totalSpent) {
      return <h2>Loading...</h2>;
   }

   function handleSubmit(e) {
      e.preventDefault();
      setBudgetTotal(budgetVal);
   }

   function handleChange(e) {
      let { name, value } = e.target;
      value = parseInt(value);

      switch(name) {
         case 'vegetable':
            setVeggieTotal(value);
            break;
         case 'dairy':
            setDairyTotal(value);
            break;
         case 'meat':
            setMeatTotal(value);
            break;
         case 'drinks':
            setDrinksTotal(value);
            break;
         case 'snacks':
            setDrinksTotal(value);
            break;
         default:
            break;
      }
   }

   return (
     <div className="App">
       <Box className="navBox">
         <Header />
         {/* <AppBar position="static">
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
         </AppBar> */}
       </Box>
      <div className="App">
         <Header />

         <h1 className="welcome__text">Welcome {userName}!</h1>
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
                  placeholder={budgetTotal}
                  startDecorator={<AttachMoney />}
                  endDecorator={<Button type="submit">Set Budget</Button>}
                  name="budget"
                  onChange={(e) => handleChange(e)}
               />
            </form>

            <h2 className="budget__subtitle">Vegetable</h2>
            <Slider
               className="budget__slider"
               defaultValue={veggieTotal}
               max={budgetTotal}
               aria-label="Small"
               valueLabelDisplay="on"
               marks={marks}
               name='vegetable'
               onChange={(e) => handleChange(e)}
            />
            <h2 className="budget__subtitle">Dairy</h2>
            <Slider
               className="budget__slider"
               defaultValue={dairyTotal}
               max={budgetTotal}
               aria-label="Default"
               valueLabelDisplay="auto"
               marks={marks}
               name='dairy'
               onChange={(e) => handleChange(e)}
            />
            <h2 className="budget__subtitle">Meat</h2>
            <Slider
               className="budget__slider"
               defaultValue={meatTotal}
               max={budgetTotal}
               aria-label="Default"
               valueLabelDisplay="on"
               marks={marks}
               name='meat'
               onChange={(e) => handleChange(e)}
            />
            <h2 className="budget__subtitle">Drinks</h2>
            <Slider
               className="budget__slider"
               defaultValue={drinksTotal}
               aria-label="Default"
               max={budgetTotal}
               valueLabelDisplay="on"
               marks={marks}
               name='drinks'
               onChange={(e) => handleChange(e)}
            />
            <h2 className="budget__subtitle">Snacks</h2>
            <Slider
               className="budget__slider"
               defaultValue={snacksTotal}
               aria-label="Default"
               max={budgetTotal}
               valueLabelDisplay="on"
               marks={marks}
               name='snacks'
               onChange={(e) => handleChange(e)}
            />
         </Box>
      </div>
   );
}

export default App;
