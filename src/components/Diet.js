import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DOMpurify from "dompurify";

const Diet = () => {
  const [randomRecipes, setRandomRecipes] = useState(null);
  const APIKEYSPOONACULAR = "d60465aa4b384267b16edd13d5e173af";
  const [recipeSummaries, setRecipeSummaries] = useState("");
  // const [sanitizedRecipeSummary, setSanitizedRecipeSummary] =useState('')

  const [recipeInstructions, setrecipeInstructions] = useState("");
  // const [sanitizedRecipeInstructions, setSanitizedrecipeInstructions] =useState('')

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=2&apiKey=${APIKEYSPOONACULAR}`
      )
      .then((res) => {
        setRandomRecipes(res.data.recipes);
        setRecipeSummaries(
          res.data.recipes.map((recipe) => DOMpurify.sanitize(recipe.summary))
        );
        setrecipeInstructions(
          res.data.recipes.map((recipe) =>
            DOMpurify.sanitize(recipe.instructions)
          )
        );

        console.log(res.data.recipes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Diet">
      {Array.isArray(randomRecipes) ? (
        randomRecipes.map((recipe, index) => (
          <Card key={recipe.id} >
            <CardMedia
              image={recipe.image}
              sx={{
                backgroundColor: "black",
                opacity: 0.9,
                backgroundSize: "contain",
                height: 50,
                paddingTop:4
              }}
            />
            <CardContent 
              sx={{
                backgroundColor: "black",
                opacity: 0.9,
                color: "aqua",

              }}
          
            >
              <Typography>{recipe.title}</Typography>
              <Typography>Recipe Summary: </Typography>
              <Box
                dangerouslySetInnerHTML={{ __html: recipeSummaries[index] }}
              ></Box>
              <Typography>Recipe Instructions: </Typography>
              <Box
                dangerouslySetInnerHTML={{ __html: recipeInstructions[index] }}
              ></Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>
          <CircularProgress></CircularProgress>
        </Typography>
      )}
    </div>
  );
};

export default Diet;
