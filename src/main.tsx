import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Check if root element exists
const rootElement = document.getElementById('root')

if (!rootElement) {
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found!</div>'
  throw new Error('Root element not found!')
}

try {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider> 
    </StrictMode>
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; color: red; max-width: 800px; margin: 50px auto;">
      <h1>Error Loading App</h1>
      <p><strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; overflow: auto;">${error instanceof Error ? error.stack : String(error)}</pre>
      <p style="margin-top: 20px;">Check browser console (F12) for more details.</p>
    </div>
  `
}
