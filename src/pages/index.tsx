import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Anna Spelling App
      </Typography>
      <Typography variant="h2" gutterBottom>
        Welcome!
      </Typography>
    </Box>
  )
}