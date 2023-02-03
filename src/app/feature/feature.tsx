"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';


export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(/bg2.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'center'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'lg'} align={'flex-start'} spacing={6} >
         
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Learn State of the art Technology with us
          </Text>
         
          <Stack direction={'row'}>
            <Button
              bg={'purple.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'red.400' }}>
              Show me more
            </Button>
           
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}