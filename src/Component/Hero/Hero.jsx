import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
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
