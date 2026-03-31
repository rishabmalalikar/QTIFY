import Button from '@mui/material/Button';
import styles from "./Button.module.css";

function CustomButton({children}) {
  return (
    <>

      <Button  variant="contained" className={styles.button}>
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
