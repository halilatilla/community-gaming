export default interface ICheckbox {
  label?: string
  className?: string
  classNameCheckbox?: string
  checked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
