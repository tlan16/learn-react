/* eslint-disable function-paren-newline */
import deepFreeze from 'deep-freeze'

const ADD_TODO = 'ADD_TODO '

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
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
    reducer(stateBefore, action),
  ).toEqual(stateAfter)
})

