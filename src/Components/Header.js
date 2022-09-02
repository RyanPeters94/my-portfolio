import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  chakra,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../imports";
import { images } from "../IMAGE_COMPONENTS";

const HamburgerIcon = (props) => (
  <svg
    viewBox="0 0 80 62"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M80 0H0V6H80V0Z"></path>
    <path d="M80 28H0V34H80V28Z"></path>
    <path d="M80 56H0V62H80V56Z"></path>
  </svg>
);

const NavItem = (props) => <Box as="a" href="#" fontSize="sm" {...props} />;

const Logo = (props) => (
  <chakra.svg
    fill="accent"
    height="8"
    width="auto"
    viewBox="0 0 89 89"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
    />
  </chakra.svg>
);

const Header = () => {
  const nav = useDisclosure();
  const ref = React.useRef(null);
  return (
    <Box as="header" pb="20">
      <Box borderBottomWidth="1px" px="4" bg="bg-surface">
        <Flex align="center" justify="space-between" height="8rem">
          <Link
            to="/home"
            style={{
              h: "100px",
              w: "100px",
            }}
          >
            <Image src={images.Logo} h="160px" w="160px"></Image>
          </Link>
          <HStack spacing="2">
            <IconButton
              as="a"
              href="https://github.com/RyanPeters94"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/ryan-ben-peters"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              size="sm"
              variant="ghost"
              icon={<HamburgerIcon />}
              aria-label="Toggle menu"
              {...nav.getButtonProps()}
            />
          </HStack>
        </Flex>
      </Box>

      <Flex
        ref={ref}
        justify="center"
        align="center"
        initial={false}
        hidden={!nav.isOpen}
        aria-label="Submenu"
        bg="bg-surface"
        height="16"
        borderBottomWidth="1px"
        position="absolute"
        width="full"
        top="4.5rem"
        zIndex={-1}
        as={motion.nav}
        variants={{
          open: {
            y: "0",
            transition: {
              ease: [0.75, 0, 0.25, 1],
            },
          },
          closed: {
            y: "-100%",
          },
        }}
        animate={nav.isOpen ? "open" : "closed"}
        onAnimationStart={() => {
          ref.current?.removeAttribute("hidden");
        }}
        onAnimationComplete={() => {
          if (!ref.current) return;
          ref.current.hidden = !nav.isOpen;
        }}
      >
        <HStack spacing="6">
          <NavItem color="accent" fontWeight="semibold"></NavItem>
          <NavItem>My Portfolio</NavItem>
          <NavItem>About Me</NavItem>
          <NavItem>Resume</NavItem>
        </HStack>
      </Flex>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
};
export default Header;
