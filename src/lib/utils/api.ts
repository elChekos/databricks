import { THIRD_PARTY_API } from '../../common/constants'
import { ResponseHandler } from './responseHandler'

export type TTodo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

/**
 * Wrapper around fetch to get todos list
 */
export async function loadTodos(): Promise<TTodo[]> {
  const resp = await fetch(`${THIRD_PARTY_API.JSON_PLACEHOLDER.URI}/todos`, {
    method: 'GET',
  })
  return ResponseHandler.handle(resp)
}
