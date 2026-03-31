import React from "react";
import styles from "./Hero.module.css";

import { Typography ,Box,Grid,Button} from '@mui/material';

function Hero() {
  return (
    <div className={styles.hero}>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <Typography sx={{ fontSize: {xs:'0.8rem', sm: '3rem'}, fontWeight: "bold" }}>100 Thousand Songs, ad-free</Typography>
        <Typography sx={{ fontSize: {xs:'0.8rem', sm: '3rem'}, fontWeight: "bold" }}>Over thousands podcast episodes</Typography>
      </div>
      <div className={styles.image}>
        <img
          style={{ width: "212px" }}
          src={require("../../Asset/vibrating-headphone 1.png")}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
