import logo from './logo.svg';
import './App.css';
import { Container, Grid } from "@mui/material";
import Sidebar from './Component/Sidebar';
import Buttons from './Component/Buttons';

function App() {
  return (
    <Grid container spacing={20}>
      {/* Sidebar */}
      <Grid item xs={2}>
        <Sidebar />
      </Grid>

      {/* Content */}
      <Grid item xs={10}>
        {/* Button */}
        <Buttons />
      </Grid>
    </Grid>
  );
}

export default App;
