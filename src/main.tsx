import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>,
)
