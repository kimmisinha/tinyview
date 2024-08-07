


import React from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Box, Divider, Button, Container } from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';
import quote from "../../assets/Images/CustomCardList/quote.png";
import Images1 from "../../assets/Images/CustomCardList/image-6.jpeg";
import heart from "../../assets/Images/CustomCardList/heart.png";
import supply from "../../assets/Images/CustomCardList/supply.png";
import bagel from "../../assets/Images/CustomCardList/bagel.png";
import AvatarImages1 from "../../assets/Images/CustomCardList/avtariamges.jpg";
import AvatarImages2 from "../../assets/Images/CustomCardList/product-plug-profile.jpg";
import AvatarImages3 from "../../assets/Images/CustomCardList/fowl-language-profile.jpg";
import Images2 from "../../assets/Images/CustomCardList/onions_preview.jpg";
import Images3 from "../../assets/Images/CustomCardList/Fresh-Air-and-Sun-header.jpg";
import Tinyview from "../../assets/Images/TinyView/tinyview-fb-cover.jpg";
import TinyAvtar from "../../assets/Images/TinyView/profile.jpg"
function CustomCardList() {
  const cardsData = [
    {
      image: Images1,
      quote: quote,
      heart: heart,
      bagel: bagel,
      supply: supply,
      avatar: AvatarImages1,
      heading: "Fowl Language",
      description: "Bonus panel testing 2"
    },
    {
      image: Images2,
      quote: quote,
      heart: heart,
      bagel: bagel,
      supply: supply,
      avatar: AvatarImages2,
      heading: "Episode 341",
      description: "Frankie's rid of her bully for now and can spend a little time enjoying the great outdoors. Surely nothing could go wrong with that, right?"
    },
    {
      image: Images3,
      quote: quote,
      heart: heart,
      bagel: bagel,
      supply: supply,
      avatar: AvatarImages3,
      heading: "Fowl Language",
      description: "Hey guys! My first new book in years, Tweenage Wasteland, comes out next week! You’re going to find it terribly relatable if your kids are going through the tween-teen years. And if your kids are still little, you can get a sneak preview of what’s coming! I REALLY need to get more preorders in to Amazon and everywhere else that sells books, though. For reasons I don’t entirely understand, these preorders are extremely important for the success of any book. They let Amazon and other booksellers know my little book exists, so they’ll actually stock and promote it. So, PLEASE, go preorder it now! Either at the link below or wherever you buy books. It’ll make a huge difference. Thanks SO much, it means the world to me! :heart:"
    }
  ];
  return (
    <Container sx={{ maxWidth: 800, margin: 'auto' }}>
      {/* Top Section */}
      <Card sx={{ mb: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={Tinyview}
          alt="Tinyview Cover"
        />
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={TinyAvtar} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography variant="h5" component="div">
              Tinyview Comics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              31.14M Views • 80.3K Followers
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Daily comics! Whether you're a kid or a grown-up, a science fanatic or a political junkie, there's something for everyone on Tinyview.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
      {/* Cards Section */}
      {cardsData.map((card, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardMedia
            component="img"
            image={card.image}
            alt={`Background Noise ${index + 1}`}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: 'fill',
              backgroundColor: "rgb(254,248,230)",
              zIndex: 0,
            }}
          />
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar alt="User Avatar" src={card.avatar} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }}>{card.heading}</Typography>
              <Button variant="outlined" sx={{ ml: 'auto', borderColor: 'black', color: 'black', bgcolor: 'white' }}>
                Series Home
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1 }}>
              <img src={card.quote} alt="Quote" style={{ width: '10%', height: 'auto' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#696969', mt: 1 }}>
              Wed, Jul 17, 2024 • 3:45 PM
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', fontWeight: 'bold', color: '#696969' }}
            >
              {card.description}
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
              <img src={card.heart} alt="Heart" style={{ width: '24px', height: '24px' }} />
              <img src={card.bagel} alt="Bagel" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              <img src={card.supply} alt="Supply" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
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
            <Typography variant="body2" sx={{ mt: 1 }}>See previous comments...</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
export default CustomCardList;















