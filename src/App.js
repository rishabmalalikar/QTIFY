import './App.css';
// import Box from '@mui/material/Box';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Cards from './Component/Card/Card';
// import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography ,Box,Grid,Button} from '@mui/material';
// import NewAlbum from './Component/NewAlbums/NewAlbums';
import Section from './Component/Section/Section';
import Carousel from './Component/Carousel/Carousel';

function App() {
  const [Bstate, setBstate] = useState("Show All");
  const [Bstate2, setBstate2] = useState("Show All");


  return (
    <Box container className="App">
      <Navbar  />
      <Hero />
      <div style={{ display: Bstate === "Show All" ? "block" : "none" }}>
        <Carousel
          Albdata={{
      AlbumCat: 'Top Albums',
      url: 'https://qtify-backend.labs.crio.do/albums/top'
    }}
    Bstate={Bstate}
          setBstate={setBstate}
        />
      </div>
      <div style={{ display: Bstate === "Collapse" ? "block" : "none" }}>
        <Grid container spacing={1} px={2} sx={{ display: 'flex', justifyContent: 'space-between', alignContent:'center', alignItems: 'flex-start', flexDirection: 'row'}}  pb={1} pt={2}>
          <Section
            Albdata={{
              AlbumCat: 'Top Albums',
              url: 'https://qtify-backend.labs.crio.do/albums/top'
            }}
            Bstate={Bstate}
            setBstate={setBstate}
          />
        </Grid>
      </div>

      <hr color='#34c94b;'/>

      <div style={{ display: Bstate2 === "Show All" ? "block" : "none" }}>
        <Carousel
          Albdata={{
          AlbumCat: 'New Albums',
          url: 'https://qtify-backend.labs.crio.do/albums/new'
          }}
          Bstate={Bstate2}
          setBstate={setBstate2}
        />
      </div>
      <div style={{ display: Bstate2 === "Collapse" ? "block" : "none" }}>
        <Grid container spacing={1} px={2} sx={{ display: 'flex', justifyContent: 'space-between', alignContent:'center', alignItems: 'flex-start', flexDirection: 'row'}}  pb={1} pt={2}>
          <Section
            Albdata={{
            AlbumCat: 'New Albums',
            url: 'https://qtify-backend.labs.crio.do/albums/new'
            }}
            Bstate={Bstate2}
            setBstate={setBstate2}
          />
        </Grid>
      </div>
    </Box>
  );
}

export default App;
