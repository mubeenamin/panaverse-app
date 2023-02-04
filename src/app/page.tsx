"use client";
import { Inter } from "@next/font/google";
import WithBackgroundImage from "./(component)/feature/feature";
import BasicStatistics from "./(component)/stats/stats";
import { HStack, Box, Container } from "@chakra-ui/react";
import CallToActionWithVideo from "./(component)/section/seciton";
import Teachers from "./(component)/teachers/teachers";
import GridBlurredBackdrop from "./(component)/student/student";

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
