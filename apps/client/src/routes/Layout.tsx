import { Box, Container } from "@mui/material"
import { FC } from "react"
import { Outlet } from "react-router-dom"

import { NavBar } from "component"
import { Alert } from "app/features/alert"

type Props = {}
const Layout: FC<Props> = props => {
  return (
    <>
      <NavBar />
      <Container>
        <Box width="100%">
          <Alert />
        </Box>
        <div className="detail">
          <Outlet />
        </div>
      </Container>
    </>
  )
}
export default Layout
