"use client";

import { Container } from "@/presentation/Container/Container";
import { HeaderStyles } from "./styles";
import Link from "next/link";
import logo from "@/presentation/assets/header/logo.png";
import Image from "next/image";
import { Grid } from "@mui/material";
import { menu } from "./utils/menu";
import { Button } from "@/presentation/Button/Button";

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Header>
      <Container $flexDirection="row">
        <Grid container flexDirection="row" alignItems="center">
          <Grid item lg={1} md={1} xs={1} display="flex" alignItems="center">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                quality={100}
                width={147}
                height={52}
              />
            </Link>
          </Grid>
          <Grid item lg={2} md={2} xs={1} display="flex" alignItems="center">
            <HeaderStyles.ContainerNav>
              {menu.map(({ name, link }, index) => {
                return (
                  <HeaderStyles.Nav href={link} key={index}>
                    <p>{name}</p>
                  </HeaderStyles.Nav>
                );
              })}
              <Button.Default>Hire now</Button.Default>
            </HeaderStyles.ContainerNav>
          </Grid>
        </Grid>
      </Container>
    </HeaderStyles.Header>
  );
};
