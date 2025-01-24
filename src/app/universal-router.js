import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import { AppRoutes } from './routes'

export function UniversalRouter(props) {
  if (process.env.BUILD_TARGET === 'client') {
    return (
      <ReactRouter.BrowserRouter>
        <AppRoutes />
      </ReactRouter.BrowserRouter>
    )
  }

  return (
    <ReactRouter.StaticRouter location={props.location}>
      <AppRoutes />
    </ReactRouter.StaticRouter>
  )
}
