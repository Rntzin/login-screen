"use client";

import { Avatar, AvatarBadge, AvatarGroup, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
// import { useUser } from "../authenticate/usecontext";

const user = {
  name: "Twopac",
  email: "aff@az.io",
};

const Dashboard: React.FC = () => {
  //   const { setUser, user } = useUser();
  return (
    <Flex
      bgColor="green.100"
      justify="center"
      w="100vw"
      h="100vh"
      alignItems="center"
    >
      <Avatar
        name="Dan Abrahmov"
        src="https://avatars.githubusercontent.com/u/168228103?v=4"
        size="xl"
      />
    </Flex>
  );
};

export default Dashboard;
