"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { HousesStyles } from "./styles";
import Image from "next/image";
import houseImg from "@/presentation/assets/houses-screen/houses-screen.png";

export const Houses: React.FC = () => {
  return (
    <HousesStyles.Container>
      <Container $flexDirection="column">
        <HousesStyles.Title>
          <h1>Houses</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </HousesStyles.Title>
        <HousesStyles.ContainerImg>
          <Image
            src={houseImg}
            alt="house"
            quality={100}
            width={1336}
            height={908}
          />
        </HousesStyles.ContainerImg>
        <HousesStyles.Content>
          Secure your sanctuary with GuardMe home insurance. From structural
          damage to losses due to natural disasters, our policies offer
          extensive protection. Tailor your coverage to include additional risks
          like fire and burglary, ensuring that your home and belongings are
          well protected against unforeseen events
        </HousesStyles.Content>
      </Container>
    </HousesStyles.Container>
  );
};
