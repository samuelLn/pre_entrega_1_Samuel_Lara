import { Grid, Container, Button } from "@mui/material";
import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";

//componente Navbar
export const Navbar = () => {
  return (
    <>
      <div style={{ marginBottom: 30, marginTop: 20 }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2}>
              <Link to="/">
                <h3>Logo</h3>
              </Link>
            </Grid>

            <Grid item xs={8}>
              <Link to="/">
                <Button variant="contained" sx={{ margin: 0.2 }}>
                  Inicio
                </Button>
              </Link>

              <Link to="/category/Vegetariana">
                <Button variant="contained" sx={{ margin: 0.2 }}>
                  Vegetariana
                </Button>
              </Link>
              <Link to="/category/Carnes">
                <Button variant="contained" sx={{ margin: 0.2 }}>
                  Carnes
                </Button>
              </Link>

              <Link to="/category/Primavera">
                <Button variant="contained" sx={{ margin: 0.2 }}>
                  Primavera
                </Button>
              </Link>

              <Link to="/category/Quesos">
                <Button variant="contained" sx={{ margin: 0.2 }}>
                  Quesos
                </Button>
              </Link>
            </Grid>

            <Grid item xs={2}>
              <h4></h4>
              <Link to="/dashboard">Admin</Link>

              <Link to="/Cart">
                <CartWidget />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
