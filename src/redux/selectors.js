// Viết ra một hàm riêng để tránh lặp đi lặp lại code
// includes(): luôn trả về true cho một chuỗi rỗng
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(searchText.toLowerCase());
//   });
//   return todoRemaining;
// };

import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
// Có thể dùng thư viện reselect có sẵn trong react tool kit hoặc tải về từ bên ngoài

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        console.log({ status });
        return todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
