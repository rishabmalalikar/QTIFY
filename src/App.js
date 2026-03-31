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
  const [Bstate, setBstate] = useState("See all");
  const [Bstate2, setBstate2] = useState("See all");


  return (
    <Box container className="App">
      <Navbar  />
      <Hero />
      {Bstate==="Collapse"? (
      <Grid container spacing={1} sx={{display: 'flex', justifyContent:'space-between'}} px={2}>
        <Section Albdata={{
        AlbumCat: 'Top Albums',
        url: 'https://qtify-backend.labs.crio.do/albums/top'
        }} Bstate={Bstate} setBstate={setBstate} />
      </Grid>):(
        <Carousel Albdata={{
        AlbumCat: 'Top Albums',
        url: 'https://qtify-backend.labs.crio.do/albums/top'
        }} Bstate={Bstate} setBstate={setBstate} />
      )}


      <hr color='#34c94b;'/>

      {Bstate2==="Collapse"? (
      <Grid container spacing={1} sx={{display: 'flex', justifyContent:'space-between'}} px={2}>
        <Section Albdata={{
        AlbumCat: 'New Albums',
        url: 'https://qtify-backend.labs.crio.do/albums/new'
        }}  Bstate={Bstate2} setBstate={setBstate2} />
      </Grid>):(
          <Carousel Albdata={{
            AlbumCat: 'New Albums',
            url: 'https://qtify-backend.labs.crio.do/albums/new'
            }}  Bstate={Bstate2} setBstate={setBstate2}/>
      )}

    </Box>
  );
}

export default App;
