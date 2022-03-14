import { FC } from 'react'
import classnames from 'classnames'

import { Header } from '@src/components'
import ILayout from './Layout.types'
import styles from './Layout.module.css'

const Layout: FC<ILayout> = ({ className, children, ...rest }) => {
  return (
    <div className={classnames(styles.layout, className)} {...rest}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
