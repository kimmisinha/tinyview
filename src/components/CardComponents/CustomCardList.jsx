// import React, { useEffect } from "react";

// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Avatar,
//   Box,
//   Divider,
//   Button,
// } from "@mui/material";
// import { PersonAdd, Share } from "@mui/icons-material";
// import quote from "../../assets/Images/CustomCardList/quote.png";
// import Images1 from "../../assets/Images/CustomCardList/image-6.jpeg";
// import heart from "../../assets/Images/CustomCardList/heart.png";
// import supply from "../../assets/Images/CustomCardList/supply.png";
// import bagel from "../../assets/Images/CustomCardList/bagel.png";
// import AvatarImages1 from "../../assets/Images/CustomCardList/avtariamges.jpg";
// import AvatarImages2 from "../../assets/Images/CustomCardList/product-plug-profile.jpg";
// import AvatarImages3 from "../../assets/Images/CustomCardList/fowl-language-profile.jpg";
// import Images2 from "../../assets/Images/CustomCardList/onions_preview .jpg";
// import Images3 from "../../assets/Images/CustomCardList/Fresh-Air-and-Sun-header.jpg";
// import Tinyview from "../../assets/Images/TinyView/tinyview-fb-cover.jpg";
// import Tinyviewsavtar from "../../assets/Images/TinyView/profiles.jpg";
// import { Favorite, Comment } from "@mui/icons-material";

// function CustomCardList() {
//   const cardsData = [
//     {
//       image: Images1,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages1,
//       title: "Fowl Language",
//       description: "Bonus panel testing 2",
//     },
//     {
//       image: Images2,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages2,
//       title: "Episode 341",
//       description:
//         "Frankie's rid of her bully for now and can spend a little time enjoying the great outdoors. Surely nothing could go wrong with that, right?",
//     },
//     {
//       image: Images3,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages3,
//       title: "Fowl Language",
//       description:
//         "Hey guys! My first new book in years, Tweenage Wasteland, comes out next week! You’re going to find it terribly relatable if your kids are going through the tween-teen years. And if your kids are still little, you can get a sneak preview of what’s coming! I REALLY need to get more preorders in to Amazon and everywhere else that sells books, though. For reasons I don’t entirely understand, these preorders are extremely important for the success of any book. They let Amazon and other booksellers know my little book exists, so they’ll actually stock and promote it. So, PLEASE, go preorder it now! Either at the link below or wherever you buy books. It’ll make a huge difference. Thanks SO much, it means the world to me! ❤️",
//     },
//     {
//       image: Images1,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages1,
//       title: "Fowl Language",
//       description: "Bonus panel testing 2",
//     },
//     {
//       image: Images2,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages2,
//       title: "Episode 341",
//       description:
//         "Frankie's rid of her bully for now and can spend a little time enjoying the great outdoors. Surely nothing could go wrong with that, right?",
//     },
//     {
//       image: Images3,
//       quote: quote,
//       heart: heart,
//       bagel: bagel,
//       supply: supply,
//       avatar: AvatarImages3,
//       title: "Fowl Language",
//       description:
//         "Hey guys! My first new book in years, Tweenage Wasteland, comes out next week! You’re going to find it terribly relatable if your kids are going through the tween-teen years. And if your kids are still little, you can get a sneak preview of what’s coming! I REALLY need to get more preorders in to Amazon and everywhere else that sells books, though. For reasons I don’t entirely understand, these preorders are extremely important for the success of any book. They let Amazon and other booksellers know my little book exists, so they’ll actually stock and promote it. So, PLEASE, go preorder it now! Either at the link below or wherever you buy books. It’ll make a huge difference. Thanks SO much, it means the world to me! ❤️",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: "rgb(252,226,154)",
//         width: "37%",
//         overflowY: "auto",
//         boxSizing: "border-box",
//         marginTop: "60px",
//         margin: "60px 0px 0px 0px",
//         padding: "none",
//         maxHeight: "100vh",
//       }}
//     >
//       <Card sx={{ backgroundColor: "rgb(247,222,151)", height: "470px" }}>
//         <CardMedia
//           component="img"
//           image={Tinyview}
//           sx={{
//             padding: "0px",
//             objectFit: "fill",
//             backgroundColor: "rgb(254,248,230)",
//             zIndex: 0,
//           }}
//         />
//         <CardMedia />

