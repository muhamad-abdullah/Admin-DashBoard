import { Avatar, Stack, Typography, colors } from "@mui/material";
import React from "react";

const UserProfileImgAndDesc = () => {
  return (
    <Stack paddingTop={4} spacing={2} alignItems={"center"}>
      <Avatar
        alt="elon musk"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        sx={{ width: 100, height: 100, cursor: "pointer" }}
      />
      <Typography variant="h3" color={colors.grey[100]} fontWeight={"bold"}>
        Elon Musk
      </Typography>
    </Stack>
  );
};

export default UserProfileImgAndDesc;
