import { FC } from 'react'
import classnames from 'classnames'

import { MENU_ITEMS } from '@src/config/constants'
import MenuItem from './MenuItem/MenuItem'
import IMenu from './Menu.types'
import styles from './Menu.module.css'

const Menu: FC<IMenu> = ({ className, ...rest }) => {
  return (
    <ul className={classnames('flex-center', styles.menu, className)} {...rest}>
      {MENU_ITEMS.map(({ href, text, Icon }) => (
        <MenuItem key={text} href={href} text={text} Icon={Icon} />
      ))}
    </ul>
  )
}

export default Menu
