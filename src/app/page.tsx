"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import WithSubnavigation from "./nav/nav";
import WithBackgroundImage from "./feature/feature";
import BasicStatistics from "./stats/stats";

import { HStack,Box, Container } from "@chakra-ui/react";
import LargeWithLogoCentered from "./footer/footer";
import CallToActionWithVideo from "./section/seciton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <WithSubnavigation />
      <WithBackgroundImage />
      <BasicStatistics/>
      <CallToActionWithVideo/>
      <LargeWithLogoCentered/>
    </Box>
  );
}
