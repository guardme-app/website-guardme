import styled from "@emotion/styled";
import { colors } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 168px 0px 270px 0px;
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #2d4059;
  margin-bottom: 114px;
`;

const TitleCard = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
`;

const Content = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
  font-weight: 300;
  color: #000000;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const Section3Styles = {
  Container,
  Title,
  TitleCard,
  Content,
  Card,
};
