import { createContext, useContext } from "react";

// creating context with default values
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Task 1",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

})

// creating a hook with whcih we can directly access the context methods and variables
export const useTodo = () => {
    return useContext(TodoContext)
}

// creating Provider
export const TodoProvider = TodoContext.Provider