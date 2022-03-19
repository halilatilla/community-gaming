import { FC } from 'react'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './Indicator.module.css'
import IIndicator from './Indicator.types'

const Indicator: FC<IIndicator> = ({ count }) => {
  return (
    <div className={cn('flex-center', styles.indicator)}>
      <AnimatePresence>
        <motion.div key={count} exit={{ y: 75 }} initial={{ y: -75, position: 'absolute' }} animate={{ y: 0 }}>
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Indicator
