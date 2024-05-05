"use client";
import { Container } from "@/presentation/Container/Container";
import { HeaderStyles } from "./styles";
import Link from "next/link";
import logo from "@/presentation/assets/header/logo.png";
import Image from "next/image";
import { Grid } from "@mui/material";
import { menu } from "./utils/menu";

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Header>
      <Container $flexDirection="row">
        <Grid container flexDirection="row">
          <Grid item lg={2} md={2} xs={2} display="flex" alignItems="center">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                quality={100}
                width={147}
                height={37}
              />
            </Link>
          </Grid>
          <Grid item lg={2} md={2} xs={2} display="flex" alignItems="center">
            <HeaderStyles.ContainerNav>
              {menu.map(({ name }, index) => {
                return (
                  <HeaderStyles.Nav key={index}>
                    <a>{name}</a>
                  </HeaderStyles.Nav>
                );
              })}
              <HeaderStyles.Button>Hire now</HeaderStyles.Button>
            </HeaderStyles.ContainerNav>
          </Grid>
        </Grid>
      </Container>
    </HeaderStyles.Header>
  );
};
