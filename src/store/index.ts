import {
  StoreProvider, createStore, createTypedHooks, persist,
} from 'easy-peasy'
import { todosStore } from './todosStore'

export { StoreProvider }

const storeModel = persist(
  {
    todos: todosStore,
  },
  { storage: 'localStorage' },
)

export const { useStoreActions, useStoreState } = createTypedHooks<typeof storeModel>()

export const store = createStore(storeModel)
