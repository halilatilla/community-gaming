import { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useField } from 'formik'
import classnames from 'classnames'
import { HiTrash } from 'react-icons/hi'
import { isEmpty } from 'lodash'

import { Button } from '@src/components'
import RequiredText from '../RequiredText/RequiredText'
import Label from '../Label/Label'
import IFileUpload from './FileUpload.types'
import styles from './FileUpload.module.css'

const FileUpload: FC<IFileUpload> = ({
  children,
  multiple = false,
  maxFiles = 0,
  accept = 'image/jpg, image/jpeg, image/png',
  name,
  label,
  isRequired,
  className,
}) => {
  const [{ value }, meta, { setValue }] = useField(name)

  const onDrop = useCallback(
    (acceptedFiles) => setValue({ file: acceptedFiles[0], preview: URL?.createObjectURL(acceptedFiles[0]) }),
    [],
  )

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple,
    accept,
    maxFiles,
  })

  const removePhoto = (e: any) => {
    e.stopPropagation()
    setValue({ file: null, preview: '' })
  }

  return (
    <label className="block">
      {label && <Label label={label} isRequired={isRequired} />}
      <div
        {...getRootProps({
          className: classnames(
            styles.file,
            'flex-center group',
            { 'border-red-500': isDragReject },
            { 'border-green-500': isDragAccept },
            className,
          ),
        })}
      >
        <input {...getInputProps()} />
        {children}
        {isEmpty(value?.preview) && (
          <div className="absolute opacity-50">Drag 'n' drop some files here, or click to select files</div>
        )}
        {value?.preview && (
          <div className="relative">
            <img src={value?.preview} alt={value?.file?.name} className="h-full w-full object-cover object-center" />
          </div>
        )}
        {!isEmpty(value?.preview) && (
          <Button
            className="absolute right-3 top-3 hidden group-hover:block"
            appearance="icon"
            /* @ts-ignore */
            onClick={removePhoto}
          >
            <HiTrash className="text-xl text-danger" />
          </Button>
        )}
      </div>
      <RequiredText meta={meta} isFileUpload />
    </label>
  )
}

export default FileUpload
