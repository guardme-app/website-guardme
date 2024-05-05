"use client";

import { Container } from "@/presentation/Container/Container";
import { Grid } from "@mui/material";
import { SmartphonesStyles } from "./styles";
import Image from "next/image";
import cellImg from "@/presentation/assets/smartphones-screen/cell-screen.png";

export const Smartphones: React.FC = () => {
  return (
    <SmartphonesStyles.Container>
      <Container $flexDirection="column">
        <SmartphonesStyles.Title>
          <h1>Smartphones</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </SmartphonesStyles.Title>
        <SmartphonesStyles.ContainerImg>
          <Image
            src={cellImg}
            alt="smartphone"
            quality={100}
            width={1336}
            height={908}
          />
        </SmartphonesStyles.ContainerImg>
        <SmartphonesStyles.Content>
          Aqui ainda vou colocar um exemplo, porque ainda não pensei em nada
          dwnadnwndwdakdnwkdadwkkkkkkkkkkkkkkkkkkkkk
        </SmartphonesStyles.Content>
      </Container>
    </SmartphonesStyles.Container>
  );
};
