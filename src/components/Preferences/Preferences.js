import "./Preferences.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Preferences () {
    return (
      <div className="preferences">
        <h2 className="preferences__title">Preferences</h2>
        <div className="preferences__generic">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Generic</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="always"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="always"
                control={<Radio />}
                label="Always"
              />
              <FormControlLabel
                value="when-cheapest"
                control={<Radio />}
                label="When Cheapest"
              />
              <FormControlLabel
                value="never"
                control={<Radio />}
                label="Never"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="preferences__price">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="always"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="cheapest"
                control={<Radio />}
                label="Cheapest"
              />
              <FormControlLabel
                value="best-value"
                control={<Radio />}
                label="Best Value"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="preferences__replacements">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Replacements
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="always"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="cheapest"
                control={<Radio />}
                label="Cheapest"
              />
              <FormControlLabel
                value="best-match"
                control={<Radio />}
                label="Best Match"
              />
              <FormControlLabel
                value="ask-me"
                control={<Radio />}
                label="Ask Me"
              />
              <FormControlLabel
                value="remove-from-order"
                control={<Radio />}
                label="Remove From Order"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
}

export  default Preferences;