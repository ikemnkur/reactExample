import React, { useEffect, useState } from "react";

export default function UseEffectComp() {
  const [todos, setTodos] = useState([]);

  const getTodosFromApi = () => {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };

  useEffect(() => {
    getTodosFromApi().then((fetchedTodos) => setTodos(fetchedTodos));
  }, []);

  return (
    <div>
      {todos.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
            {todos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
