export default interface IInput {
  label?: string
  type?: string
  name: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isRequired?: boolean
  disabled?: boolean
}
