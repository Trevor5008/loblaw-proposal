import "./BudjetProfile.scss";
import BulletList from "@mui/icons-material/FormatListBulleted";
import ChartIcon from "@mui/icons-material/PieChartOutline";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function BudgetProfile () {
    return (
      <div className="budget">
        <h2 className="budget__title">Budget Tracker</h2>
        <div className="budget__icons">
          <BulletList />
          <ChartIcon />
        </div>
        <p className="budget__edit">Edit</p>
        <div className="budget__slider">
          <Box width={300}>
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
          <div className="budget__menu">
            <ul className="budget__list">
              <li className="budget__item">Meat</li>
              <li className="budget__item">Dairy</li>
              <li className="budget__item">Vegetables</li>
              <li className="budget__item">Drinks</li>
            </ul>
            <ul className="budget__price">
              <li className="budget__compare">$115 of $400</li>
              <li className="budget__compare">$90 of $100</li>
              <li className="budget__compare">$115 of $150</li>
              <li className="budget__compare">$105 of $200</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default BudgetProfile;