import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Avatar } from '@mui/material';
import { Favorite, Comment } from '@mui/icons-material';
import Images1 from "../../assets/Images/CardImages/080524_Header.png";
import Images2 from "../../assets/Images/CardImages/Enjoy-the-night-header.jpg";
import Images3 from "../../assets/Images/CardImages/Images3.jpg";

function CustomCardList() {
  // Array of image URLs
  const images = [
    Images1,
    Images2,
    Images3
  ];

  return (
    <div>
      {images.map((image, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={`Background Noise ${index + 1}`}
            sx={{
              display: "flex",
              backgroundColor: "rgb(254,248,230)",
              zIndex: 0
            }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              "Background Noise"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aug 4, 2024
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary" component="p">
              Parenting changes your ears.
            </Typography>
          </CardContent>
          <CardContent>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              120
            </Typography>
            <IconButton aria-label="comment">
              <Comment />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              1,813 Views
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3 Comments
            </Typography>
          </CardContent>
          <CardContent>
            <Avatar sx={{ bgcolor: 'orange', mr: 1 }}>X</Avatar>
            <Typography variant="body2" color="text.secondary">
              x1035: So true
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CustomCardList;
