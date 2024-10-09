import React from 'react'
import { createRoot } from 'react-dom/client'
import { TmApp } from './app/routes'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <TmApp />
  </React.StrictMode>,
)
