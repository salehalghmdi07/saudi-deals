import React from 'react'
import ReactDOM from 'react-dom/client'
import DocumentsViewer from './DocumentsViewer' 
import './index.css' // استدعاء ملف تنسيقات Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DocumentsViewer />
  </React.StrictMode>,
)