import { FC } from 'react'
import classnames from 'classnames'

import ICheckbox from './Checkbox.types'
import styles from './Checkbox.module.css'

const Checkbox: FC<ICheckbox> = ({ label, className, classNameCheckbox, ...rest }) => {
  return (
    <label className={classnames(styles.wrapper, className)}>
      {label && <span className={classnames(styles.label)}>{label}</span>}
      <input type="checkbox" className={classnames(styles.checkbox, classNameCheckbox)} {...rest} />
    </label>
  )
}

export default Checkbox
