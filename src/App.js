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


function App() {
   return (
     <div className="App">
       <Box className="navBox">
         <AppBar position="static">
           <Toolbar className='navBox__toolbar'>
             <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               className='navBox__btn'
             >
            <MenuIcon />
             <Image src={bob} className='navBox__logo' />
             </IconButton>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               News
             </Typography>
             <Button color="inherit">Login</Button>
           </Toolbar>
         </AppBar>
       </Box>

       {/* <Form /> */}
     </div>
   );
}

export default App;
