import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <Box px={4}>
      <Flex h={20} pt={5} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontSize="xl" textColor={"red.800"}>
          Abasto
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={10}>
            <Text textColor={"red.800"} fontSize="lg">
              <Link to={'/'}>Mi inventario</Link>
            </Text>

            <Text textColor={"red.800"} fontSize="lg">
              <Link to={'/vender'}>Vender</Link>
            </Text>
            
            <Text textColor={"red.800"} fontSize="lg">
              <Link to={'/fiar'}>Fiar</Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;