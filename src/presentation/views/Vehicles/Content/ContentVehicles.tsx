"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { VehiclesStyles } from "./styles";
import Image from "next/image";
import carImg from "@/presentation/assets/vehicles-screen/car.png";

export const Vehicles: React.FC = () => {
  return (
    <VehiclesStyles.Container>
      <Container $flexDirection="column">
        <VehiclesStyles.Title>
          <h1>Vehicles</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </VehiclesStyles.Title>
        <VehiclesStyles.ContainerImg>
          <Image
            src={carImg}
            alt="car"
            quality={100}
            width={1336}
            height={908}
          />
        </VehiclesStyles.ContainerImg>
        <VehiclesStyles.Content>
          Aqui ainda vou colocar um exemplo, porque ainda não pensei em nada
        </VehiclesStyles.Content>
      </Container>
    </VehiclesStyles.Container>
  );
};
