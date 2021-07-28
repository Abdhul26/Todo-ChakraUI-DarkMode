import "./App.css";
import { Heading } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const initialTodos = [
    { id: 1, body: "Abdul" },
    { id: 2, body: "Ghani" },
  ];
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <VStack m={2} p={2}>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
          isRound="true"
          alignSelf="flex-end"
          size="lg"
        />
        <Heading
          mb="4"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          _hover={{
            bgGradient: "linear(to-r, green.500, blue.500)",
          }}
        >
          TODO LIST
        </Heading>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </VStack>
    </div>
  );
}

export default App;
