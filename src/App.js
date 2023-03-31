import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BulletList from "@mui/icons-material/FormatListBulleted";
import ChartIcon from '@mui/icons-material/PieChartOutline';
import Budget from './components/Budget/Budget';
import Button from '@mui/joy/Button';
import Slider from "@mui/material/Slider";
import { AttachMoney } from '@mui/icons-material';
import PreferencePage from './pages/Preferences/PreferencePage';
import BudgetProfile from './pages/BudgetProfile/BudgetProfile';

function App() {
   const [userData, setUserData] = useState(null);
   const [userName, setUserName] = useState("");
   const [totalSpent, setTotalSpent] = useState(0);
   const [budgetTotal, setBudgetTotal] = useState(0);
   const [veggieTotal, setVeggieTotal] = useState(0);
   const [meatTotal, setMeatTotal] = useState(0);
   const [dairyTotal, setDairyTotal] = useState(0);
   const [drinksTotal, setDrinksTotal] = useState(0);
   const [snacksTotal, setSnacksTotal] = useState(0);

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

   function resetCategoryTotals() {
      setMeatTotal(0);
      setDairyTotal(0);
      setDrinksTotal(0);
      setVeggieTotal(0);
      setSnacksTotal(0);
   }

   function handleSubmit(e) {
      e.preventDefault();
      let value = parseInt(e.target.budget.value);
      setBudgetTotal(value);
      resetCategoryTotals();
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
         <Header />
         {/* <BudgetProfile /> */}
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
         <Budget 
            userData={userData} 
            budgetTotal={budgetTotal}
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            veggieTotal={veggieTotal}
            meatTotal={meatTotal}
            dairyTotal={dairyTotal}
            drinksTotal={drinksTotal}
            snacksTotal={snacksTotal}
         />
         <div className="container">
            <Button className="next__btn">Next</Button>
         </div>
         <Footer />
      </div>
   );
}

export default App;
