// import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Button from '@mui/material/Button';
import CustomButton from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Box from '@mui/material/Box';

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Box mr={2} ml={2} display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
        <CustomButton > Give Feedback</CustomButton>
      </Box>
    </nav>
  );
}

export default Navbar;
