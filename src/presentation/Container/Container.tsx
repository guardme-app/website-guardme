"use client";

import styled from "@emotion/styled";

interface IContainerProps {
  $padding?: string;
  $zIndex?: number;
  $flexDirection?: "row" | "column";
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  max-width: 1248px;
  width: -webkit-fill-available;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  padding: ${({ $padding }) => $padding};
  z-index: ${({ $zIndex }) => $zIndex};
  flex-direction: ${({ $flexDirection }) => $flexDirection};

  @media (max-width: 1300px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 500px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0;
  }
`;
