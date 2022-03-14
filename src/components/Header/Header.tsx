import { FC } from 'react'
import classnames from 'classnames'

import { Logo, Menu } from '@src/components'
import IHeader from './Header.types'
import styles from './Header.module.css'

const Header: FC<IHeader> = ({ className, ...rest }) => {
  return (
    <header className={classnames(styles.header, className)} {...rest}>
      <div className="container flex justify-between">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

export default Header
