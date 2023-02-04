import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    chakra,
  } from '@chakra-ui/react';
  


  import "animate.css";
  import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Teachers(){
    return(
      <Stack mb={24}> <chakra.h1
      textAlign={"center"}
      fontSize={"4xl"}
      py={2}
      mb={6}      
      fontWeight={"bold"}
    >
      Our Teachers
    </chakra.h1>
        <Stack spacing={"24px"} direction={{base:"column", md:"row"}} justifyContent="center" align={"center"} >
         
        <AnimationOnScroll animateIn='animate__rollIn'>
      <Box
      
        maxW={'270px'}
        w={'270px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          alt={'Author'}
          w={'full'}
          src={
            'bg.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              '/sir zia.jpg'
            }
            
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Zia Khan
            </Heading>

          </Stack>
        </Box>
        
      </Box>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__rollIn'>
      <Box
        maxW={'270px'}
        w={'270px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          alt={'Author'}
          w={'full'}
          src={
            '/bg8.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              '/ms hira.jpg'
            }
            
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Hira Khan
            </Heading>

          </Stack>
        </Box>
      </Box>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__rollIn'>
      <Box
        maxW={'270px'}
        w={'270px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          alt={'Author'}
          w={'full'}
          src={
            '/bg6.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              '/adil altaf 1.jpg'
            }
            
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Adil Altaf
            </Heading>

          </Stack>
        </Box>
      </Box>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__rollIn'>
      <Box
        maxW={'270px'}
        w={'270px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          alt={'Author'}
          w={'full'}
          src={
            '/bg7.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              '/zeeshan hanif.jpg'
            }
            
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Zeeshan Hanif
            </Heading>

          </Stack>
        </Box>
      </Box>
      </AnimationOnScroll>
    </Stack>
    </Stack>   
    )
}