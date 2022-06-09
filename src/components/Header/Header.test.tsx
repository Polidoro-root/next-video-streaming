import { render, fireEvent } from '@testing-library/react'
import singletonRouter from 'next/router'
import Header from './Header'

import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/dist/client/router', () => require('next-router-mock'))

const filterByQueryParams = [
  { link: 'movies', text: 'Movies' },
  { link: 'series', text: 'Series' },
  { link: 'music-video', text: 'Music Video' },
  { link: 'live-show', text: 'Live Show' },
]

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

    expect(singletonRouter).toMatchObject({ pathname: '/' })
  })

  describe('Navbar routing', () => {
    filterByQueryParams.forEach((filterBy) => {
      it(`Should set query params to filterBy=${filterBy.link} when ${filterBy.text} be clicked`, () => {
        const { getByText } = render(<Header />)

        const text = RegExp(filterBy.text, 'i')

        const linkElement = getByText(text)

        fireEvent.click(linkElement)

        expect(singletonRouter).toMatchObject({
          query: {
            filterBy: filterBy.link,
          },
        })
      })
    })
  })
})
