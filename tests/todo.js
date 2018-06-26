/* eslint-disable function-paren-newline */
import deepFreeze from 'deep-freeze'
import { ADD_TODO, TOGGLE_TODO } from '../src/todo/actions'
import store from '../src/store'
import { initialState as visibilityInitialState } from '../src/todo/reducers/visibility'
import todosReducer, { initialState as todosInitialState } from '../src/todo/reducers/todos'

test('testAddTodo', () => {
  const stateBefore = []

  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Learn redux',
  }

  const stateAfter = [
    {
      id: action.id,
      text: action.text,
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
      ...stateBefore[0],
    },
    {
      ...stateBefore[1],
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
  const initialState = {
    todos: todosInitialState,
    visibilityFilter: visibilityInitialState,
  }

  expect(
    store.getState(),
  ).toEqual(initialState)
})

test('testAppAddTodo', () => {
  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Learn redux',
  }

  store.dispatch(action)

  const state = {
    todos: [{
      id: action.id,
      text: action.text,
      completed: false,
    }],
    visibilityFilter: visibilityInitialState,
  }

  expect(
    store.getState(),
  ).toEqual(state)
})
