import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import { useRouter } from 'next/router'

interface NavItemProps extends LinkProps {
  className?: HTMLAttributes<HTMLDivElement>['className']
  children: ReactNode
}

const NavItem = (props: NavItemProps) => {
  const router = useRouter()

  const isFilterActive = router.query?.filterBy === props.href?.query?.filterBy

  return (
    <Link {...props}>
      <li
        className={classNames(
          'flex items-center justify-center gap-x-2 font-base font-semibold transition-colors duration-300 cursor-pointer',
          {
            'text-black-100': !isFilterActive,
            'text-white': isFilterActive,
          },
          props.className
        )}
      >
        {props.children}
      </li>
    </Link>
  )
}

export default NavItem
