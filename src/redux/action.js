// action static (hành động tĩnh)
// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 4, name: "Learn Football", completed: false, priority: "Low" },
// };

// action creators ==> function
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
