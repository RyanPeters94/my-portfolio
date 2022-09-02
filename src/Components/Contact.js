import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
  Container,
  Button,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

const Contact = () => {
  const [contactMessage, setContactMessage] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qd6efjk",
        "template_l27xweg",
        form.current,
        "xhgOTLARvoqUt8BCT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setContactMessage({
            text: "Thank you for your message!",
            message: "We'll follow up shortly!",
          });
          onOpen();
        },
        (error) => {
          console.log(error.text);
          setContactMessage(error);
          onOpen();
        }
      );
  };

  return (
    <Box
      backgroundImage="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1600"
      bgRepeat={"no-repeat"}
      height={"100vh"}
      width={"100vw"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container
        className="input-bg"
        maxW="md"
        py={{
          base: "12",
          md: "24",
        }}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
        borderRadius={".5rem"}
        boxShadow={"0 0 15px 0 black"}
        textColor={"white"}
      >
        <form ref={form}>
          <Stack spacing="8">
            <Stack spacing="6" align="center">
              <Stack spacing="3" textAlign="center">
                <Heading
                  size={useBreakpointValue({
                    base: "xs",
                    md: "sm",
                  })}
                  color={"white"}
                  opacity={"1"}
                >
                  Get in touch
                </Heading>
                <Text color="white">I'd love to hear from you!</Text>
              </Stack>
            </Stack>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl isRequired>
                  <FormLabel htmlFor="name" color={"white"}>
                    Name
                  </FormLabel>
                  <Input
                    name="user_name"
                    id="user_name"
                    type="text"
                    placeholder="Your Name"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    name="user_email"
                    id="user_email"
                    type="email"
                    placeholder="E-mail"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    rows={3}
                    resize="none"
                    name="message"
                    id="message"
                    placeholder="What can we help you with?"
                  />
                </FormControl>
              </Stack>
              <Stack spacing="4">
                <Button
                  variant="primary"
                  bgColor={"blue.600"}
                  _hover={{
                    bg: "blue.400",
                  }}
                  type="submit"
                  onClick={sendEmail}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Container>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{contactMessage.text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} fontWeight={400}>
            <Text fontWeight={400}>{contactMessage.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Contact;
