import house from "@/presentation/assets/hero/house.png";
import smartphone from "@/presentation/assets/hero/smartphone.png";
import vehicles from "@/presentation/assets/hero/vehicles.png";
import { Dispatch, SetStateAction } from "react";

export const images = [
  {
    id: 0,
    image: vehicles,
    width: 904,
    height: 550,
  },
  {
    id: 1,
    image: house,
    width: 888,
    height: 678,
  },
  {
    id: 2,
    image: smartphone,
    width: 580,
    height: 530,
  },
];

export const handleCarouselChange = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  switch (index) {
    case 0:
      setIndex(index + 1);
      break;
    case 1:
      setIndex(index + 1);
      break;
    case 2:
      setIndex(index - 2);
      break;
  }
};
