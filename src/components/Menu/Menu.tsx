import { FC } from 'react'
import classnames from 'classnames'

import { MENU_ITEMS } from '@src/config/constants'
import MenuItem from './MenuItem/MenuItem'
import IMenu from './Menu.types'

const Menu: FC<IMenu> = ({ className, ...rest }) => {
  return (
    <ul
      className={classnames(
        'flex-center fixed bottom-0 left-0 right-0 z-50 h-16 space-x-3 bg-dark md:relative md:h-auto md:bg-transparent ',
        className,
      )}
      {...rest}
    >
      {MENU_ITEMS.map(({ href, text }) => (
        <MenuItem key={text} href={href} text={text} />
      ))}
    </ul>
  )
}

export default Menu
