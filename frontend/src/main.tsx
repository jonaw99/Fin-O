import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ColorThemeProvider} from "@/components/color-theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ColorThemeProvider>
          <App />
      </ColorThemeProvider>
  </StrictMode>,
)
