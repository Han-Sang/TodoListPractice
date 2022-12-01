import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default function Todo() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    console.log(todoData);
  }, [todoData])

  return (
    <>
      <TodoForm setTodoData={setTodoData} />
      <ul>
        {todoData.map((data) =>
          <TodoItem key={data.id} data={data} />
        )}
      </ul>
    </>
  )
}

/*
  [
    {
      id: "아이디",
      text: "투두 내용",
      isDone: "했는지 안했는지"
    }
  ]
*/