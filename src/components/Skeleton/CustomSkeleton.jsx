import React from "react";
import { Box, Card, CardMedia, CardContent } from "@mui/material";
function CustomSkeleton() {
  return (
    <div>
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
        <CardContent>
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.1)",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              mb: 1,
              animation: "shimmer 1.5s infinite",
              background:"rgb(232,232,232)"

            }}
          />
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.1)",
              height: "20px",
              width: "60%",
              mb: 1,
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background:"rgb(232,232,232)"

            }}
          />
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.1)",
              height: "20px",
              width: "80%",
              mb: 1,
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background:
                "rgb(232,232,232)",
            }}
          />
          <Box
            sx={{
              bgcolor: "rgba(0,0,0,0.1)",
              height: "20px",
              width: "50%",
              borderRadius: "4px",
              animation: "shimmer 1.5s infinite",
              background:"rgb(232,232,232)"
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
export default CustomSkeleton;









