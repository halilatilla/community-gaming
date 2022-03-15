import { FC } from 'react'
import classnames from 'classnames'
import Dialog from 'rc-dialog'

import { Button } from '@src/components'
import IModal from './Modal.types'

const Modal: FC<IModal> = ({ className, onClose, confirm, isVisible, header, content }) => {
  return (
    <Dialog
      animation="zoom"
      maskAnimation="fade"
      onClose={onClose}
      visible={isVisible}
      className={classnames(className)}
      closeIcon={<span />}
    >
      <div className="space-y-3">
        <p className="text-center first-letter:uppercase">{header}</p>
        <div className="max-w-full text-center text-xl font-bold capitalize"> {content} </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button label="cancel" onClick={onClose} />
        <Button label={confirm.label} className="text-danger" onClick={confirm.onConfirm} />
      </div>
    </Dialog>
  )
}

export default Modal
