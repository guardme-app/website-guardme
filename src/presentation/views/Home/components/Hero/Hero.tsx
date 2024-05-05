"use client";

import { Container } from "@/presentation/Container/Container";
import Image from "next/image";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { images, handleCarouselChange } from "./utils/CarouselImg";
import { HeroStyles } from "./styles";
import { Button } from "@/presentation/Button/Button";

export const Hero: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIsChanging(false);
        handleCarouselChange({
          index: carouselIndex,
          setIndex: setCarouselIndex,
        });
      }, 200);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [carouselIndex]);

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
            <HeroStyles.ContainerRight>
              <div>
                <Image
                  src={images[carouselIndex].image}
                  className={isChanging ? "changing" : ""}
                  alt="coins"
                  width={images[carouselIndex].width}
                  height={images[carouselIndex].height}
                  quality={100}
                  style={{ opacity: `${isChanging ? "0" : "1"}` }}
                />
              </div>
            </HeroStyles.ContainerRight>
          </Grid>
        </Grid>
      </Container>
    </HeroStyles.Container>
  );
};
