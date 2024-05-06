import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 168px 0px 112px 0px;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  > h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 54px;
    font-weight: 600;
    color: #282828;
  }

  > p {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #5f6980;
  }
`;

const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
  height: 100%;

  > img {
    border-radius: 15px;
  }
`;

const Content = styled.h3`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  font-size: 40px;
  flex-wrap: wrap;
  margin-top: 80px;
  font-weight: 300;
  color: black;
`;

export const HousesStyles = {
  Title,
  Container,
  ContainerImg,
  Content,
};
