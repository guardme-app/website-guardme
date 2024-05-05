import styled from "styled-components";
import icon1 from "@/presentation/assets/section-5/icon-name.png";
import icon2 from "@/presentation/assets/section-5/icon-email.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 168px 0px 112px 0px;
  background-color: white;
`;

const BoxBg = styled.div`
  background-color: #efefef;
  width: 100vw;
  height: 348px;
  z-index: 1;
  position: absolute;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  z-index: 0;
  height: 100%;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 488px;
  height: 428px;
  z-index: 2;
  background-color: #fafafa;
  flex-direction: column;
  border-radius: 10px;
  font-family: "Open Sans", sans-serif;
`;

const TextRight = styled.div`
  display: flex;
  margin: 41px 100px 0px 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  > div {
    > h2 {
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      color: #202020;
    }

    > input {
      border: 0;
      border-radius: 10px;
      width: 300px;
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      padding: 14px;

      &::placeholder {
        background: url(${icon1.src}) no-repeat left center;
        background-size: 10%;
        background-position-x: left;
        color: #8a8a9b;
        font-feature-settings: "clig" off, "liga" off;
        font-size: 18px;
        padding-left: 50px;
        font-weight: 400;
      }
    }
  }

  > span {
    > h2 {
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      color: #202020;
    }

    > input {
      border: 0;
      border-radius: 10px;
      width: 300px;
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      padding: 14px;

      &::placeholder {
        background: url(${icon2.src}) no-repeat left center;
        background-size: 10%;
        background-position-x: left;
        color: #8a8a9b;
        font-feature-settings: "clig" off, "liga" off;
        font-size: 18px;
        padding-left: 50px;
        font-weight: 400;
      }
    }
  }
`;

const TextContainer = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #2d4059;
  width: 100%;
  z-index: 4;
  text-align: start;
  flex-wrap: wrap;
  margin-top: 43%;

  > p {
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    color: #8a8a9b;
    margin-top: 5px;
    line-height: 33px;
    font-family: "Open Sans", sans-serif;
  }
`;

export const Section5Styles = {
  Container,
  BoxBg,
  ContainerLeft,
  ContainerRight,
  TextContainer,
  TextRight,
};
