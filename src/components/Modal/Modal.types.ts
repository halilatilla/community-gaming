export default interface IModal {
  className?: string
  confirm?: {
    label: string
    onConfirm: () => void
  }
  cancel?: {
    label?: string
    onClose: () => void
  }
  isVisible: boolean
  header?: string
  content?: string
}
