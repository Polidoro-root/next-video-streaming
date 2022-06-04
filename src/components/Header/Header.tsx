import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { FiSearch, FiHome, FiFilm } from 'react-icons/fi'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import NavItem from './NavItem'

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      className={classNames('flex items-center bg-black-full', props.className)}
    >
      <Logo />
      <nav className="flex items-center gap-x-6">
        <NavItem href="/">
          <FiHome />
          Home
        </NavItem>
        <NavItem
          href={{
            query: { filterBy: 'movie' },
          }}
        >
          <FiFilm />
          Movie
        </NavItem>
      </nav>
      <FiSearch />
    </header>
  )
}

export default Header
