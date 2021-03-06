export default interface IButton {
  label?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  appearance?: 'icon'
}
