import { ConfirmModal, ConfirmModalProps } from '../components/confirm-modal'
import { useModalStore } from '../hooks/use-modal-store'

export const useConfirmModal = (props: ConfirmModalProps) => {
  const showModal = useModalStore((state) => state.showModal)

  const show = () => {
    return showModal(<ConfirmModal {...props} />)
  }
  return { show }
}
