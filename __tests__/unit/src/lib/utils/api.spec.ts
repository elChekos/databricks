import nock from 'nock'
import { loadTodos } from '../../../../../src/lib/utils/api'
import { ResponseHandler } from '../../../../../src/lib/utils/responseHandler'
import { jsonPlaceholderTodosMock } from '../../../../mocks/apiResponse'

describe('API', () => {
  beforeEach(() => {
    /* mock json placeholder endpoints */
    nock('https://www.example.com')
    /* mock /todos endpoint */
      .get('/todos')
      .reply(200, jsonPlaceholderTodosMock.responses.todos)
  })
  const handleSpy = jest.spyOn<any, any>(ResponseHandler, 'handle')

  describe('loadTodos', () => {
    test('successfully executed', async () => {
      const result = await loadTodos()

      expect(handleSpy).toHaveBeenCalledTimes(1)
      expect(result).toEqual(jsonPlaceholderTodosMock.responses.todos)
    })
  })
})
