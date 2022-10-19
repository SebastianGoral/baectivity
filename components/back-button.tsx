import React from "react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  font-size: 50px;
`;
export const BackButton = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <IconButton onClick={() => router.back()}>
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </Wrapper>
  );
};
