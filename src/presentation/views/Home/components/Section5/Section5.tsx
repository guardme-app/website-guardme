"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { Section5Styles } from "./styles";
import { Button } from "@/presentation/Button/Button";

export const Section5: React.FC = () => {
  return (
    <Section5Styles.Container>
      <Section5Styles.BoxBg />
      <Container>
        <Grid container>
          <Grid item lg={7} md={7} xs={12}>
            <Section5Styles.ContainerLeft>
              <Section5Styles.TextContainer>
                Stay in touch with us.
                <p>Send us a message</p>
              </Section5Styles.TextContainer>
            </Section5Styles.ContainerLeft>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={5} md={5} xs={12} zIndex={2}>
            <Section5Styles.ContainerRight>
              <Section5Styles.TextRight>
                <div>
                  <h2>Your Name</h2>
                  <input placeholder="Complete Name" type="text" />
                </div>
                <span>
                  <h2>Your E-mail</h2>
                  <input placeholder="Your E-mail  address" type="email" />
                </span>
                <Button.Default>Subscribe</Button.Default>
              </Section5Styles.TextRight>
            </Section5Styles.ContainerRight>
          </Grid>
        </Grid>
      </Container>
    </Section5Styles.Container>
  );
};
