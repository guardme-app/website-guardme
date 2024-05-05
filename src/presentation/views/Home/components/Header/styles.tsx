import styled from "@emotion/styled";
import Link from "next/link";
import { Grid } from "@mui/material";

interface IHeaderItemProps {
  dropdown?: boolean;
  open?: boolean;
  isDisabled?: boolean | undefined;
}

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

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  text-decoration: none;

  > p {
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    cursor: pointer;
    color: #202020;

    :hover {
      text-decoration: underline;
    }
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

  @media (max-width: 1300px) {
    gap: 50px;
  }
`;

const MenuIcon = styled(Grid)<{ isOpen: boolean | undefined }>`
  svg {
    width: 32px;
    min-width: 32px;
    height: 32px;
    min-height: 32px;
    cursor: pointer;
  }

  #menu-hamburguer {
    visibility: ${({ isOpen }) => (!isOpen ? "visible" : "hidden")};
    display: ${({ isOpen }) => (!isOpen ? "flex" : "none")};
  }

  #close-menu {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    z-index: 999;
  }

  right: 1.5rem;
`;

const MenuItems = styled.ul<{ isOpen: boolean | undefined }>`
  margin-top: 6rem;
  list-style: none;
  position: absolute;
  width: 90%;
  background-color: white;
  height: 20rem;
  left: 0;
  right: 0;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0rem;
    color: #202020;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 1px solid #7b61ff;
  }
`;

const MenuItem = styled.li<IHeaderItemProps>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: #202020;
  transition: 0.2s all ease;
  padding: 0.25rem 0.5rem;
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
`;

export const HeaderStyles = {
  Header,
  Nav,
  ContainerNav,
  MenuIcon,
  MenuItems,
  MenuItem,
};
