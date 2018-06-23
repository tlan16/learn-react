/* eslint-disable function-paren-newline */
import deepFreeze from 'deep-freeze'
import { createStore } from 'redux'

// actions
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// default visibility filter
const SHOW_ALL = 'SHOW_ALL'

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

const visibilityReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const appReducer = (state = {}, action) => ({
  // state.todos initially is undefined,
  // so the todosReducer fills in the default state value of empty array
  todos: todosReducer(state.todos, action),
  visibilityFilter: visibilityReducer(state.visibilityFilter, action),
})

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

test('testAppInitialState', () => {
  const store = createStore(appReducer)

  const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
  }

  expect(
    store.getState(),
  ).toEqual(initialState)
})

test('testAppAddTodo', () => {
  const store = createStore(appReducer)
  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Learn redux',
  }

  store.dispatch(action)

  const state = {
    todos: [{
      id: 0,
      text: 'Learn redux',
      completed: false,
    }],
    visibilityFilter: 'SHOW_ALL',
  }

  expect(
    store.getState(),
  ).toEqual(state)
})
