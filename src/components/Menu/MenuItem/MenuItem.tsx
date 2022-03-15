import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import IMenuItem from './MenuItem.types'

const MenuItem: FC<IMenuItem> = ({ href, text }) => {
  const { pathname } = useRouter()

  return (
    <li className={classnames('capitalize hover:text-primary', { 'text-primary': pathname === href })}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default MenuItem
