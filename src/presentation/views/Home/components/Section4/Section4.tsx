"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { Section4Styles } from "./styles";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { cards } from "./utils/cards";

export const Section4: React.FC = () => {
  return (
    <Section4Styles.Container>
      <Section4Styles.Light />
      <Container>
        <Grid container flexDirection="column">
          <Section4Styles.Title>Why use GuardMe ?</Section4Styles.Title>

          <Grid container flexDirection="row" spacing="6rem">
            {cards.map(({ id, image, width, alt, title, text }) => {
              return (
                <Grid
                  item
                  lg={4}
                  md={4}
                  xs={12}
                  flexDirection="column"
                  key={id}
                  justifyContent="center"
                >
                  <Section4Styles.Card>
                    <Image
                      src={image}
                      alt={alt}
                      quality={100}
                      width={width}
                      height={71}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Section4Styles.TitleCard>
                          {title}
                        </Section4Styles.TitleCard>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Section4Styles.Content>
                          <span>{text}</span>
                        </Section4Styles.Content>
                      </Typography>
                    </CardContent>
                  </Section4Styles.Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Section4Styles.Container>
  );
};
