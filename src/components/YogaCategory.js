import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";


function YogaCategory() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState("");
  const [poses, setPoses] = useState("");



  useEffect(() => {
    axios
      .get(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${id}`)
      .then((res) => {
        console.log(res.data.poses);
        setCategoryData(res.data);
        setPoses(res.data.poses);
      });
  }, []);

  return (
    <>
      {categoryData ? (
        <Box className="YogaCategory">
          {/* Category Name and Description */}
          <Typography
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: 33,
              fontWeight: "bold",
            }}
          >
            {`${categoryData.category_name} Poses`}
          </Typography>
          <Typography color="white" marginBottom={5}>
            {categoryData.category_description}
          </Typography>
          {/* Render the Poses for the category */}
          <Grid container spacing={3}>
            {poses.map((pose) => (
              <Grid item xs={12} key={pose.id} className="pose">
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "black",
                    color: "aqua",
                    opacity: 1,
                    margin: 1
                  }}
                >
                  <CardMedia
                    sx={{ flex: 1, backgroundSize: "contain", height: 300 }}
                    image={`${pose.url_png}` || `${pose.url_svg}`}
                    title={`${pose.english_name} Pose`}
                  />

                  <CardContent sx={{ flex: 1 }}>
                    <Typography sx={{color: "white", fontSize: 27}}>{`${pose.english_name} Pose`}</Typography>
                    <Typography>{`Sanskrit Name: ${pose.sanskrit_name}`}</Typography>
                    <Typography>{`Translation: ${pose.translation_name}`}</Typography>
                    <Typography>{pose.pose_benefits}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography
          sx={{
            backgroundColor: "black",
            color: "aqua",
            opacity: 0.5,
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Typography>
      )}
    // </>
  );
}

export default YogaCategory;
