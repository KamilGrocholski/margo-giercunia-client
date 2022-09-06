import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

//LAYOUTS
import MainLayout from './layouts/MainLayout'

//PAGES
import Home from './pages/Home'
import Simulator from './pages/Simulator/index'
import Statistics from './pages/Statistics'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={ queryClient }>
      <Routes>
        <Route element={ <MainLayout /> }>
          <Route index element={ <Home /> } />
          <Route path='symulator' element={ <Simulator /> } />
          <Route path='statystyki' element={ <Statistics /> } />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App