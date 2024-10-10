import { Dialog } from '@mui/material'
import { useModalStore } from '../hooks/use-modal-store'

export const GlobalModal = () => {
  const modal = useModalStore((state) => state.modal)
  const hideModal = useModalStore((state) => state.hideModal)

  return (
    <>
      {modal && (
        <Dialog
          open={true}
          onClose={hideModal}
          maxWidth="sm"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: '1rem',
            },
          }}
        >
          {modal}
        </Dialog>
      )}
    </>
  )
}
