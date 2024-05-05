import styled from "@emotion/styled";

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6.25rem;
  flex-direction: row;
  z-index: 11;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;

  > a {
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    cursor: pointer;
  }

  :first-child {
    margin-left: 100px;
  }
`;

const ContainerNav = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: nowrap;
  width: 100%;
`;

const Button = styled.button`
  white-space: nowrap;
  padding: 10px 35px;
  background-color: #7b61ff;
  border-radius: 8px;
  border: 0;
  font-size: "Open Sans", sans-serif;
  font-size: 22px;
  color: white;
  width: 100%;
  cursor: pointer;

  :hover {
    background-color: #6551c7;
  }
`;

export const HeaderStyles = {
  Header,
  Nav,
  Button,
  ContainerNav,
};
