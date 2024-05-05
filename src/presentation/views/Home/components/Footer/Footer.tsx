"use client";

import { Container } from "@/presentation/Container/Container";
import { FooterStyles } from "./styles";
import { Grid } from "@mui/material";
import Link from "next/link";

import logoFooter from "@/presentation/assets/footer/icon-footer.png";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <FooterStyles.Container>
      <Container $flexDirection="column">
        <Grid container>
          <FooterStyles.ContainerText>
            <span>
              <Image
                src={logoFooter}
                alt="logo"
                quality={100}
                width={75}
                height={107}
              />
              <h1>Hire the best insurance</h1>
            </span>
          </FooterStyles.ContainerText>
          <FooterStyles.ContainerText>
            <span>
              <p>Home</p>
              <p>Vehicles</p>
              <p>Houses</p>
              <p>Smartphones</p>
            </span>
          </FooterStyles.ContainerText>
          <FooterStyles.ContainerText>
            <span>
              <h2>Promo</h2>
              <p>10% off</p>
            </span>
          </FooterStyles.ContainerText>
          <FooterStyles.ContainerText>
            <span>
              <h2>Suporte</h2>
              <p>Help Center</p>
              <p>Send us an email</p>
              <p>Careers</p>
            </span>
          </FooterStyles.ContainerText>
        </Grid>
      </Container>
    </FooterStyles.Container>
  );
};
