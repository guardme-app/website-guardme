"use client";

import { Container } from "@/presentation/Container/Container";
import { HeaderStyles } from "./styles";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/presentation/assets/header/logo.png";
import Image from "next/image";
import { Grid } from "@mui/material";
import { menu } from "./utils/menu";
import { Button } from "@/presentation/Button/Button";
import MenuHamburguer from "@/presentation/assets/header/menu-hamburguer.png";
import CloseMenu from "@/presentation/assets/header/close-menu.png";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Grid
            item
            lg={2}
            md={2}
            xs={1}
            sx={{ display: { xs: "none", md: "flex" } }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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

        <HeaderStyles.MenuIcon
          isOpen={isOpen}
          item
          sx={{ display: { md: "none", xs: "flex" } }}
          xs={1.5}
          justifyContent="flex-end"
        >
          <Image
            src={MenuHamburguer}
            id="menu-hamburguer"
            alt="menu hamburguer"
            width={37}
            height={37}
            quality={100}
            onClick={() => setIsOpen(true)}
          />
          <Image
            src={CloseMenu}
            id="close-menu"
            alt="Close menu"
            width={37}
            height={37}
            quality={100}
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <HeaderStyles.MenuItems isOpen={isOpen}>
            {menu.map(({ name, link }) => {
              return (
                <HeaderStyles.MenuItem key={name}>{name}</HeaderStyles.MenuItem>
              );
            })}
          </HeaderStyles.MenuItems>
        </HeaderStyles.MenuIcon>
      </Container>
    </HeaderStyles.Header>
  );
};
