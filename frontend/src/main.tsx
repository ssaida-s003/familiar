import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

import axios from 'axios'

axios.defaults.withCredentials = false

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
