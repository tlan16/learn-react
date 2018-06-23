/* eslint-disable function-paren-newline */
import deepFreeze from 'deep-freeze'

const ADD_TODO = 'ADD_TODO '
const TOGGLE_TODO = 'TOGGLE_TODO '

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }

    case TOGGLE_TODO:
      return {
        ...state,
        completed: state.id === action.id,
      }

    default:
      return state
  }
}

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(undefined, action),
      ]

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action))

    default:
      return state
  }
}

test('testAddTodo', () => {
  const stateBefore = []

  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Learn redux',
  }

  const stateAfter = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todosReducer(stateBefore, action),
  ).toEqual(stateAfter)
})

test('testToggleTodo', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ]

  const action = {
    type: TOGGLE_TODO,
    id: 1,
  }

  const stateAfter = [
    {
      id: 0,
      text: 'Learn redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true,
    },
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todosReducer(stateBefore, action),
  ).toEqual(stateAfter)
})
