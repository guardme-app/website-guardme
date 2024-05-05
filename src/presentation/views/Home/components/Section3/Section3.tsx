"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { Section3Styles } from "./styles";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import { cardItems } from "./utils/cardItems";

export const Section3: React.FC = () => {
  return (
    <Section3Styles.Container>
      <Container>
        <Grid container flexDirection="column">
          <Section3Styles.Title>Offered insurances</Section3Styles.Title>
          <Grid container flexDirection="row" spacing="7rem">
            {cardItems.map(({ image, alt, title, text }, index) => {
              return (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  flexDirection="column"
                  key={index}
                  justifyContent="center"
                >
                  <Section3Styles.Card>
                    <CardActionArea>
                      <Image
                        src={image}
                        alt={alt}
                        quality={100}
                        width={323}
                        height={175}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Section3Styles.TitleCard>
                            {title}
                          </Section3Styles.TitleCard>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Section3Styles.Content>
                            <span>{text}</span>
                          </Section3Styles.Content>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Section3Styles.Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Section3Styles.Container>
  );
};
