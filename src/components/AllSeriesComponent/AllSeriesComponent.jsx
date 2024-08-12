import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Allseries from "../../assets/Images/Allseries/directory.jpg";
import previewtwo from "../../assets/Images/Allseries/previewtwo.jpg";
import preview from "../../assets/Images/Allseries/preview.jpg";

const array = [
  {
    Images: Allseries,
    heading: "Explore Series",
    Description:
      "Whether you're a kid or a grown-up, a science fanatic or a political junkie, there's something for everyone on Tinyview. Follow to get alerts for new comics.",
  },
  {
    Images: previewtwo,
    heading: "Subscribe",
    Description:
      "Support creators + unlock bonus panels + read unlimited comics + participate in the discussion. Cancel at any time.",
  },
  {
    Images: preview,
    heading: "Earn and Use Influence Points",
    Description:
      "Can't subscribe but still want to support creators? Help us spread the word to your friends & family and earn Influence Points. Then use your points to unlock bonus panels and premium comics.",
  },
];

function AllSeriesComponent() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(250,243,218)",
        padding: "20px",
        maxHeight: "100vh",
        overflow: "scroll",
        // marginTop: "60px",
        zIndex:0,
        paddingTop:"60px",
        paddingBottom:"0px"

      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "rgb(61,61,61)" }}
      >
        New to Tinyview?
      </Typography>
      <Typography variant="body2" sx={{ color: "Black" }}>
        Here are a few links to get you started!
      </Typography>

      {array.map((item, index) => (
        <Card
          key={index}
          sx={{ width: 300, margin: "20px auto", borderRadius: "5px" ,}}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.Images}
            alt={item.heading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.Description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(223,71,75)",
                color: "white",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "rgb(200,63,67)",
                },
              }}
            >
              All Series
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default AllSeriesComponent;
