"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { AboutStyles } from "./styles";
import { cards } from "./utils/cardAbout";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <AboutStyles.Container>
      <Container $flexDirection="column">
        <AboutStyles.Title>
          <h1>Meet the Clonify team</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </AboutStyles.Title>

        <Grid container flexDirection="row" justifyContent="center">
          <AboutStyles.CardContainer>
            {cards.map(({ id, image, name, profession, text }) => {
              return (
                <Grid
                  item
                  lg={3}
                  md={3}
                  xs={12}
                  key={id}
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                >
                  <AboutStyles.Card>
                    <Image
                      src={image}
                      alt="pessoa"
                      width={310}
                      height={230}
                      quality={100}
                    />
                    <h1>{name}</h1>
                    <h2>{profession}</h2>
                    <p>{text}</p>
                  </AboutStyles.Card>
                </Grid>
              );
            })}
          </AboutStyles.CardContainer>
        </Grid>
      </Container>
    </AboutStyles.Container>
  );
};
