/* eslint-disable  no-param-reassign */
import {
  Action, action, Thunk, thunk,
} from 'easy-peasy'
import { loadTodos, TTodo } from '../lib/utils/api'

interface ITodosStore {
  todos: TTodo[]
  todosLoaded: boolean
  getTodos: Thunk<ITodosStore>
  setTodos: Action<ITodosStore, TTodo[]>
  setTodosLoaded: Action<ITodosStore, boolean>
}

export const todosStore: ITodosStore = {
  todos: [],
  todosLoaded: false,

  setTodos: action((self, payload) => {
    self.todos = payload
  }),

  setTodosLoaded: action((self, bool) => {
    self.todosLoaded = bool
  }),

  getTodos: thunk(async (actions) => {
    const result = await loadTodos()
    actions.setTodos(result)
    actions.setTodosLoaded(true)
  }),
}
