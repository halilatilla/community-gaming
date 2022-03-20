export default interface IModal {
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
