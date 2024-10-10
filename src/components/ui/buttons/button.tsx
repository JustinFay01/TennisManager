import MuiButton from '@mui/material/Button'

type TmButtonProps = React.ComponentProps<typeof MuiButton>

export const TmButton = ({ children, ...props }: TmButtonProps) => (
  <MuiButton variant="contained" {...props}>
    {children}
  </MuiButton>
)
