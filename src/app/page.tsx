"use client";
import { Inter } from "@next/font/google";
import WithBackgroundImage from "./feature/feature";
import BasicStatistics from "./stats/stats";
import { HStack, Box, Container } from "@chakra-ui/react";
import CallToActionWithVideo from "./section/seciton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <WithBackgroundImage />
      <Box px={3}>
        <BasicStatistics />
        <CallToActionWithVideo />
      </Box>
    </Box>
  );
}
