import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './Form.scss';

function Form() {
   return (
      <form>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
};

export default Form;