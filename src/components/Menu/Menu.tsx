import { FC } from 'react'
import classnames from 'classnames'

import { MENU_ITEMS } from '@src/config/constants'
import MenuItem from './MenuItem/MenuItem'
import IMenu from './Menu.types'

const Menu: FC<IMenu> = ({ className, ...rest }) => {
  return (
    <ul className={classnames('flex-center space-x-3', className)} {...rest}>
      {MENU_ITEMS.map(({ href, text }) => (
        <MenuItem key={text} href={href} text={text} />
      ))}
    </ul>
  )
}

export default Menu
