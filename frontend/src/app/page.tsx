"use client"
import Board from "./board"

export default function Home() {
  const boardData = [
    {
      id: 'column-todo',
      title: "To do",
      cards: [
        {
          id: 'card-1', title: 'Task 1', description: 'Details for task 1...'
        },
        {
          id: 'card-2', title: 'Task 2', description: 'Details for task 2...'
        }
      ]
    }, {
      id: 'column-doing',
      title: "Doing",
      cards: [
        {
          id: 'card-1', title: 'Task 1', description: 'Details for task 1...'
        },
        {
          id: 'card-2', title: 'Task 2', description: 'Details for task 2...'
        }
      ]
    }
  ]

  return <Board />

}
