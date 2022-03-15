export default interface IModal {
  className?: string
  onClose: () => void
  confirm: {
    label: string
    onConfirm: () => void
  }
  isVisible: boolean
  header?: string
  content?: string
}
