import { render, renderHook } from '@testing-library/react'
import singletonRouter from 'next/router'
import NextLink from 'next/link'
import userEvent from '@testing-library/user-event'
import Header from './Header'

import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Page Header component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })

  it('Should be rendered', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })

  it('Should start on the root path', () => {
    render(<Header />)

    expect(location.pathname).toBe('/')
  })

  it('Should set query params to filterBy=movies', () => {
    const { getByText } = render(<Header />)

    const moviesLink = getByText(/movies/i)

    userEvent.click(moviesLink)

    console.log(singletonRouter)

    expect(singletonRouter).toMatchObject({
      query: {
        filterBy: 'movies',
      },
    })
  })
})
