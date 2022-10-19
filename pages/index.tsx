import type { NextPage } from "next";
import LogoIcon from "../styles/LogoIcon.png";
import styled from "@emotion/styled";
import { Logo } from "../components/logo";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  img {
    margin: auto;
    height: 50px;
    width: 50px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  * {
    margin-top: 50px !important;
  }
`;
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <img src={LogoIcon.src} />
        <Logo />
      </Wrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => router.push("/random-activity")}
          variant={"contained"}
        >
          Random activity
        </Button>
        <Button onClick={() => router.push("/dashboard")} variant={"contained"}>
          Dashboard
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default Home;
