import React, { useRef } from 'react'

export default function TodoForm({ setTodoData }) {
  const inputRef = useRef(null);

  const onTodoSubmit = (event) => {
    event.preventDefault();

    if (!inputRef.current.value) {
      return;
    }

    setTodoData((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputRef.current.value,
        isDone: false
      }
    ])

    inputRef.current.value = "";
  }

  return (
    <form onSubmit={onTodoSubmit}>
      <label htmlFor="todo-input">투두 입력란</label>
      <input ref={inputRef} id="todo-input" type="text" placeholder='Create Todo!' />
    </form>
  )
}
