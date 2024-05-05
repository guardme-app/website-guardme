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
          Aqui ainda vou colocar um exemplo, porque ainda não pensei em nada
        </HousesStyles.Content>
      </Container>
    </HousesStyles.Container>
  );
};
