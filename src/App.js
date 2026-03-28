import './App.css';
import Box from '@mui/material/Box';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';

function App() {
  return (
    <Box container className="App">

      <Navbar  />
      <Hero />
    </Box>
  );
}

export default App;
