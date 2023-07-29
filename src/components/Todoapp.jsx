import React, { useState } from 'react';


const todos = [
        {
          id: Math.random(),
          postText: "Read JS",
          isPostLiked: false,
        },
        {
          id: Math.random(),
          text: "Create todo app",
          isTaskComplete: false,
        },
      ];
      
      const TodoApp = () => {
        const [todoList, setTodoList] = useState(todos);
      
        const [taskInput, setTaskInput] = useState("");
      
        const taskHandler = (e) => {
          setTaskInput(e.target.value);
        };
      
        const addTaskHandler = () => {
          setTodoList((prevTodoList) => {
            return [
              ...prevTodoList,
              {
                id: Math.random(),
                text: taskInput,
                isTaskComplete: false,
              },
            ];
          });
      
          setTaskInput("");
        };
      
        const todoClickHandler = (id) => {
          setTodoList((prevTodoList) => {
            return prevTodoList.map((todo) => {
              if (todo.id === id) {
                todo.isTaskComplete = !todo.isTaskComplete;
              }
              return todo;
            });
          });
        };
      
        return (
          <div className="todoApp">
            <h1>Todo List</h1>
            <h1>Todo App Created By me</h1>
            <div>
              <input type="text" value={taskInput} onChange={taskHandler} />
              <button onClick={addTaskHandler}>Add Task</button>
            </div>
            {todoList.map((todo) => {
              return (
                <p 
                  className={todo.isTaskComplete ? "complete" : "incomplete"} onClick={() => todoClickHandler(todo.id)}>
                  {todo.text}
                </p>
              );
            })}
          </div>
        );
      };
      
      export default TodoApp;
    