//         <Card sx={{ m: 2, height: "220px", }}>

//             <Box sx={{ paddingTop: "20px" ,padding:"10px 15px"}}>
//               <Box>
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: "bold", color: "rgb(154,154,154)", }}
//                 >
//                   Tinyview Comics
//                 </Typography>
//                 <Typography variant="body2">
//                   <span style={{ fontWeight: "bold" }}>31.14M</span>{" "}
//                   <span style={{ color: "rgb(154,154,154)" }}>Views</span>{" "}
//                   &nbsp; | &nbsp;
//                   <span style={{ fontWeight: "bold" }}>80.3K</span>{" "}
//                   <span style={{ color: "rgb(154,154,154)" }}>Followers</span>
//                 </Typography>
//               </Box>
//             </Box>
//           {/* </Box> */}
//           <Divider sx={{ my: 1 }} />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               my: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 margin: "0px 20px",
//                 color: "rgb(154,154,154)",
//               }}
//             >
//               <PersonAdd />
//               <Typography variant="body2">Follow</Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 margin: "0px 20px",
//                 color: "rgb(154,154,154)",
//               }}
//             >
//               <Share />
//               <Typography variant="body2" sx={{ ml: 1 }}>
//                 Share
//               </Typography>
//             </Box>
//           </Box>
//           <Divider sx={{ my: 1 }} />
//           <Typography
//             variant="body2"
//             sx={{ color: "#626262", fontSize: "16px", margin: "0px 15px" }}
//           >
//             <span style={{ fontWeight: "bold", fontSize: "16px" }}>
//               Daily comics!
//             </span>{" "}
//             <span style={{ fontSize: "16px" }}>
//               Whether you're a kid or a grown-up, a science fanatic or a
//               political junkie, there's something for everyone on Tinyview.
//             </span>
//           </Typography>
//         </Card>
//       </Card>

//       <Card sx={{ m: 2 }}>
//         <CardContent sx={{ width: 434, height: 100 }}>
//           <Typography
//             variant="h6"
//             sx={{ color: "#3D3D3D", fontSize: "18px", fontWeight: "700" }}
//           >
//             What's New
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             You can now receive alerts via email.
//           </Typography>

//           <Button
//             sx={{
//               bgcolor: "rgb(223,71,75)",
//               color: "white",
//               mt: 1,
//               textTransform: "none", // Remove capitalization
//               padding: "6px 12px", // Adjust size
//               "&:hover": {
//                 bgcolor: "rgb(223,71,75)", // Remove hover effect
//               },
//             }}
//           >
//             Manage Alerts
//           </Button>
//         </CardContent>
//       </Card>

//       {cardsData.map((card, index) => (
//         <Card key={index} sx={{ m: 2 }}>
//           <CardMedia
//             component="img"
//             image={card.image}
//             alt={`Background Noise ${index + 1}`}
//             sx={{
//               width: "412px",
//               height: "256px",
//               objectFit: "fill",
//               backgroundColor: "rgb(254,248,230)",
//               zIndex: 0,
//             }}
//           />
//           <CardContent>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//               <Avatar alt="User Avatar" src={card.avatar} />
//               <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
//                 {card.title}
//               </Typography>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   ml: "auto",
//                   borderColor: "black",
//                   color: "black",
//                   bgcolor: "white",
//                 }}
//               >
//                 Series Home
//               </Button>
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "start", my: 1 }}>
//               <img
//                 src={card.quote}
//                 alt="Quote"
//                 style={{ width: "10%", height: "auto" }}
//               />
//             </Box>
//             <Typography variant="body2" sx={{ color: "#696969", mt: 1 }}>
//               Wed, Jul 17, 2024 • 3:45 PM
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{ fontStyle: "italic", fontWeight: "bold", color: "#696969" }}
//             >
//               {card.description}
//             </Typography>
//             <Divider />
//             <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
//               <img
//                 src={card.heart}
//                 alt="Heart"
//                 style={{ width: "24px", height: "24px" }}
//               />
//               <img
//                 src={card.bagel}
//                 alt="Bagel"
//                 style={{ width: "24px", height: "24px", marginLeft: "8px" }}
//               />
//               <img
//                 src={card.supply}
//                 alt="Supply"
//                 style={{ width: "24px", height: "24px", marginLeft: "8px" }}
//               />
//               <Typography variant="body2" sx={{ mx: "auto" }}>
//                 151 Views
//               </Typography>
//               <Typography variant="body2" sx={{ ml: "auto" }}>
//                 7 Comments
//               </Typography>
//             </Box>
//             <Divider />
//             <Box
//               sx={{ display: "flex", justifyContent: "space-between", my: 1 }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Favorite />
//                 <Typography variant="body2" sx={{ ml: 1 }}>
//                   Like
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Comment />
//                 <Typography variant="body2" sx={{ ml: 1 }}>
//                   Comment
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Share />
//                 <Typography variant="body2" sx={{ ml: 1 }}>
//                   Share
//                 </Typography>
//               </Box>
//             </Box>
//             <Divider />
//             <Typography variant="body2" sx={{ mt: 1 }}>
//               See previous comments...
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// }

