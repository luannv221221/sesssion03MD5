import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DemoLifecycle from './demo-lifecycle/DemoLifecycle.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <DemoLifecycle /> */}
  </StrictMode>,
)
