import Box from '@mui/material/Box';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Slider from "@mui/material/Slider";
import { AttachMoney } from '@mui/icons-material';
import './Budget.scss';

function Budget({ 
   budgetTotal, 
   handleChange, 
   handleSubmit, 
   veggieTotal, 
   meatTotal, 
   dairyTotal, 
   drinksTotal, 
   snacksTotal }) {

   const marks = [
      {
         value: 0,
         label: '$0'
      },
      {
         value: 100,
         label: '$100'
      },
      {
         value: 300,
         label: '$300'
      }
   ];

   return (
      <Box width={300}>
      <form className="budget__form" onSubmit={(e) => handleSubmit(e)}>
         <Input
            className='budget__input'
            placeholder={budgetTotal.toString()}
            startDecorator={<AttachMoney />}
            endDecorator={<Button type="submit">Set Budget</Button>}
            name="budget"
            onChange={(e) => handleChange(e)}
         />
      </form>

      <h2 className="budget__subtitle">Vegetable</h2>
      <Slider
         className="budget__slider"
         value={veggieTotal}
         max={budgetTotal}
         aria-label="Small"
         valueLabelDisplay="auto"
         marks={marks}
         name='vegetable'
         onChange={(e) => handleChange(e)}
      />
      <h2 className="budget__subtitle">Dairy</h2>
      <Slider
         className="budget__slider"
         value={dairyTotal}
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
         value={meatTotal}
         max={budgetTotal}
         aria-label="Default"
         valueLabelDisplay="auto"
         marks={marks}
         name='meat'
         onChange={(e) => handleChange(e)}
      />
      <h2 className="budget__subtitle">Drinks</h2>
      <Slider
         className="budget__slider"
         value={drinksTotal}
         aria-label="Default"
         max={budgetTotal}
         valueLabelDisplay="auto"
         marks={marks}
         name='drinks'
         onChange={(e) => handleChange(e)}
      />
      <h2 className="budget__subtitle">Snacks</h2>
      <Slider
         className="budget__slider"
         value={snacksTotal}
         aria-label="Default"
         max={budgetTotal}
         valueLabelDisplay="auto"
         marks={marks}
         name='snacks'
         onChange={(e) => handleChange(e)}
      />
   </Box>
   );
}

export default Budget;