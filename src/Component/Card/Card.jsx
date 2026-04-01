import style from "./Card.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import { Box } from "@mui/material";
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

export default function Cards({ item }) {
    console.log(item);
  return (
    
    <Grid size={{xs: 6, sm: 4, md:3 ,lg: 1.7}} container spacing={1} sx={{ marginTop: '20px', padding: '0px 20px', display: 'flex', justifyContent: 'center', alignContent:'center', alignItems: 'flex-start', flexDirection: 'column'}}>
        <Card xs={{xs: 12, sm: 6, md: 4, lg: 3}} sx={{width: '159px', height:'205px', borderRadius: '15px', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.51)'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170px"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent sx={{ display: 'flex', alignItems: 'center',  padding: '5px'}}>
                    {item.follows?<Chip sx={{ bgcolor: '#121212', color: '#ffffffff', fontSize: '10px', width:'fit-content', height:'23px'}} label={`${item.follows} Follows`} />:<Chip sx={{ bgcolor: '#121212', color: '#ffffffff', fontSize: '10px', width:'fit-content', height:'23px'}} label={`${item.likes} Likes`} />}
                    
                </CardContent>
            </CardActionArea>
        </Card>
        <p style={{ color: '#fff'}}>{item.title}</p>
  </Grid>
);
}
