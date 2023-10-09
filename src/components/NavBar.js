import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import {
  Home,
  SelfImprovement,
  Fastfood,
  FitnessCenter,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const[pathName, setPathName] = useState(window.location.pathname)
  const navigate = useNavigate();
  // const {id} = useParams();
  console.log (window.location.pathname)
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-around",
          opacity: 0.9,
        }}
      >
        <Button
          // sx={{backgroundColor: "#1976d2"}}
          onClick={() => navigate("/")}
          
        >
          <Home />
          HOME
        </Button>
        <Button
          startIcon={<SelfImprovement size="large" />}
          onClick={() => navigate("/yoga")}
          // onFocus={() => console.log(`ID : ${id}`)}
         
        >
          YOGA
        </Button>
        <Button
          startIcon={<FitnessCenter />}
          onClick={() => navigate("/fitness")}
        >
          {" "}
          FITNESS{" "}
        </Button>
        <Button startIcon={<Fastfood />} onClick={() => navigate("/diet")}>
          DIET
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
