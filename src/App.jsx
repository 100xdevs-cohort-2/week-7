
import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  
  // Suspense API
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
  </div>
}

export default App
