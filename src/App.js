import './App.css';
// import Box from '@mui/material/Box';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Cards from './Component/Card/Card';
// import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography ,Box,Grid,Button} from '@mui/material';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
        const ApiData = response.data;
        setData(ApiData);
        // console.log();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <Box container className="App">
      {/* {console.log(data)} */}
      <Navbar  />
      <Hero />

      <Grid container spacing={1} sx={{display: 'flex', justifyContent:'space-between'}}>

          <Typography variant="h6" sx={{ color: '#fff', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold'}}>
            Top Albums
          </Typography>  
          <Button variant="text">See All</Button>
        

        <Grid container spacing={1}>
          {data.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
