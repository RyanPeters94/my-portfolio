import {
  Box,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
  HStack,
  Image,
} from "@chakra-ui/react";
import "./Home.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../IMAGE_COMPONENTS";
import Contact from "../Contact";

function Home() {
  let navigate = useNavigate();

  return (
    <Box
      className="home-page"
      height={"100vh"}
      width={"100vw"}
      maxWidth={"100vw"}
    >
      <Box
        as="section"
        bg={mode("gray.50", "gray.800")}
        pb="3rem"
        pos="relative"
        px={{
          base: "3",
          lg: "3",
        }}
        borderBottomWidth="1px"
      >
        <Box maxW="7xl" mx="auto">
          <Box
            maxW={{
              lg: "md",
              xl: "xl",
            }}
            pt={{
              base: "20",
              lg: "40",
            }}
            pb={{
              base: "16",
              lg: "24",
            }}
          >
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1"
              fontWeight="extrabold"
              letterSpacing="tight"
              display={"flex"}
              textAlign="center"
            >
              Software Engineer, Front-End Developer, & Designer{" "}
            </Heading>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              spacing="4"
              mt="8"
            ></Stack>
          </Box>
        </Box>
        <Box
          pos={{
            lg: "absolute",
          }}
          insetY={{
            lg: "0",
          }}
          insetEnd={{
            lg: "0",
          }}
          bg="gray.50"
          w={{
            base: "full",
            lg: "50%",
          }}
          height={{
            base: "96",
            lg: "full",
          }}
          sx={{
            clipPath: {
              lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
          }}
          borderBottomWidth="1px"
        >
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src={images.MainPage}
            alt="Profile Image"
            rounded={"lg"}
          />
        </Box>
      </Box>

      {/* Section Break -- About Me */}

      {/* Section Break -- Contact Form */}
      <Contact />
      <HStack display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image src={images.Logo} h="160px" w="160px"></Image>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Ryan Peters
        </Text>
      </HStack>
    </Box>
  );
}
export default Home;
