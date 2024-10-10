import { ReactNode } from 'react'
import { create } from 'zustand'

interface ModalState {
  modal: ReactNode | null
  showModal: (modal: ReactNode) => void
  hideModal: () => void
}

const useModalStore = create<ModalState>()((set) => ({
  modal: null,
  modalId: null,
  showModal: (modal) => set({ modal }),
  hideModal: () => set({ modal: null }),
}))

export { useModalStore }
