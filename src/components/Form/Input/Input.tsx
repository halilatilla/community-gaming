import { FC } from 'react'
import classnames from 'classnames'

import IInput from './Input.types'
import styles from './Input.module.css'

const Input: FC<IInput> = ({ label, type = 'text', className, classNameInput, ...rest }) => {
  return (
    <label className={classnames('block', className)}>
      {label && <span className="text-sm capitalize text-gray-300">{label}</span>}
      <input type={type} className={classnames(styles.input, classNameInput)} {...rest} />
    </label>
  )
}

export default Input
