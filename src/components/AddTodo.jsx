import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Content.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  };
  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack m="8">
        <Input
          variant="filled"
          placeholder="Add Your ToDos Here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="green" type="submit" px="8">
          Add ToDo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
