import { render, screen } from '@testing-library/react'
import { store, StoreProvider } from '../../../src/store'
import { App } from '../../../src/App'

describe('App component', () => {
  test('renders component successfully', () => {
    render(
      <StoreProvider store={store}>
        <App />
      </StoreProvider>,
    )
    expect(screen.getByText(/Load TODOs, now!/i)).toBeTruthy()
  })
})
