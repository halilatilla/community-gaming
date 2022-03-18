import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import IMenuItem from './MenuItem.types'

const MenuItem: FC<IMenuItem> = ({ href, text, Icon }) => {
  const { pathname } = useRouter()

  return (
    <li className={classnames('capitalize hover:text-primary', { 'text-primary': pathname === href })}>
      <Link href={href} prefetch={false}>
        <a className="flex flex-col items-center space-y-2 md:space-y-0">
          {/* @ts-ignore */}
          <Icon className="text-lg md:hidden" />
          <span className="text-sm md:text-base">{text}</span>
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
