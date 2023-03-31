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

function App() {
   const [userData, setUserData] = useState(null);
   const [userName, setUserName] = useState("");
   const [totalSpent, setTotalSpent] = useState(0);

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
         });
   }, [userData]);

   if (!userName || !userData || !totalSpent) {
      return <h2>Loading...</h2>;
   }

   return (
     <div className="App">
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
         <Input 
            placeholder="Amount"
            startDecorator={<AttachMoney />}
            endDecorator={<Button>Set Budget</Button>}
         /> 
       </div>
       <Box width={300}>
         <h2 className="budget__subtitle">Vegetable</h2>
         <Slider
           className="budget__slider"
           defaultValue={70}
           step={10}
           max={300}
           aria-label="Small"
           valueLabelDisplay="auto"
           marks={marks}
         />
         <h2 className="budget__subtitle">Dairy</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           step={10}
           max={300}
           aria-label="Default"
           valueLabelDisplay="auto"
           marks={marks}
         />
         <h2 className="budget__subtitle">Meat</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           step={10}
           max={300}
           aria-label="Default"
           valueLabelDisplay="auto"
           marks={marks}
         />
         <h2 className="budget__subtitle">Drinks</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           aria-label="Default"
           step={10}
           max={300}
           valueLabelDisplay="auto"
           marks={marks}
         />
       </Box>
     </div>
   );
}

export default App;
