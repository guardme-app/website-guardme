import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 168px 0px 270px 0px;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #2d4059;
  margin-bottom: 114px;
  z-index: 2;
`;

const TitleCard = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  color: #000000;
  z-index: 2;
`;

const Content = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1.375rem;
  font-weight: 300;
  color: #000000;
  z-index: 2;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 0;
  flex-direction: column;
  background-color: #efefef;
  border-radius: 10px;
  padding: 1rem;
  z-index: 2;

  :hover {
    -webkit-box-shadow: 0px 0px 48px -7px rgba(123, 97, 255, 0.5);
    -moz-box-shadow: 0px 0px 48px -7px rgba(123, 97, 255, 0.5);
    box-shadow: 0px 0px 48px -7px rgba(123, 97, 255, 0.5);
  }
`;

const Light = styled.div`
  position: absolute;
  width: 27.07rem;
  height: 25.07rem;
  flex-shrink: 0;
  margin-top: 20%;
  border-radius: 42.07rem;
  opacity: 0.5;
  background: #7b61ff;
  filter: blur(240px);
  z-index: 1;
  margin-top: -53%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Section4Styles = {
  Container,
  Title,
  TitleCard,
  Content,
  Card,
  Light,
};
