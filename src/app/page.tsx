"use client";
import { Inter } from "@next/font/google";
import WithBackgroundImage from "./feature/feature";
import BasicStatistics from "./stats/stats";
import { HStack, Box, Container } from "@chakra-ui/react";
import CallToActionWithVideo from "./section/seciton";
import Teachers from "./teachers/teachers";
import GridBlurredBackdrop from "./student/student";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <WithBackgroundImage />
      <Box px={3}>
        <BasicStatistics />
        <CallToActionWithVideo />
        <GridBlurredBackdrop/>
        <Teachers/>
      </Box>
    </Box>
  );
}
