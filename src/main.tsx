import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient(); // 클라이언트를 생성합니다.

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
)