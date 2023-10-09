import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Container} from "@mui/material";

const Yoga = () => {
  const [baseData, setBaseData] = useState("");
  const [categories, setCategories] = useState("");

  // console.log(baseData)

  useEffect(() => {
    // fetching main api endpoint data.
    axios
      .get("https://yoga-api-nzy4.onrender.com/v1/categories")
      .then((res) => {
        if (res.status == 200) {
          setCategories(res.data);
        } else {
          throw new Error("Couldn't fetch categories");
        }
      })
      .then(() => console.log(categories))
      .catch((error) => console.log(error.message));
  }, []);

  // Fetching categories
  // const fetchCategories = () => {
  //   axios
  //     .get("https://yoga-api-nzy4.onrender.com/v1/categories")
  //     .then((res) => {
  //       if (res.status == 200) {
  //         setCategories(res.data);
  //       } else {
  //         throw new Error("Couldn't fetch categories");
  //       }
  //     })
  //     .then(() => console.log(categories))
  //     .catch((error) => console.log(error.message));
  // };

  const navigate = useNavigate();
  function handleCategory(id) {
    navigate(`/categories/${id}`);
  }

  return (
    <Box
      className="Yoga"
      // style={{backgroundImage : 'url("./yogaBackground.jpg")'}}
    >
      {/* <Typography> Hello </Typography><br/>
      {baseData ? JSON.stringify(baseData) : "Loading..."} <br/> */}

      <Grid container spacing={5}>
        {categories ? (
          categories.map((category) => (
            <Grid
              item
              className="category"
              key={category.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => handleCategory(category.id)}
            >
              {/* <Paper elevation={9}> */}
              <Typography
                className="categoryHeader"
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontSize: 27,
                  fontWeight: "bold",
                }}
                // id="categoryHeader"
              >
                {category.category_name}
              </Typography>
              <Typography>{category.category_description}</Typography>
              {/* </Paper> */}
            </Grid>
          ))
        ) : (
          <Grid item className="fetchCategories">
            <Typography>
              <CircularProgress />
            </Typography>
            {/* <Button variant="contained" onClick={fetchCategories}>
              Fetch Categories
            </Button> */}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Yoga;
