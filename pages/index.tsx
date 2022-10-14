import type { NextPage } from "next";
import LogoIcon from "../styles/LogoIcon.png";
import styled from "@emotion/styled";
import { Logo } from "../components/logo";
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

const Scene = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Montserrat, "Noto Sans Arabic", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  background: rgb(213, 104, 0);

  span:last-child {
    font-family: "Alfa Slab One", cursive;
    margin: 0 auto 200px;
    color: rgb(101, 48, 4);
    font-size: 40px;
  }
`;

const Element = styled.div`
  position: fixed;
  background-color: rgb(0, 0, 0);
  transform: rotate(45deg);
  opacity: 0.1;
  top: -15vmin;
  left: -15vmin;
  min-width: 75vmin;
  min-height: 75vmin;
`;

const Circle = styled.div`
  position: fixed;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  opacity: 0.1;
  min-width: 75vmin;
  min-height: 75vmin;
  bottom: -15vmin;
  right: -15vmin;
`;

const Home: NextPage = () => {
  return (
    <Scene>
      <Element />
      <Circle />
      <Wrapper>
        <img src={LogoIcon.src} />
        <Logo />
      </Wrapper>
      <span>COMING SOON</span>
    </Scene>
  );
};

export default Home;
