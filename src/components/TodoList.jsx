import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge
        variant="solid"
        colorScheme="red"
        m="20px"
        p="2"
        borderRadius="xl"
        fontWeight="bold"
      >
        OOPS NO TODO ADDED HERE!!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="red.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "70vw", lg: "50vw", xl: "30vw" }}
      alignItems="strech"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            inlineSize="1"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
