import styled from "styled-components";
import bgRight from "@/presentation/assets/hero/bg-hero.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 68px;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Open Sans", sans-serif;

  > h1 {
    color: #2d4059;
    font-size: 59px;
    font-weight: 800;
    line-height: 80px;
  }

  > p {
    color: #8a8a9b;
    font-size: 18px;
    line-height: 33px;
    max-width: 438px;
    margin-top: -28px;
  }
`;

const ContainerRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${bgRight.src}) no-repeat center center/contain;
  background-size: 80%;
  height: 590px;

  > div {
    display: flex;
    width: 100%;

    > img {
      object-fit: contain;
      height: fit-content;
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    height: 590px;
    background-size: 62%;
  }
`;

export const HeroStyles = {
  Container,
  ContainerLeft,
  ContainerRight,
};
