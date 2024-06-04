import './App.css';
import { Grid } from "@mui/material";
import Sidebar from './Component/Sidebar';
import Inputs from './Component/Inputs';

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
        <Inputs />
      </Grid>
    </Grid>
  );
}

export default App;