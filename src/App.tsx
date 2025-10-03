import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HashRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import Index from "@/pages/Index"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Toaster />
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App