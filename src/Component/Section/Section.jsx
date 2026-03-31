import Cards from '../Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography ,Box,Grid,Button} from '@mui/material';


export default function Section({Albdata, Bstate, setBstate}) {
    const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Albdata.url}`);
        const ApiData = response.data;
        setData(ApiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleButton = () => {
    Bstate === "Show All" ? setBstate("Collapse") : setBstate("Show All");
  };

  return ( 
      <>
        <Typography variant="h6" sx={{ color: '#fff', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold'}}>
          {Albdata.AlbumCat}
        </Typography>  
        <Button variant="text" onClick={handleButton} sx={{ color: '#34c94b' }}>{Bstate}</Button>
        <Grid container spacing={1}>
          {data.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Grid>
      </>
  );
}