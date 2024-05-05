"use client";

import { Container } from "@/presentation/Container/Container";
import Image from "next/image";
import { Grid } from "@mui/material";
import { HeroStyles } from "./styles";
import { Button } from "@/presentation/Button/Button";

export const Hero: React.FC = () => {
  return (
    <HeroStyles.Container>
      <Container>
        <Grid container>
          <Grid item lg={6} md={12} xs={12} style={{ zIndex: 1 }}>
            <HeroStyles.ContainerLeft>
              <h1>The decentralized insurance you need for RWA.</h1>
              <p>
                With us, there is no bureaucracy, create an account and hire in
                less than 3 minutes
              </p>
              <Button.Default>Hire Now</Button.Default>
            </HeroStyles.ContainerLeft>
          </Grid>
          <Grid
            item
            md={12}
            lg={6}
            xs={12}
            style={{ zIndex: 1 }}
            display="flex"
            justifyContent="flex-end"
          >
            <HeroStyles.ContainerRight></HeroStyles.ContainerRight>
          </Grid>
        </Grid>
      </Container>
    </HeroStyles.Container>
  );
};
