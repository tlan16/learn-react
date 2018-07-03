import uuid from 'uuid/v4'

const generateTodo = () => (
  {
    id: uuid(),
    text: Math.random().toString(36).substring(7),
    completed: Math.random() >= 0.5,
  }
)

const n = 3
const fakeDatabase = {
  todos: Array.from(Array(n)).map(generateTodo),
}

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = async (filter) => {
  await delay(500)
  switch (filter) {
    default:
    case 'all':
      return fakeDatabase.todos
    case 'active':
      return fakeDatabase.todos.filter(t => !t.completed)
    case 'completed':
      return fakeDatabase.todos.filter(t => t.completed)
  }
}
