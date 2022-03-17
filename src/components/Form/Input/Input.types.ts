export default interface IInput {
  label?: string
  type?: string
  name: string
  placeholder?: string
  defaultValue?: string
  className?: string
  classNameInput?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isRequired?: boolean
  disabled?: boolean
  appearance?: string
}
