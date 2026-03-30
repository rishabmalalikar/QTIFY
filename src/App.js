import './App.css';
// import Box from '@mui/material/Box';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Cards from './Component/Card/Card';
// import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography ,Box,Grid,Button} from '@mui/material';
import NewAlbum from './Component/NewAlbums/NewAlbums';
import TopAlbum from './Component/TopAlbums/TopAlbums';

function App() {


  return (
    <Box container className="App">
      <Navbar  />
      <Hero />

      <Grid container spacing={1} sx={{display: 'flex', justifyContent:'space-between'}} px={2}>
      <TopAlbum TopAlbum={"Top Albums"}/>
        
      </Grid>

      <Grid container spacing={1} sx={{display: 'flex', justifyContent:'space-between'}} px={2}>
        
      <NewAlbum newAlbum={"New Albums"}/>
      </Grid>
    </Box>
  );
}

export default App;
