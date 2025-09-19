import "./App.css";
import DrawerAppBar from "./DrawerAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Container>
        <Typography variant="h2" gutterBottom color="primary">
          Welcome!
        </Typography>
        <Typography variant="h5" paragraph color="textSecondary">
          This is my attempt at creating a real looking website.
        </Typography>
      </Container>
    </>
  );
}

export default App;
