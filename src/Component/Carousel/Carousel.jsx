import Cards from '../Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography ,Box,Button} from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.module.css';
import { Navigation } from 'swiper/modules';

export default function Carousel({Albdata, Bstate, setBstate}) {

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
    Bstate === "See all" ? setBstate("Collapse") : setBstate("See all");
  };


  return (
    <>
    <Box container spacing={1} sx={{display: 'flex', justifyContent:'space-between', flexDirection: 'row'}} px={2} pb={1} pt={2}>
      <Typography variant="h6" sx={{ color: '#fff', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold'}}>
          {Albdata.AlbumCat}
      </Typography>  
      <Button variant="text" onClick={handleButton} sx={{ color: '#34c94b' }}>{Bstate}</Button>
    </Box>
        <Swiper
            className="mySwiper"
            spaceBetween={2}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
                320: { slidesPerView: 2 },
                490: { slidesPerView: 3 },
                670: { slidesPerView: 4  },   
                870: { slidesPerView: 5 },   
                1024: { slidesPerView: 6 },  
                1280: { slidesPerView: 7 },  
            }}
            // style={{"--swiper-navigation-color": "#ffffffff", "--swiper-navigation-size": "15px", "--swiper-navigation-background": "#34c94b"}}
        >
        {data.map((item, index) => (
            <SwiperSlide key={index}><Cards item={item} /></SwiperSlide>
        ))}
        </Swiper>
    </>
  );
}
