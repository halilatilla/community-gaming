export default interface IInput {
  label?: string
  type?: string
  placeholder?: string
  defaultValue?: string
  className?: string
  classNameInput?: string
  value?: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
