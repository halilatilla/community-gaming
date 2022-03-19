import { FC } from 'react'
import classnames from 'classnames'

import ISelect from './Select.types'
import styles from './Select.module.css'

const Select: FC<ISelect> = ({ className, options, onChange, ...rest }) => {
  return (
    <select className={classnames(styles.select, className)} onChange={onChange} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value} defaultValue={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
