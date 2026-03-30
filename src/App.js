import './App.css';
import Box from '@mui/material/Box';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Card from './Component/Card/Card';

function App() {
  return (
    <Box container className="App">

      <Navbar  />
      <Hero />
      <Card />
    </Box>
  );
}

export default App;
