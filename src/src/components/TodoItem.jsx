import React from 'react'

export default function TodoItem({ data }) {
  return (
    <li>
      {data.isDone}
      {data.text}
    </li>
  )
}
