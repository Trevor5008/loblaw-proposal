
import Box from '@mui/material/Box';
import './App.scss';
import Header from './components/Header/Header';
import BulletList from "@mui/icons-material/FormatListBulleted";
import ChartIcon from  '@mui/icons-material/PieChartOutline';
import Slider from "@mui/material/Slider";

function App() {
   return (
     <div className="App">
         <Header />
       
       <h1 className="welcome__text">Welcome You!</h1>
       {/* <Form /> */}
       <section className="banner">
         <div className="banner__item">
           <h3 className="banner__text">Spent this Month</h3>
           <h2 className="banner__value">$10</h2>
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
         <h2 className="budget__subtitle">Vegetable</h2>
         <Slider
           className="budget__slider"
           defaultValue={70}
           aria-label="Small"
           valueLabelDisplay="auto"
         />
         <h2 className="budget__subtitle">Dairy</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           aria-label="Default"
           valueLabelDisplay="auto"
         />
         <h2 className="budget__subtitle">Meat</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           aria-label="Default"
           valueLabelDisplay="auto"
         />
         <h2 className="budget__subtitle">Drinks</h2>
         <Slider
           className="budget__slider"
           defaultValue={50}
           aria-label="Default"
           valueLabelDisplay="auto"
         />
       </Box>
     </div>
   );
}

export default App;
