import { Response } from 'node-fetch'

export class ResponseHandler {
  /**
    * Handles response data from fetch request and returns either data or throws an error
    */
  static async handle(response: Response): Promise<any | Error> {
    if (response.status === 401 || response.status === 404) {
      const { error } = await response.json()

      throw new Error(`[ResponseHandler.handle] Error occured due to: ${error.message as string}`)
    } else if (response.status >= 500) {
      const { error } = await response.json()

      throw new Error(`[ResponseHandler.handle] Error occured due to: ${error.message as string}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json()
    }
    return response.text()
  }
}
