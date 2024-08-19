import React from "react";
import { Box, Card, CardMedia, CardContent, colors } from "@mui/material";
function CustomSkeleton() {
  return (
    <Card style={{ backgroundColor: "white" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "white",
          overflow: "hidden",
          position: "relative",
          marginBottom: "16px",
        }}
      >
        <CardContent sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              bgcolor: "white",
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              mb: 1,
              animation: "shimmer 1.5s infinite",
              background: "rgb(232,232,232)",
            }}
          />
          <Box
            sx={{
              bgcolor: "white",
              height: "20px",
              width: "60%",
              mb: 1,
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background: "rgb(232,232,232)",
            }}
          />
          <Box
            sx={{
              bgcolor: "white",
              height: "20px",
              width: "80%",
              mb: 1,
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background: "rgb(232,232,232)",
            }}
          />
          <Box
            sx={{
              bgcolor: "white",
              height: "20px",
              width: "50%",
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background: "rgb(232,232,232)",
            }}
          />
        </CardContent>
      </Card>
    </Card>
  );
}
export default CustomSkeleton;
