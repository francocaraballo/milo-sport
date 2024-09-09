import { Box } from '@chakra-ui/react'
import React from 'react'

export const CountItems = ({ count }) => {
  const styles = {
    borderRadius: "10px",
    fontSize: "0.7rem",
    textDecoration: "none",
    fontWeight: "bold"
  }

  return (
    <Box style={styles}>
      {count}
    </Box>
  )
}