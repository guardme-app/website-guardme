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

const CardContainer = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #eaecf0;
  font-family: "Open Sans", sans-serif;
  flex-direction: column;

  > h1 {
    font-size: 18px;
    margin-top: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #282828;
  }

  > h2 {
    font-size: 14px;
    margin-top: 3px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #3e3e59;
  }

  > p {
    font-size: 14px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    padding: 10px;
    text-align: center;
    margin-top: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #5f6980;
    flex-wrap: wrap;
  }

  > img {
    width: 95%;
    object-fit: contain;
    height: fit-content;
    width: 100%;
  }
`;

export const AboutStyles = {
  Title,
  Container,
  CardContainer,
  Card,
};
