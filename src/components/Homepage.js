import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";

const Homepage = () => {
  const [randomCatFact, setrandomCatFact] = useState("");


  const fetchCatFact = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setrandomCatFact(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Homepage">
        <Typography>
          {randomCatFact
            ? randomCatFact.fact
            : "click button to get a Cat Fact"}
        </Typography>
        <Button onClick={fetchCatFact}>New Cat Fact</Button>
      </div>
    </>
  );
};

export default Homepage;
