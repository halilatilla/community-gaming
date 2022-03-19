export default interface ISelect {
  placeholder?: string
  className?: string
  options: any[]
  onChange: (value: any) => void
}
