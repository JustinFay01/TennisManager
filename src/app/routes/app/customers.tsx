import { FlexColumn, FlexRow } from '@/components/ui/layout/flexbox'
import { useAuth0 } from '@auth0/auth0-react'
import { Card, Typography } from '@mui/material'

const ProfileInfo = () => {
  const { user } = useAuth0()
  return (
    <>
      {user && (
        <FlexColumn
          sx={{
            padding: '1rem',
          }}
        >
          <Card>
            <FlexRow>
              <img src={user.picture} alt={user.name} />
              <FlexColumn
                sx={{
                  paddingLeft: '1rem',
                }}
              >
                {Object.entries(user).map(([key, value]) => (
                  <Typography key={key}>
                    {key}: {value}
                  </Typography>
                ))}
              </FlexColumn>
            </FlexRow>
          </Card>
        </FlexColumn>
      )}
      {!user && <Typography variant="h2">No user profile found</Typography>}
    </>
  )
}

export const Customers = () => {
  return (
    <>
      <Typography variant="h1">Customers</Typography>
      <ProfileInfo />
    </>
  )
}
