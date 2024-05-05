import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 168px 0px 0px 0px;
  z-index: 2;
  background-color: #222831;
`;

const ContainerText = styled.div`
  display: flex;
  width: 100%;
  max-width: 285px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 100px;
  padding: 0.5rem;

  > span {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    background-color: transparent;

    > h1 {
      color: white;
      width: 100%;
      font-family: "Open Sans", sans-serif;
      background-color: transparent;
      font-size: 36px;
      font-weight: 700;
    }

    > p {
      margin-left: 50px;
      color: white;
      width: 100%;
      font-family: "Open Sans", sans-serif;
      background-color: transparent;
      font-size: 20px;
      @media (max-width: 670px) {
        margin-left: 10px;
      }
    }

    > h2 {
      margin-left: 50px;
      color: #7b61ff;
      width: 100%;
      font-family: "Open Sans", sans-serif;
      background-color: transparent;
      font-size: 24px;
      @media (max-width: 670px) {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 670px) {
    gap: 50px;
  }
`;

export const FooterStyles = {
  Container,
  ContainerText,
};
