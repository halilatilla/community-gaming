import { FC } from 'react'
import Link from 'next/link'

import IMenuItem from './MenuItem.types'

const MenuItem: FC<IMenuItem> = ({ href, text }) => {
  return (
    <li className="capitalize hover:underline">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default MenuItem
