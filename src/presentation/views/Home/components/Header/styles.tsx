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

export const HeaderStyles = {
  Header,
  Nav,
  ContainerNav,
};