// export default CustomCardList;

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  Divider,
  Button,
} from "@mui/material";
import Tinyview from "../../assets/Images/TinyView/tinyview-fb-cover.jpg";
import Tinyviewsavtar from "../../assets/Images/TinyView/profiles.jpg";
import { Favorite, Comment } from "@mui/icons-material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCardsRequest } from "../../store/AllComics/AllComicsAction";
import { bindActionCreators } from "redux";
import { PersonAdd, Share } from "@mui/icons-material";
import quote from "../../assets/Images/CustomCardList/quote.png";
import heart from "../../assets/Images/CustomCardList/heart.png";
import supply from "../../assets/Images/CustomCardList/supply.png";
import bagel from "../../assets/Images/CustomCardList/bagel.png";
import Footer from "../Footer/Footer";
import { useTheme, useMediaQuery } from '@mui/material';

function CustomCardList({ allComics, fetchAllComics }) {
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchAllComics();
  }, []);

  // console.log("All Comics--->", allComics);

  return (
    <>   <Box
      sx={{
        backgroundColor: "rgb(252,226,154)",
        width: "37%",
        overflowY: "auto",
        boxSizing: "border-box",
        // marginTop: "60px",
        margin: "40px 0px 0px 0px",
        padding: "none",
        // border:"2px solid blue",
        maxHeight: "100vh",
        backgroundColor: "rgb(247,222,151)",
      }}
    >
      {/* //main div */}
      <Card
        sx={{
          backgroundColor: "rgb(247,222,151)",
          height: "650px",
        }}
      >
        <CardMedia
          component="img"
          image={Tinyview}
          sx={{
            padding: "0px",
            objectFit: "fill",
            backgroundColor: "rgb(254,248,230)",
            zIndex: 0,
          }}
        />
        <CardMedia />

        <Card sx={{ m: 2, height: "220px" }}>
          <Box sx={{ paddingTop: "20px", padding: "10px 15px" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "rgb(61,61,61)" }}
              >
                Tinyview Comics
              </Typography>
              <Typography variant="body2">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontWeight: "700px",
                  }}
                >
                  31.14M
                </span>{" "}
                <span
                  style={{
                    color: "rgb(154,154,154)",
                    fontSize: "16px",
                    fontWeight: "400px",
                  }}
                >
                  Views
                </span>{" "}
                &nbsp; | &nbsp;
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontWeight: "700px",
                  }}
                >
                  80.3K
                </span>{" "}
                <span
                  style={{
                    color: "rgb(154,154,154)",
                    fontSize: "16px",
                    fontWeight: "400px",
                  }}
                >
                  Followers
                </span>
              </Typography>
            </Box>
          </Box>
          {/* </Box> */}
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "0px 20px",
                color: "rgb(154,154,154)",
              }}
            >
              <PersonAdd />
              <Typography variant="body2">Follow</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "0px 20px",
                color: "rgb(154,154,154)",
              }}
            >
              <Share />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Share
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography
            variant="body2"
            sx={{ color: "#626262", fontSize: "16px", margin: "0px 15px" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              Daily comics!
            </span>{" "}
            <span style={{ fontSize: "16px" }}>
              Whether you're a kid or a grown-up, a science fanatic or a
              political junkie, there's something for everyone on Tinyview.
            </span>
          </Typography>
        </Card>

        <Card sx={{ m: 2, height: "140px", borderRadius: "9px" }}>
          <Box sx={{ paddingTop: "20px", padding: "10px 15px" }}>
            <Typography
              variant="h6"
              sx={{ color: "#3D3D3D", fontSize: "18px", fontWeight: "700" }}
            >
              What's New
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              You can now receive alerts via email.
            </Typography>

            <Button
              sx={{
                bgcolor: "rgb(223,71,75)",
                color: "white",
                mt: 1,
                textTransform: "none",
                padding: "6px 12px",
                "&:hover": {
                  bgcolor: "rgb(223,71,75)",
                },
              }}
            >
              Manage Alerts
            </Button>
          </Box>
        </Card>
      </Card>

     

      {allComics.map((card, index) => (
        <Card key={index} sx={{ m: 2 }}>
          <CardMedia
            component="img"
            image={card.image}
            alt={`Background Noise ${index + 1}`}
            sx={{
              width: "412px",
              height: "256px",
              objectFit: "fill",
              backgroundColor: "rgb(254,248,230)",
              zIndex: 0,
            }}
          />
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar alt="User Avatar" src={card.avatarImage} />
              <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                {card.title}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  ml: "auto",
                  borderColor: "black",
                  color: "black",
                  bgcolor: "white",
                }}
              >
                Series Home
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "start", my: 1 }}>
              <img
                src={quote}
                alt="Quote"
                style={{ width: "10%", height: "auto" }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: "#696969", mt: 1 }}>
              {/* Wed, Jul 17, 2024 • 3:45 PM */}
              {card.dateTime}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "16px",
                color: "#626262",
                cursor: "pointer",
                wordWrap: "break-word !important",
                padding: "2px",
              }}
            >
              {card.description}
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <img
                src={heart}
                alt="Heart"
                style={{ width: "24px", height: "24px" }}
              />
              <img
                src={bagel}
                alt="Bagel"
                style={{ width: "24px", height: "24px", marginLeft: "8px" }}
              />
              <img
                src={supply}
                alt="Supply"
                style={{ width: "24px", height: "24px", marginLeft: "8px" }}
              />
              <Typography variant="body2" sx={{ mx: "auto" }}>
                {/* 151 Views */}
                {card.likeCount + `${" Views"}`}
              </Typography>
              <Typography variant="body2" sx={{ ml: "auto" }}>
                {/* 7 Comments */}
                {card.commentCount + `${" Comments"}`}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", my: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Favorite />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Like
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Comment />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Comment
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Share />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Share
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                fontWeight: 400,
                color: "#626262",
                fontSize: "16px",
                lineHeight: "140%",
              }}
            >
              See previous comments...
            </Typography>

            {/* //adding comment */}

            <Card
              style={{
                display: "flex",
                padding: "10px",
                alignItems: "center",
                boxShadow:"none"
              }}
            >
              <Avatar
                alt="Tinyview Admin"
                src="/path_to_image"
                style={{ width: 35, height: 35 }}
              />
              <Box
                ml={2}
                style={{
                  flex: 1,
                  borderRadius:"10px",
                  backgroundColor: "rgb(223,246,236)",
                  padding: "8px 16px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#626262",
                    lineHeight: "140%",
                  }}
                >
                  {card.comment}
                </Typography>
              </Box>
            </Card>
          </CardContent>
        </Card>
      ))}
      {/* </InfiniteScroll> */}
    </Box>
    {/* {isSmallScreen && <Footer />} */}
    </>
 
  );
}

const mapStateToProps = (state) => {
  return {
    allComics: state.CardsReducer.allComics,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllComics: bindActionCreators(fetchCardsRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCardList);
