export const apiHost = 'https://www.example.com'

export const jsonPlaceholderTodosMock = {
  apiHost,
  args: {
    default: {
      apiHost,
    },
    withoutApiHost: {
      apiHost: '',
    },
  },
  requests: {},
  responses: {
    todos: {
      data: {},
      status: 200,
      success: true,
    },
  },
}
