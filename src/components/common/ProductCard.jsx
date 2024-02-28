//rafc nombrado
// rafce por defecto

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@mui/material";

export const ProductCard = ({img, title, description, price}) => {
  //console.log(prop);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ margin: 0.5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="Producto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              
              {title}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h4" component="h4">
             
              {price} clp
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained" size="large" color="success">
            Ver mas
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
