import { SxProps, Theme } from '@mui/material'

export type WithSx<T = unknown> = {
  sx?: SxProps<Theme> | undefined
} & T
export type WithChildren<T = unknown> = React.PropsWithChildren<T>
export type WithChildrenAndSx<T = unknown> = WithChildren<T> & WithSx
