export default interface IFileUpload {
  className?: string
  multiple?: boolean
  maxFiles?: number
  accept?: string
  name: string
  label?: string
  isRequired?: boolean
}
