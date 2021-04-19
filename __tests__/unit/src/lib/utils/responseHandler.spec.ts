import { Response } from 'node-fetch'
import { ResponseHandler } from '../../../../../src/lib/utils/responseHandler'

describe('ResponseHelper', () => {
  describe('handle', () => {
    test('success response with json returned', async () => {
      const hadnledResponse = {}
      const resp = {
        status: 200,
        json: () => (hadnledResponse),
        headers: new Map([
          ['content-type', 'application/json'],
        ]),
      }
      const result = await ResponseHandler.handle(resp as unknown as Response)

      expect(result).toEqual(hadnledResponse)
    })

    test('failure response due to 400* status code returned', async () => {
      const hadnledResponse = {
        error: {
          message: 'fail',
        },
      }
      const resp = {
        status: 404,
        json: () => (hadnledResponse),
      }

      await expect(ResponseHandler.handle(resp as unknown as Response)).rejects.toThrow(
        new Error('[ResponseHandler.handle] Error occured due to: fail'),
      )
    })

    test('failure response due to 500* status code returned', async () => {
      const hadnledResponse = {
        error: {
          message: 'fail',
        },
      }
      const resp = {
        status: 500,
        json: () => (hadnledResponse),
      }

      await expect(ResponseHandler.handle(resp as unknown as Response)).rejects.toThrow(
        new Error('[ResponseHandler.handle] Error occured due to: fail'),
      )
    })
  })
})
