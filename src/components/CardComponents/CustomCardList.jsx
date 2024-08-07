import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Avatar, Box, Divider, Button } from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';
import quote from "../../assets/Images/CardImages/quote.png";
import Images4 from "../../assets/Images/CardImages/image-6.jpeg";
import heart from "../../assets/Images/CardImages/heart.png";
import supply from "../../assets/Images/CardImages/supply.png";
import bagel from "../../assets/Images/CardImages/bagel.png";
import AvatarImages from "../../assets/Images/CardImages/avtariamges.jpg";

function CustomCardList() {
  const images = [Images4];

  return (
    <Box
      sx={{
        backgroundColor: 'rgb(252,226,154)',
        width: "37%",
        height: "100vh", 
        overflowY: "auto", 
        boxSizing: 'border-box',
        marginTop: "60px",
        margin: "60px 0px 0px 0px",
        padding: "none"
      }}
    >
      {images.map((image, index) => (
        <Card key={index} sx={{ m: 2 }}>
          <CardMedia
            component="img"
            image={image}
            width="100%"
            height="100%"
            alt={`Background Noise ${index + 1}`}
            sx={{
              backgroundColor: "rgb(254,248,230)",
              zIndex: 0,
            }}
          />
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar alt="User Avatar" src={AvatarImages} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>Fowl Language</Typography>
              <Button variant="outlined" sx={{ ml: 'auto', borderColor: 'black', color: 'black', bgcolor: 'white' }}>
               Series Home
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1 }}>
              <img src={quote} alt="Quote" style={{ width: '10%', height: 'auto' }} />
            </Box>
            <Typography 
              variant="body1" 
              sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'rgb(232,232,232)',  }}
            >
              Bonus panel testing 2
            </Typography>
            <Typography variant="body2" sx={{ color: 'black', mt: 1,  }}>
              Wed, Jul 17, 2024 • 3:45 PM
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
              <img src={heart} alt="Heart" style={{ width: '24px', height: '24px' }} />
              <img src={bagel} alt="Bagel" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              <img src={supply} alt="Supply" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              <Typography variant="body2" sx={{ mx: 'auto' }}>151 Views</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>7 Comments</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Favorite />
                <Typography variant="body2" sx={{ ml: 1 }}>Like</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Comment />
                <Typography variant="body2" sx={{ ml: 1 }}>Comment</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Share />
                <Typography variant="body2" sx={{ ml: 1 }}>Share</Typography>
              </Box>
            </Box>
            <Divider />
            <Typography variant="body2" sx={{ mt: 1}}>See previous comments...</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CustomCardList;
