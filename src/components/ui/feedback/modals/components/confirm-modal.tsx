import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { ReactNode } from 'react'
import { useModalStore } from '../hooks/use-modal-store'
import { TmButton } from '@/components/ui/buttons/button'
import { FlexColumn, FlexRow, FlexSpacer } from '@/components/ui/layout/flexbox'

export type ConfirmModalProps = {
  title?: ReactNode
  message?: ReactNode
  icon?: ReactNode

  confirmButton?: ReactNode
  confirmText?: string
  cancelButton?: ReactNode
  cancelText?: string

  customActions?: ReactNode

  onConfirm?: () => void
  onCancel?: () => void
}

export const ConfirmModal = ({
  title = 'Are you sure?',
  message = 'Be careful, this action cannot may be irreversible.',
  icon,
  confirmButton,
  confirmText,
  cancelButton,
  cancelText,
  customActions,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const hideModal = useModalStore((state) => state.hideModal)

  return (
    <FlexColumn sx={{ padding: 1 }}>
      <FlexRow sx={{ alignItems: 'center' }}>
        <DialogTitle variant="h1">{title}</DialogTitle>
        <FlexSpacer />
        {icon}
      </FlexRow>

      <DialogContent>{message}</DialogContent>

      <DialogActions>
        {customActions || (
          <FlexRow
            spacing={1}
            sx={{
              justifyContent: 'flex-end',
              marginTop: 1,
            }}
          >
            {cancelButton || (
              <TmButton
                sx={{
                  color: (theme) => theme.palette.info.dark,
                  border: (theme) => `1px solid ${theme.palette.info.dark}`,
                  fontWeight: 300,
                }}
                variant="outlined"
                onClick={() => {
                  if (onCancel) onCancel()
                  hideModal()
                }}
              >
                {cancelText || 'Cancel'}
              </TmButton>
            )}
            {confirmButton || (
              <TmButton
                onClick={() => {
                  if (onConfirm) onConfirm()
                  hideModal()
                }}
              >
                {confirmText || 'Confirm'}
              </TmButton>
            )}
          </FlexRow>
        )}
      </DialogActions>
    </FlexColumn>
  )
}
