import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { FiSearch, FiHome, FiFilm } from 'react-icons/fi'
import { FaTheaterMasks } from 'react-icons/fa'
import { MdLiveTv, MdOndemandVideo } from 'react-icons/md'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import NavItem from './NavItem'

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header = (props: HeaderProps) => {
  return (
    <header
      className={classNames(
        'flex items-center bg-black-full lg:px-16 lg:py-6 w-full',
        props.className
      )}
    >
      <Logo className="xs:w-20 xs:h-6 lg:w-40 lg:h-12 xs:mr-auto lg:mr-8 xl:mr-16" />
      <nav className="xs:hidden lg:flex items-center mr-auto">
        <ul className="flex items-center xs:gap-x-3 xl:gap-x-6">
          <NavItem href="/">
            <FiHome />
            Home
          </NavItem>
          <NavItem
            href={{
              query: { filterBy: 'movies' },
            }}
          >
            <FiFilm />
            Movies
          </NavItem>
          <NavItem
            href={{
              query: { filterBy: 'series' },
            }}
          >
            <FaTheaterMasks />
            Series
          </NavItem>
          <NavItem
            href={{
              query: { filterBy: 'music-video' },
            }}
          >
            <MdOndemandVideo />
            Music Video
          </NavItem>
          <NavItem
            href={{
              query: { filterBy: 'live-show' },
            }}
          >
            <MdLiveTv />
            Live show
          </NavItem>
        </ul>
      </nav>
      <FiSearch className="text-white xs:w-4 xs:h-4 lg:w-5 lg:h-5 xs:mr-4 lg:mr-6 xl:mr-14 cursor-pointer" />
      <button className="flex items-center justify-center bg-primary xs:px-3 xs:py-0.5 lg:py-3 lg:px-6 xs:text-xs lg:text-base rounded-sm text-white font-semibold transition-colors duration-300 hover:bg-opacity-80">
        Sign In
      </button>
    </header>
  )
}

export default Header
