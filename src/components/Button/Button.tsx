import { FC } from 'react'
import classnames from 'classnames'

import IButton from './Button.types'
import styles from './Button.module.css'

const Button: FC<IButton> = ({
  label,
  onClick,
  className,
  children,
  disabled,
  type = 'button',
  appearance,
  ...rest
}) => {
  return (
    <button
      className={classnames(styles.button, styles?.[appearance!], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {label} {children}
    </button>
  )
}

export default Button
